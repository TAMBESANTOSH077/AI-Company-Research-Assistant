import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

HEADERS = {
    "User-Agent": "Mozilla/5.0"
}

IGNORE_PAGES = [
    "login",
    "signin",
    "signup",
    "privacy",
    "terms",
    "career",
    "jobs",
    "blog",
]

IMPORTANT_KEYWORDS = [
    "about",
    "product",
    "products",
    "service",
    "services",
    "solution",
    "solutions",
    "contact",
    "pricing",
]


def crawl_page(url):
    try:
        response = requests.get(
            url,
            headers=HEADERS,
            timeout=15,
        )

        if response.status_code != 200:
            return None

        soup = BeautifulSoup(response.text, "lxml")

        title = soup.title.text.strip() if soup.title else ""

        description = ""
        meta = soup.find("meta", attrs={"name": "description"})
        if meta:
            description = meta.get("content", "")

        text = soup.get_text(" ", strip=True)

        return {
            "url": url,
            "title": title,
            "description": description,
            "content": text[:8000],
        }

    except Exception:
        return None


def discover_links(base_url):

    try:

        response = requests.get(
            base_url,
            headers=HEADERS,
            timeout=15,
        )

        soup = BeautifulSoup(response.text, "lxml")

        domain = urlparse(base_url).netloc

        links = set()

        for a in soup.find_all("a", href=True):

            url = urljoin(base_url, a["href"])

            if urlparse(url).netloc != domain:
                continue

            if any(word in url.lower() for word in IGNORE_PAGES):
                continue

            links.add(url)

        return list(links)

    except Exception:
        return []


def rank_links(links):

    ranked = []

    for link in links:

        score = 0

        for keyword in IMPORTANT_KEYWORDS:
            if keyword in link.lower():
                score += 10

        ranked.append((score, link))

    ranked.sort(reverse=True)

    return [link for score, link in ranked[:8]]


def crawl_website(base_url):

    links = discover_links(base_url)

    if base_url not in links:
        links.insert(0, base_url)

    links = rank_links(links)

    pages = []

    visited = set()

    for link in links:

        if link in visited:
            continue

        visited.add(link)

        page = crawl_page(link)

        if page:
            pages.append(page)

    return pages
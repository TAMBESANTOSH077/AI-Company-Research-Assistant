import os
import requests
from dotenv import load_dotenv

load_dotenv()

SERPER_API_KEY = os.getenv("SERPER_API_KEY")

SEARCH_URL = "https://google.serper.dev/search"


def search_company(company: str):

    headers = {
        "X-API-KEY": SERPER_API_KEY,
        "Content-Type": "application/json",
    }

    payload = {
        "q": company
    }

    response = requests.post(
        SEARCH_URL,
        headers=headers,
        json=payload
    )

    return response.json()


def get_official_website(data):

    if "organic" not in data:
        return None

    for result in data["organic"]:

        link = result.get("link")

        if link:
            return link

    return None
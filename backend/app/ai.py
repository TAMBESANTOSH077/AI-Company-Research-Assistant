import os
import json
from dotenv import load_dotenv
from openai import OpenAI

# Load environment variables
load_dotenv()

API_KEY = os.getenv("OPENROUTER_API_KEY")

print("=" * 60)
print("OPENROUTER_API_KEY:", API_KEY[:15] + "..." if API_KEY else "NOT FOUND")
print("=" * 60)

client = OpenAI(
    api_key=API_KEY,
    base_url="https://openrouter.ai/api/v1",
)


def generate_company_report(company, website, pages):

    # Limit website content
    content = "\n\n".join(
        page.get("content", "")
        for page in pages
    )

    # Keep only first 8000 characters
    content = content[:8000]

    prompt = f"""
You are an expert business analyst.

Analyze the following company and return ONLY valid JSON.

Company:
{company}

Website:
{website}

Website Content:
{content}

Return this JSON only.

{{
  "company_name": "{company}",
  "website": "{website}",
  "industry": "",
  "headquarters": "",
  "founded": "",
  "ceo": "",
  "employees": "",
  "revenue": "",
  "summary": "",
  "mission": "",
  "vision": "",
  "products": [],
  "services": [],
  "technologies": [],
  "customers": [],
  "business_model": "",
  "strengths": [],
  "weaknesses": [],
  "pain_points": [],
  "opportunities": [],
  "threats": [],
  "competitors": [
    {{
      "name": "",
      "website": "",
      "reason": ""
    }}
  ]
}}
"""

    try:

        response = client.chat.completions.create(
            model="openai/gpt-4.1-mini",
            temperature=0.2,
            max_tokens=2500,
            response_format={"type": "json_object"},
            messages=[
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
        )

        result = response.choices[0].message.content

        print("\nAI Response Received\n")

        return json.loads(result)

    except Exception as e:

        print("\n========== AI ERROR ==========")
        print(e)

        return {
            "error": str(e)
        }
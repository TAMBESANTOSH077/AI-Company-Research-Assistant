from fastapi import APIRouter
from fastapi.responses import FileResponse
from pydantic import BaseModel
import traceback
import os

from search import search_company, get_official_website
from crawler import crawl_website
from ai import generate_company_report
from pdf import generate_pdf

router = APIRouter()


class CompanyRequest(BaseModel):
    company: str


@router.get("/")
def home():
    return {
        "message": "AI Company Research Assistant API Running 🚀"
    }


@router.get("/health")
def health():
    return {
        "status": "ok"
    }


@router.post("/research")
def research(data: CompanyRequest):

    try:

        print(f"\nSearching: {data.company}")

        search_result = search_company(data.company)

        website = get_official_website(search_result)

        if not website:
            return {
                "success": False,
                "message": "Official website not found."
            }

        pages = crawl_website(website)

        report = generate_company_report(
            data.company,
            website,
            pages
        )

        if "error" in report:
            return report

        report["company_name"] = data.company
        report["website"] = website

        print("Research Completed")

        return report

    except Exception as e:

        traceback.print_exc()

        return {
            "success": False,
            "message": str(e)
        }


@router.post("/generate-pdf")
def generate_pdf_report(data: CompanyRequest):

    try:

        print(f"\nGenerating PDF for: {data.company}")

        # Search company
        search_result = search_company(data.company)

        website = get_official_website(search_result)

        if not website:
            return {
                "success": False,
                "message": "Official website not found."
            }

        # Crawl website
        pages = crawl_website(website)

        # AI Report
        report = generate_company_report(
            data.company,
            website,
            pages
        )

        if "error" in report:
            return report

        report["company_name"] = data.company
        report["website"] = website

        # Generate PDF
        pdf_path = generate_pdf(report)

        print("PDF Path:", pdf_path)

        if not os.path.exists(pdf_path):
            return {
                "success": False,
                "message": "PDF was not created."
            }

        print("PDF Size:", os.path.getsize(pdf_path), "bytes")

        return FileResponse(
            path=pdf_path,
            filename=f"{data.company}_Company_Report.pdf",
            media_type="application/pdf"
        )

    except Exception as e:

        traceback.print_exc()

        return {
            "success": False,
            "message": str(e)
        }
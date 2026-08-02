from pathlib import Path
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    PageBreak,
)
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.enums import TA_CENTER
import os

styles = getSampleStyleSheet()

title = styles["Title"]
title.alignment = TA_CENTER

heading = styles["Heading2"]
body = styles["BodyText"]

BASE_DIR = Path(__file__).resolve().parent


def safe(value):
    if value is None:
        return "N/A"
    return str(value)


def add_list(story, items):
    if not items:
        story.append(Paragraph("N/A", body))
        story.append(Spacer(1, 10))
        return

    if not isinstance(items, list):
        items = [items]

    for item in items:
        story.append(
            Paragraph(f"• {safe(item)}", body)
        )

    story.append(Spacer(1, 10))


def generate_pdf(report):

    pdf_path = BASE_DIR / "company_report.pdf"

    print("Saving PDF:", pdf_path)
    print("Report Keys:", report.keys())

    doc = SimpleDocTemplate(str(pdf_path))

    story = []

    # ---------------- Cover ----------------

    story.append(
        Paragraph(
            "AI COMPANY RESEARCH REPORT",
            title,
        )
    )

    story.append(Spacer(1, 20))

    fields = [
        ("Company", "company_name"),
        ("Website", "website"),
        ("Industry", "industry"),
        ("Headquarters", "headquarters"),
        ("Founded", "founded"),
        ("CEO", "ceo"),
        ("Employees", "employees"),
        ("Revenue", "revenue"),
    ]

    for label, key in fields:
        story.append(
            Paragraph(
                f"<b>{label}:</b> {safe(report.get(key))}",
                body,
            )
        )

    story.append(PageBreak())

    # ---------------- Text Sections ----------------

    text_sections = [
        ("Executive Summary", "summary"),
        ("Mission", "mission"),
        ("Vision", "vision"),
        ("Business Model", "business_model"),
    ]

    for heading_text, key in text_sections:

        story.append(
            Paragraph(
                heading_text,
                heading,
            )
        )

        story.append(
            Paragraph(
                safe(report.get(key)),
                body,
            )
        )

        story.append(Spacer(1, 20))

    story.append(PageBreak())

    # ---------------- Lists ----------------

    list_sections = [
        ("Products", "products"),
        ("Services", "services"),
        ("Technologies", "technologies"),
        ("Customers", "customers"),
        ("Strengths", "strengths"),
        ("Weaknesses", "weaknesses"),
        ("Pain Points", "pain_points"),
        ("Opportunities", "opportunities"),
        ("Threats", "threats"),
    ]

    for heading_text, key in list_sections:

        story.append(
            Paragraph(
                heading_text,
                heading,
            )
        )

        add_list(story, report.get(key))

    story.append(PageBreak())

    # ---------------- Competitors ----------------

    story.append(
        Paragraph(
            "Competitor Analysis",
            heading,
        )
    )

    competitors = report.get("competitors", [])

    if isinstance(competitors, list):

        for comp in competitors:

            if isinstance(comp, dict):

                story.append(
                    Paragraph(
                        f"<b>{safe(comp.get('name'))}</b>",
                        body,
                    )
                )

                story.append(
                    Paragraph(
                        f"Website: {safe(comp.get('website'))}",
                        body,
                    )
                )

                story.append(
                    Paragraph(
                        f"Reason: {safe(comp.get('reason'))}",
                        body,
                    )
                )

                story.append(Spacer(1, 10))

    try:

        doc.build(story)

        print("PDF Created Successfully")
        print("Exists:", os.path.exists(pdf_path))
        print("Size:", os.path.getsize(pdf_path))

    except Exception as e:

        print("PDF Build Error:", e)
        raise

    return str(pdf_path)
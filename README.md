# 🚀 AI Company Research Assistant

An AI-powered web application that researches companies using website crawling, AI analysis, competitor research, and generates downloadable PDF reports.

---

## 📌 Features

- 🔍 Search any company
- 🌐 Automatically finds the official website
- 🕸 Crawls website content
- 🤖 AI-powered company analysis
- 🏢 Company overview
- 📦 Products & Services
- ⚠ Pain Points
- 💪 Strengths
- 🏆 Competitor Analysis
- 📄 Download Professional PDF Report
- ⚡ FastAPI Backend
- 🎨 React + Vite Frontend

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Axios
- CSS

### Backend
- FastAPI
- Python
- BeautifulSoup
- Requests
- ReportLab

### AI
- OpenRouter API
- GPT-4.1 Mini

### Search
- Serper API

---





## 📂 Project Structure

```
AI-Company-Research-Assistant
│
├── backend
│   ├── ai.py
│   ├── api.py
│   ├── crawler.py
│   ├── pdf.py
│   ├── search.py
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
├── frontend
│   ├── src
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙ Installation

## 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-Company-Research-Assistant.git
```

```bash
cd AI-Company-Research-Assistant
```

---

## 2. Backend Setup

```bash
cd backend
```

Create virtual environment

```bash
python -m venv venv
```

Activate

### Windows

```bash
venv\Scripts\activate
```

### Install dependencies

```bash
pip install -r requirements.txt
```

---

## Create .env

```env
OPENROUTER_API_KEY=YOUR_OPENROUTER_KEY
SERPER_API_KEY=YOUR_SERPER_KEY
```

---

## Run Backend

```bash
uvicorn main:app --reload
```

Backend

```
http://127.0.0.1:8000
```

Swagger

```
http://127.0.0.1:8000/docs
```

---

# 3. Frontend Setup

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run

```bash
npm run dev
```

Frontend

```
http://localhost:5173
```

---

# 📊 Workflow

```
User
   │
   ▼
Enter Company Name
   │
   ▼
Serper API Search
   │
   ▼
Official Website
   │
   ▼
Website Crawler
   │
   ▼
OpenRouter GPT-4.1 Mini
   │
   ▼
Company Analysis
   │
   ▼
Display Report
   │
   ▼
Generate PDF
```

---

# 📄 AI Report Includes

- Company Overview
- Industry
- Headquarters
- Executive Summary
- Products
- Services
- Technologies
- Customers
- Business Model
- Strengths
- Weaknesses
- Pain Points
- Opportunities
- Threats
- Competitor Analysis

---

# 🎯 Future Improvements

- Authentication
- Company Logo
- Financial Analysis
- Interactive Charts
- Export DOCX
- Email Report
- Dark/Light Mode
- Multi-language Support
- Historical Comparison
- AI Chat Assistant

---

# 👨‍💻 Author

**Santosh Tambe**

- GitHub: https://github.com/TAMBESANTOSH077
- LinkedIn: https://linkedin.com/in/santosh-tambe

---

# ⭐ Support

If you found this project helpful, please give it a ⭐ on GitHub.

---

# 📜 License

This project is licensed under the MIT License.

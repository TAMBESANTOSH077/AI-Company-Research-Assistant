import { useState } from "react";
import api from "../services/api";

export default function ChatInput({
  setResult,
  setStep,
  setCompanyName,
}) {

  const [company, setCompany] = useState("");

  const handleResearch = async () => {

    if (!company.trim()) {
      alert("Enter company name");
      return;
    }

    try {

      setCompanyName(company);

      setStep(0);

      const timer = (step) =>
        new Promise((resolve) => {
          setTimeout(() => {
            setStep(step);
            resolve();
          }, 300);
        });

      await timer(1);
      await timer(2);

      const response = await api.post("/research", {
        company,
      });

      setResult(response.data);

      await timer(3);
      await timer(4);

    } catch (error) {

      console.error(error);

      alert("Research failed.");

      setStep(-1);

    }

  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "10px",
        marginTop: "40px",
      }}
    >
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Microsoft or https://microsoft.com"
        style={{
          flex: 1,
          padding: "18px",
          borderRadius: "10px",
          border: "1px solid #334155",
          background: "#1e293b",
          color: "white",
          fontSize: "16px",
          outline: "none",
        }}
      />

      <button
        onClick={handleResearch}
        style={{
          padding: "18px 25px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        🔍 Research
      </button>
    </div>
  );
}
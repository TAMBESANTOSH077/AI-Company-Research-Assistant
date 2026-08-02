export default function ChatMessage() {
  return (
    <div
      style={{
        width: "900px",
        background: "#1e293b",
        marginTop: "40px",
        padding: "25px",
        borderRadius: "15px",
        border: "1px solid #334155",
      }}
    >
      <h3 style={{ marginBottom: "15px" }}>
        👋 Welcome
      </h3>

      <p style={{ color: "#cbd5e1", lineHeight: "28px" }}>
        Enter a company name or website URL to generate an AI-powered research report.
      </p>
    </div>
  );
}
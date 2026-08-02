export default function CompanyReport({ report }) {
  if (!report) return null;

  return (
    <div
      style={{
        marginTop: "40px",
        background: "#1e293b",
        padding: "25px",
        borderRadius: "12px",
        color: "white",
      }}
    >
      <h2>🏢 Company Summary</h2>

      <p style={{ marginTop: "15px", lineHeight: "28px" }}>
        {report.summary}
      </p>
    </div>
  );
}
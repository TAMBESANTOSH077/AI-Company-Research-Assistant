export default function CompanyCard() {
  return (
    <div
      style={{
        width: "900px",
        background: "#1e293b",
        padding: "25px",
        borderRadius: "15px",
        marginTop: "25px",
      }}
    >
      <h2>Microsoft</h2>

      <p>🌐 www.microsoft.com</p>

      <p>📞 +1 800 642 7676</p>

      <p>📍 Redmond, Washington</p>

      <h3>Products</h3>

      <ul>
        <li>Azure</li>
        <li>Office 365</li>
        <li>Windows</li>
      </ul>
    </div>
  );
}
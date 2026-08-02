export default function PainPointCard({ painPoints }) {

  if (!Array.isArray(painPoints) || painPoints.length === 0) {
    return null;
  }

  return (
    <div
      style={{
        marginTop: "25px",
        background: "#1e293b",
        padding: "25px",
        borderRadius: "12px",
        color: "white",
      }}
    >
      <h2>⚠ AI Pain Points</h2>

      <ul style={{ marginTop: "15px" }}>
        {painPoints.map((item, index) => (
          <li key={index}>
            {typeof item === "string" ? item : JSON.stringify(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
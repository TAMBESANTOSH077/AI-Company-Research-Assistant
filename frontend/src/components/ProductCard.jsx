export default function ProductCard({ products }) {

  if (!products || products.length === 0) {
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
      <h2>📦 Products & Services</h2>

      <ul style={{ marginTop: "15px" }}>
        {products.map((item, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {typeof item === "string" ? item : JSON.stringify(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
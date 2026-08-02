export default function CompetitorCard({ competitors }) {

  if (!competitors || competitors.length === 0) {
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
      <h2>🏆 Competitors</h2>

      <ul style={{ marginTop: "15px" }}>
        {competitors.map((item, index) => (
          <li key={index} style={{ marginBottom: "15px" }}>
            <strong>{item.name}</strong>
            <br />

            {item.website && (
              <>
                🌐{" "}
                <a
                  href={item.website}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  {item.website}
                </a>
                <br />
              </>
            )}

            {item.reason && (
              <>Reason: {item.reason}</>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default function Loading() {
  return (
    <div
      style={{
        width: "900px",
        marginTop: "25px",
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <p>🔍 Searching Company...</p>

      <progress
        style={{
          width: "100%",
          marginTop: "15px",
        }}
      />
    </div>
  );
}
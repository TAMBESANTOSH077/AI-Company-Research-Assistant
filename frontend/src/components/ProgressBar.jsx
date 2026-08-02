export default function ProgressBar({ step }) {
  const steps = [
    "Searching",
    "Finding Website",
    "Crawling",
    "AI Analysis",
    "Completed",
  ];

  return (
    <div
      style={{
        marginTop: "30px",
        background: "#1e293b",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      {steps.map((item, index) => (
        <div
          key={index}
          style={{
            color: index <= step ? "#22c55e" : "#94a3b8",
            marginBottom: "10px",
            fontWeight: index === step ? "bold" : "normal",
          }}
        >
          {index <= step ? "✅" : "⏳"} {item}
        </div>
      ))}
    </div>
  );
}
export default function ActivityTimeline({ steps }) {
  return (
    <div className="bg-slate-900 rounded-xl p-5 mt-8">
      <h2 className="text-xl font-bold mb-4">
        Research Progress
      </h2>

      {steps.map((step, index) => (
        <div key={index} className="flex gap-3 py-2">
          <span>{step.done ? "✅" : "⏳"}</span>

          <span>{step.label}</span>
        </div>
      ))}
    </div>
  );
}
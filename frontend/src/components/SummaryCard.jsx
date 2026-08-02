export default function SummaryCard({ report }) {
  if (!report) return null;

  return (
    <div className="bg-slate-900 rounded-xl p-6 mt-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
        🏢 Company Summary
      </h2>

      <p className="text-slate-300 leading-8">
        {report.summary}
      </p>
    </div>
  );
}
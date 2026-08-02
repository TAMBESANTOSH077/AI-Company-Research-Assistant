export default function InfoCard({ report }) {

  if (!report) return null;

  return (
    <div className="grid md:grid-cols-2 gap-5 mt-6">

      <div className="bg-slate-900 p-5 rounded-xl">
        <h3 className="font-bold">Industry</h3>
        <p>{report.industry}</p>
      </div>

      <div className="bg-slate-900 p-5 rounded-xl">
        <h3 className="font-bold">Headquarters</h3>
        <p>{report.headquarters}</p>
      </div>

      <div className="bg-slate-900 p-5 rounded-xl">
        <h3 className="font-bold">Website</h3>
        <p>{report.website}</p>
      </div>

      <div className="bg-slate-900 p-5 rounded-xl">
        <h3 className="font-bold">Company</h3>
        <p>{report.company_name}</p>
      </div>

    </div>
  );
}
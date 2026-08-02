export default function CompetitorTable({ competitors }) {

  if (!competitors) return null;

  return (
    <div className="bg-slate-900 rounded-xl mt-6 overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-800">

          <tr>

            <th className="p-4 text-left">Company</th>

            <th className="p-4 text-left">Website</th>

            <th className="p-4 text-left">Reason</th>

          </tr>

        </thead>

        <tbody>

          {competitors.map((item, index) => (

            <tr key={index} className="border-t border-slate-700">

              <td className="p-4">
                {item.name}
              </td>

              <td className="p-4">
                {item.website}
              </td>

              <td className="p-4">
                {item.reason}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-5">
        <h1 className="text-xl font-bold">
          🚀 AI Company Research Assistant
        </h1>

        <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
          Settings
        </button>
      </div>
    </nav>
  );
}
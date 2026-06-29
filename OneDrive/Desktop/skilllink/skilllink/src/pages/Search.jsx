import { Link } from "react-router-dom";

export default function Search() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Search People</h1>

      <input
        type="text"
        placeholder="Search by skill..."
        className="w-full mb-6 p-2 border border-gray-300 rounded"
      />

      <div className="space-y-4">
        <div className="bg-white p-4 rounded shadow flex justify-between items-center">
          <div>
            <h2 className="font-bold">John Doe</h2>
            <p className="text-gray-600">Skills: React, Node.js</p>
          </div>
          <Link
            to="/chat"
            className="bg-blue-500 text-white p-2 rounded"
          >
            Chat
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <Link to="/dashboard" className="text-blue-500">
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

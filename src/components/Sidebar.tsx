import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-8">CRM</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="hover:bg-gray-700 p-2 rounded">
          Dashboard
        </Link>
        <Link href="/clients" className="hover:bg-gray-700 p-2 rounded">
          Clients
        </Link>
        <Link href="/appointments" className="hover:bg-gray-700 p-2 rounded">
          Appointments
        </Link>
      </nav>
      <div className="mt-auto">
        <button className="w-full bg-red-600 p-2 rounded">Logout</button>
      </div>
    </div>
  );
}

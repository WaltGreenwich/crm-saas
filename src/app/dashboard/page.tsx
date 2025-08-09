import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />
        <div className="p-6 grid grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded">Total Clients: 125</div>
          <div className="bg-white p-4 shadow rounded">Appointments: 42</div>
          <div className="bg-white p-4 shadow rounded">Revenue: $58,300</div>
        </div>
      </div>
    </div>
  );
}

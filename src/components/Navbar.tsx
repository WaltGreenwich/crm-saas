"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const getPageTitle = () => {
    switch (pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/clients":
        return "Clientes";
      case "/appointments":
        return "Citas";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-4">
      <h1 className="text-xl font-semibold">{getPageTitle()}</h1>
      <div className="flex items-center gap-3">
        <div className="text-sm text-gray-600">Usuario</div>
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-sm font-medium text-gray-600">U</span>
        </div>
      </div>
    </div>
  );
}

"use client";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import SidebarCashier from "../../components/SidebarCashier";

const CashierEditTransaction = () => {
  const pathname = usePathname();
  const currentPath = pathname.split("/")[1].split("-")[2];

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    redirect("/login");
  }

  const role = useSelector((state) => state.auth.role);
  if (role === 1) {
    redirect("/admin-dashboard");
  }

  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      <SidebarCashier path={currentPath} />
      <div className="pl-24 my-5 w-screen">
        <div className="mb-5">
          <p className="text-2xl font-bold">Edit Transaction - INV001</p>
        </div>
        <div className="mr-4 mb-5">
          <table className="w-64">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-400 text-left">Cashier Name</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Date</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-3 bg-white border-b">
                  <input type="text" placeholder="Inserst new name cashier" defaultValue="Cashier 1" className="w-52 py-2 focus:outline-none" />
                </td>
                <td className="px-6 py-3 bg-white border-b">
                  <input type="text" placeholder="Insert new date" defaultValue="23 Desember 2023" className="w-52 py-2 focus:outline-none" />
                </td>
                <td className="px-6 py-3 bg-white border-b">
                  <input type="text" placeholder="Insert new total" defaultValue="Rp. 150.000" className="w-52 py-2 focus:outline-none" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full flex">
          <button type="submit" className="btn btn-success bg-green-500 text-white btn-wide">
            Save Change
          </button>
        </div>
      </div>
    </div>
  );
}

export default CashierEditTransaction
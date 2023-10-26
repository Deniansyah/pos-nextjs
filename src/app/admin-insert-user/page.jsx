"use client";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import Sidebar from "../../components/Sidebar";

const AdminInsertUser = () => {
  const pathname = usePathname();
  const currentPath = pathname.split("/")[1].split("-")[2]

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    redirect("/login");
  }

  const role = useSelector((state) => state.auth.role);
  if (role === 2) {
    redirect("/cashier-main");
  }

  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      <Sidebar path={currentPath} />
      <div className="pl-24 my-5 w-screen">
        <div className="mb-5">
          <p className="text-2xl font-bold">Add New User</p>
        </div>
        <div className="mr-4 mb-5">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-400 text-left">Picture</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Name</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Email</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Password</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-3 bg-white border-b">
                  <input type="file" name="picture" id="picture" className="w-44 py-2 focus:outline-none" />
                </td>
                <td className="px-6 py-3 bg-white border-b">
                  <input type="text" placeholder="Name" className="w-44 py-2 focus:outline-none" />
                </td>
                <td className="px-6 py-3 bg-white border-b">
                  <input type="text" placeholder="Your email address" className="w-44 py-2 focus:outline-none" />
                </td>
                <td className="px-6 py-3 bg-white border-b">
                  <input type="password" placeholder="Your password" className="w-44 py-2 focus:outline-none" />
                </td>
                <td className="px-6 py-3 bg-white border-b">
                  <input type="number" placeholder="Role" className="w-44 py-2 focus:outline-none" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-center">
          <button type="submit" className="btn btn-success bg-green-500 text-white btn-wide">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminInsertUser;

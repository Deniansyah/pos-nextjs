"use client";
import { usePathname } from "next/navigation";
import Sidebar from "../../components/Sidebar";

const AdminInsertCategory = () => {
  const pathname = usePathname();
  const currentPath = pathname.split("/")[1].split("-")[2];

  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      <Sidebar path={currentPath} />
      <div className="pl-24 my-5 w-screen">
        <div className="mb-5">
          <p className="text-2xl font-bold">Add New Category</p>
        </div>
        <div className="mr-4 mb-5">
          <table className="w-64">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-400 text-left">Category Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-3 bg-white border-b">
                  <input type="text" placeholder="Name" className="w-52 py-2 focus:outline-none" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full flex">
          <button type="submit" className="btn btn-success bg-green-500 text-white btn-wide">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminInsertCategory;

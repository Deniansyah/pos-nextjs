import { LuHome, LuArchive, LuSettings, LuLogOut, LuLayoutGrid } from "react-icons/lu";


const AdminInsertCategory = () => {
  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      <div className="flex flex-col fixed h-screen gap-10 w-28 px-4 py-5 border-r bg-[#fbbd23] rounded-tr-2xl rounded-br-2xl">
        <button className="flex flex-col justify-center items-center text-gray-500">
          <LuHome className="text-2xl" />
          <p>Home</p>
        </button>
        <button className="flex flex-col justify-center items-center text-gray-500">
          <LuArchive className="text-2xl" />
          <p>Product</p>
        </button>
        <button className="flex flex-col justify-center items-center bg-[#ecca73] rounded-xl p-3">
          <LuLayoutGrid className="text-2xl" />
          <p>Category</p>
        </button>
        <button className="flex flex-col justify-center items-center text-gray-500">
          <LuSettings className="text-2xl" />
          <p>Setting</p>
        </button>
        <div className="flex flex-col justify-end items-center text-red-500 grow">
          <button className="flex flex-col justce items-center">
            <LuLogOut className="text-2xl" />
            <p>Log out</p>
          </button>
        </div>
      </div>
      <div className="pl-32 my-5 w-screen">
        <div className="mb-5">
          <p className="text-2xl font-bold">Add New Category</p>
        </div>
        <div className="mr-5 mb-5">
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
}

export default AdminInsertCategory
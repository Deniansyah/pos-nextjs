import { LuHome, LuArchive, LuSettings, LuLogOut } from "react-icons/lu";

const AdminInsertProduct = () => {
  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      <div className="flex flex-col fixed h-screen gap-10 w-28 px-4 py-5 border-r bg-[#fbbd23] rounded-tr-2xl rounded-br-2xl">
        <button className="flex flex-col justify-center items-center text-gray-500">
          <LuHome className="text-2xl" />
          <p>Home</p>
        </button>
        <button className="flex flex-col justify-center items-center bg-[#ecca73] rounded-xl p-3">
          <LuArchive className="text-2xl" />
          <p>Product</p>
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
          <p className="text-2xl font-bold">Add New Product</p>
        </div>
        <div className="mr-5 mb-5">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-400 text-left">Picture</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Categories</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Name</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Description</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-3 bg-white border-b">
                  <input type="file" name="picture" id="picture" className="w-44 py-2 focus:outline-none" />
                </td>
                <td className="px-6 py-3 bg-white border-b">
                  <input type="text" placeholder="Categories" className="w-44 py-2 focus:outline-none" />
                </td>
                <td className="px-6 py-3 bg-white border-b">
                  <input type="text" placeholder="Name" className="w-44 py-2 focus:outline-none" />
                </td>
                <td className="px-6 py-3 bg-white border-b">
                  <input type="text" placeholder="Description" className="w-44 py-2 focus:outline-none" />
                </td>
                <td className="px-6 py-3 bg-white border-b">
                  <input type="number" placeholder="Price" className="w-44 py-2 focus:outline-none" />
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

export default AdminInsertProduct;

import { LuHome, LuArchive, LuSettings, LuLogOut, LuLayoutGrid, LuUser, LuArrowRightLeft, LuArrowUp, LuArrowDown, LuDollarSign, LuBookmarkMinus, LuUsers } from "react-icons/lu";

const AdminDashboard = () => {
  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      <div className="flex flex-col fixed h-screen gap-10 w-28 px-4 py-5 border-r bg-[#fbbd23] rounded-tr-2xl rounded-br-2xl">
        <button className="flex flex-col justify-center items-center bg-[#ecca73] rounded-xl p-3">
          <LuHome className="text-2xl" />
          <p>Home</p>
        </button>
        <button className="flex flex-col justify-center items-center text-gray-500">
          <LuArchive className="text-2xl" />
          <p>Product</p>
        </button>
        <button className="flex flex-col justify-center items-center text-gray-500">
          <LuLayoutGrid className="text-2xl" />
          <p>Category</p>
        </button>
        <button className="flex flex-col justify-center items-center text-gray-500">
          <LuUser className="text-2xl" />
          <p>Users</p>
        </button>
        <button className="flex flex-col justify-center items-center text-gray-500">
          <LuArrowRightLeft className="text-2xl" />
          <p>Transaction</p>
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
      <div className="pl-32 my-5 w-screen mr-4">
        <div className="mb-5 flex flex-col">
          <p className="text-2xl font-bold">Dashboard</p>
          <p className="mb-3">Kamis, 23 Desember 2023</p>
          <div className="w-full border-b border-gray-400" />
        </div>
        <div className="w-full flex gap-10 justify-center mb-5">
          <div className="bg-white p-3 rounded-lg flex flex-col gap-2 w-60">
            <div className="flex gap-3">
              <span className="bg-orange-200 p-2 rounded-lg">
                <LuDollarSign className="text-warning" />
              </span>
              <div className="flex justify-center items-center text-green-500">
                <p>+32%</p>
                <LuArrowUp />
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold">Rp. 50.000</p>
            </div>
            <div>
              <p>Total Revenue</p>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg flex flex-col gap-2 w-60">
            <div className="flex gap-3">
              <span className="bg-orange-200 p-2 rounded-lg">
                <LuBookmarkMinus className="text-warning" />
              </span>
              <div className="flex justify-center items-center text-red-500">
                <p>-22%</p>
                <LuArrowDown />
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold">24,532</p>
            </div>
            <div>
              <p>Total Dish Oredered</p>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg flex flex-col gap-2 w-60">
            <div className="flex gap-3">
              <span className="bg-orange-200 p-2 rounded-lg">
                <LuUsers className="text-warning" />
              </span>
              <div className="flex justify-center items-center text-green-500">
                <p>+10%</p>
                <LuArrowUp />
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold">1.234</p>
            </div>
            <div>
              <p>Total Customer</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg min-h-60 mb-5 p-5">
          <div className="w-full flex flex-col gap-3 justify-center items-center mb-5">
            <h1 className="text-2xl">Most Product Ordered</h1>
            <div className="w-full border-b border-gray-400" />
          </div>
          <div className="flex justify-between mb-5">
            <div className="flex gap-3 bg-gray-200 w-80 p-3 rounded-xl">
              <div className="flex justify-center items-center">
                <div className="w-20 h-20 rounded-xl bg-red-500" />
              </div>
              <div className="w-full">
                <h3 className="font-bold w-40 mb-3">Lorem ipsum dolor sit amet.</h3>
                <div className="flex w-full">
                  <p>Rp. 35.000</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 bg-gray-200 w-80 p-3 rounded-xl">
              <div className="flex justify-center items-center">
                <div className="w-20 h-20 rounded-xl bg-red-500" />
              </div>
              <div className="w-full">
                <h3 className="font-bold w-40 mb-3">Lorem ipsum dolor sit amet.</h3>
                <div className="flex w-full">
                  <p>Rp. 35.000</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 bg-gray-200 w-80 p-3 rounded-xl">
              <div className="flex justify-center items-center">
                <div className="w-20 h-20 rounded-xl bg-red-500" />
              </div>
              <div className="w-full">
                <h3 className="font-bold w-40 mb-3">Lorem ipsum dolor sit amet.</h3>
                <div className="flex w-full">
                  <p>Rp. 35.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="btn btn-outline btn-warning btn-wide btn-sm capitalize">Lainnya...</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard
"use client";
import { LuHome, LuArchive, LuSettings, LuLogOut, LuLayoutGrid, LuUser, LuEdit } from "react-icons/lu";

const AdminEditUser = () => {
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
        <button className="flex flex-col justify-center items-center text-gray-500">
          <LuLayoutGrid className="text-2xl" />
          <p>Category</p>
        </button>
        <button className="flex flex-col justify-center items-center bg-[#ecca73] rounded-xl p-3">
          <LuUser className="text-2xl" />
          <p>Users</p>
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
          <p className="text-2xl font-bold">Edit User</p>
        </div>
        <div className="w-full min-h-[70%] p-5 flex flex-col gap-6">
          <form>
            <div className="flex gap-5">
              <div className="flex flex-col gap-2 justify-center items-center">
                <img src="" alt="Product 1" className="h-60 w-60 rounded-full bg-warning" />
                <span className="flex justify-center items-center gap-1 cursor-pointer">
                  <LuEdit />
                  <p>Edit Picture</p>
                </span>
                <input
                  type="file"
                  name="picture"
                  className="block w-[80%] text-sm text-slate-500 file:mr-2 file:py-2 file:px-2 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-[#101540] hover:file:bg-gray-300"
                />
              </div>
              <div className="flex flex-col gap-3 justify-center mt-3">
                <div>
                  <p>Name :</p>
                  <input className="focus:outline-none w-64 p-2 border border-black rounded-sm" name="name" type="text" placeholder="User 1" defaultValue="User 1" />
                </div>
                <div>
                  <p>Email :</p>
                  <input className="focus:outline-none w-64 p-2 border border-black rounded-sm" name="email" type="text" placeholder="user1@example.com" defaultValue="user1@example.com" />
                </div>
                <div>
                  <p>Password :</p>
                  <input className="focus:outline-none w-64 p-2 border border-black rounded-sm" name="password" type="password" placeholder="user1@example.com" defaultValue="user1@example.com" />
                </div>
                <div>
                  <p>Role :</p>
                  <input className="focus:outline-none w-64 p-2 border border-black rounded-sm" type="text" name="role" placeholder="Admin" defaultValue="Admin" />
                </div>
              </div>
            </div>
            <div className="w-full flex mt-10">
              <button type="submit" className="btn btn-success bg-green-500 text-white btn-wide">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminEditUser;

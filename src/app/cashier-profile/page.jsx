"use client";
import { LuShoppingBag, LuSettings, LuLogOut, LuArrowRightLeft, LuEdit } from "react-icons/lu";

const CashierProfile = () => {
  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      <div className="flex flex-col fixed h-screen gap-10 w-28 px-4 py-5 border-r bg-[#fbbd23] rounded-tr-2xl rounded-br-2xl">
        <button className="flex flex-col justify-center items-center text-gray-500">
          <LuShoppingBag className="text-2xl" />
          <p>Market</p>
        </button>
        <button className="flex flex-col justify-center items-center text-gray-500">
          <LuArrowRightLeft className="text-2xl" />
          <p>Transaction</p>
        </button>
        <button className="flex flex-col justify-center items-center bg-[#ecca73] rounded-xl p-3">
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
        <div className="mb-5">
          <h1 className="text-2xl font-bold">Profile</h1>
        </div>
        <form>
          <div className="bg-white w-full p-5 min-h-[80%] flex flex-col gap-6">
            <div className="flex gap-5">
              <div className="flex flex-col gap-2 justify-center items-center">
                {/* {user.picture ? <img src={user.picture} alt={user.name} className="h-60 w-60 rounded-full border" /> : <img src={profileDefault} alt={user.name} className="h-60 w-60 rounded-full border" />} */}
                <img src="" alt="Profile name" className="h-60 w-60 rounded-full border" />
                <span className="flex justify-center items-center gap-1 cursor-pointer">
                  <LuEdit />
                  <p>Edit Picture</p>
                </span>
                {/* {hidden ? (
                  <input
                    type="file"
                    name="picture"
                    onChange={handlePictureChange}
                    className="block w-[80%] text-sm text-slate-500 file:mr-2 file:py-2 file:px-2 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-[#101540] hover:file:bg-gray-300"
                  />
                ) : null} */}
                <input
                  type="file"
                  name="picture"
                  // onChange={handlePictureChange}
                  className="block w-[80%] text-sm text-slate-500 file:mr-2 file:py-2 file:px-2 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-[#101540] hover:file:bg-gray-300"
                />
              </div>
              <div className="flex flex-col gap-3 justify-center mt-3">
                <div>
                  <p>User Name :</p>
                  <input className="focus:outline-none w-64 p-2 border-2 border-black rounded-sm" name="name" type="text" placeholder="Input new username" defaultValue="Cashier 1" />
                </div>
                <div>
                  <p>Email :</p>
                  <input className="focus:outline-none w-64 p-2 border-2 border-black rounded-sm" type="email" name="email" placeholder="Your email address" defaultValue="cashier1@mail.com" disabled="on" />
                </div>
                <div>
                  <p>
                    <span className="text-red-500">*</span>Password :
                  </p>
                  <input className="focus:outline-none w-64 p-2 border-2 border-black rounded-sm" type="password" name="password" placeholder="Insert your password" />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <button
                // disabled={isButtonDisabled}
                type="submit"
                className="btn btn-warning"
                // {isButtonDisabled ? "bg-gray-500 py-2 px-3 rounded-md text-white w-fit" : "bg-[#101540] py-2 px-3 rounded-md text-white w-fit"}
              >
                Save Change
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CashierProfile;

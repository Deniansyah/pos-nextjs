"use client"
import Link from "next/link";
import { LuSettings, LuLogOut, LuShoppingBag, LuArrowRightLeft } from "react-icons/lu";
import { logout as LogoutAction } from "../store/auth/reducer";
import { useDispatch } from "react-redux";

const Sidebar = (props) => {
  const dispatch = useDispatch();

  const main = "main";
  const transaction = "transaction";
  const profile = "profile";

  const Logout = () => {
    dispatch(LogoutAction());
  };

  return (
    <div className="group hover:w-40 hover:shadow-2xl hover:items-start flex flex-col fixed h-screen gap-3 w-20 px-4 py-5 hover:px-0 border-r bg-[#fbbd23] rounded-tr-2xl rounded-br-2xl items-center z-10">
      <Link
        href={"/cashier-main"}
        className={`flex group-hover:px-4 justify-center items-center gap-5 ${
          main === props.path
            ? "bg-[#ecca73] rounded-full group-hover:rounded-l-none w-12 h-12 group-hover:w-full group-hover:justify-start"
            : "text-gray-500 hover:bg-orange-400 rounded-full group-hover:rounded-l-none w-12 h-12 group-hover:w-full group-hover:justify-start"
        }`}>
        <LuShoppingBag className="text-2xl" />
        <p className="hidden group-hover:block">Market</p>
      </Link>
      <Link
        href={"/cashier-list-transaction"}
        className={`flex group-hover:px-4 justify-center items-center gap-5 ${
          transaction === props.path
            ? "bg-[#ecca73] rounded-full group-hover:rounded-l-none w-12 h-12 group-hover:w-full group-hover:justify-start"
            : "text-gray-500 hover:bg-orange-400 rounded-full group-hover:rounded-l-none w-12 h-12 group-hover:w-full group-hover:justify-start"
        }`}>
        <LuArrowRightLeft className="text-2xl" />
        <p className="hidden group-hover:block">Transaction</p>
      </Link>
      <Link
        href={"/cashier-profile"}
        className={`flex group-hover:px-4 justify-center items-center gap-5 ${
          profile === props.path
            ? "bg-[#ecca73] rounded-full group-hover:rounded-l-none w-12 h-12 group-hover:w-full group-hover:justify-start"
            : "text-gray-500 hover:bg-orange-400 rounded-full group-hover:rounded-l-none w-12 h-12 group-hover:w-full group-hover:justify-start"
        }`}>
        <LuSettings className="text-2xl" />
        <p className="hidden group-hover:block">Profile</p>
      </Link>
      <div className="grow" />
      <div className="flex group-hover:px-4 justify-center items-center text-red-500 hover:bg-orange-400 rounded-full group-hover:rounded-l-none w-12 h-12 group-hover:w-full group-hover:justify-start">
        <button className="flex justify-center items-center gap-5" onClick={Logout}>
          <LuLogOut className="text-2xl" />
          <p className="hidden group-hover:block">Log out</p>
        </button>
      </div>
    </div>
  );
}

export default Sidebar
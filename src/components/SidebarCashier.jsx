"use client";
import Link from "next/link";
import Image from "next/image";
import profileDefault from "../../public/profileDefault.png";
import http from "../helpers/http";
import jwt_decode from "jwt-decode";
import { LuSettings, LuLogOut, LuShoppingBag, LuArrowRightLeft } from "react-icons/lu";
import { logout as LogoutAction } from "../store/auth/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.data);
  const [userDb, setUserDb] = useState({});
  const role = useSelector((state) => state.auth.role);

  const cashier = "cashier";
  const transaction = "transaction";
  const profile = "profile";

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
  const { id } = jwt_decode(token);

    try {
      const response = await http(token).get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/users/${id}`);
      setUserDb(response.data.results);
    } catch (error) {
      setUserDb({});
    }
  };

  const Logout = () => {
    dispatch(LogoutAction());
  };

  return (
    <div className="group hover:w-60 hover:shadow-2xl hover:items-start flex flex-col fixed h-screen gap-3 w-20 px-4 py-5 hover:px-0 border-r bg-[#fbbd23] rounded-tr-2xl rounded-br-2xl items-center z-10">
      <div className="flex group-hover:px-3 justify-center items-center gap-3 text-gray-500 rounded-full group-hover:rounded-l-none w-12 group-hover:w-full group-hover:justify-start">
        <Image src={userDb?.picture === null ? profileDefault : userDb?.picture} alt={userDb?.name} width={44} height={44} className="group-hover:w-8 group-hover:h-8 rounded-full border-2 border-gray-500" />
        <p className="hidden group-hover:block group-hover:pl-1">
          {role === 1 ? "Admin, " : "Cashier, "}
          {userDb?.name}
        </p>
      </div>
      <Link
        href={"/cashier"}
        className={`flex group-hover:px-4 justify-center items-center gap-5 ${
          cashier === props.path
            ? "bg-[#ecca73] rounded-full group-hover:rounded-l-none w-12 h-12 group-hover:w-full group-hover:justify-start"
            : "text-gray-500 hover:bg-orange-400 rounded-full group-hover:rounded-l-none w-12 h-12 group-hover:w-full group-hover:justify-start"
        }`}>
        <LuShoppingBag className="text-2xl" />
        <p className="hidden group-hover:block">Market</p>
      </Link>
      <Link
        href={"/cashier/transaction"}
        className={`flex group-hover:px-4 justify-center items-center gap-5 ${
          transaction === props.path
            ? "bg-[#ecca73] rounded-full group-hover:rounded-l-none w-12 h-12 group-hover:w-full group-hover:justify-start"
            : "text-gray-500 hover:bg-orange-400 rounded-full group-hover:rounded-l-none w-12 h-12 group-hover:w-full group-hover:justify-start"
        }`}>
        <LuArrowRightLeft className="text-2xl" />
        <p className="hidden group-hover:block">Transaction</p>
      </Link>
      <Link
        href={"/cashier/profile"}
        className={`flex group-hover:px-4 justify-center items-center gap-5 ${
          profile === props.path
            ? "bg-[#ecca73] rounded-full group-hover:rounded-l-none w-12 h-12 group-hover:w-full group-hover:justify-start"
            : "text-gray-500 hover:bg-orange-400 rounded-full group-hover:rounded-l-none w-12 h-12 group-hover:w-full group-hover:justify-start"
        }`}>
        <LuSettings className="text-2xl" />
        <p className="hidden group-hover:block">Profile Setting</p>
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
};

export default Sidebar;

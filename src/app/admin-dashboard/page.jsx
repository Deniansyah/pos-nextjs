"use client"
import { LuDollarSign, LuArrowUp, LuBookmarkMinus, LuArrowDown, LuUsers } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

const AdminDashboard = () => {
  const pathname = usePathname();
  const currentPath = pathname.split("/")[1].split("-")[1];
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    updateDate();
  }, []);

  const updateDate = () => {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const today = new Date();
    setCurrentDate(today.toLocaleDateString("en-US", options));
  };

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
      <div className="pl-24 my-5 w-screen mr-4">
        <div className="mb-4 flex flex-col">
          <p className="text-2xl font-bold">Dashboard</p>
          <p className="mb-3">{currentDate}</p>
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
              <p>Total products ordered</p>
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
            <button className="btn btn-outline btn-warning btn-wide btn-sm capitalize">Other...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

"use client";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { LuEdit } from "react-icons/lu";
import SidebarCashier from "../../components/SidebarCashier";

const CashierProfile = () => {
  const pathname = usePathname();
  const currentPath = pathname.split("/")[1].split("-")[1];

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    redirect("/login");
  }

  const role = useSelector((state) => state.auth.role);
  if (role === 1) {
    redirect("/admin-dashboard");
  }

  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      <SidebarCashier path={currentPath} />
      <div className="pl-24 my-5 w-screen mr-4">
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

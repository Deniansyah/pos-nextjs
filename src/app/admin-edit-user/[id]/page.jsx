"use client";
import Image from "next/image";
import profileDefault from "../../../../public/profileDefault.png";
import http from "../../../helpers/http";
import Sidebar from "../../../components/Sidebar";
import { usePathname } from "next/navigation";
import { LuEdit } from "react-icons/lu";
import { redirect, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const AdminEditUser = ({ params }) => {
  const id = params.id;
  const pathname = usePathname();
  const currentPath = pathname.split("/")[1].split("-")[2];

  const token = useSelector((state) => state.auth.data);
  const router = useRouter();

  const [users, setUsers] = useState({});
  const [picture, setPicture] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [roleDb, setRoleDb] = useState("");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await http(token).get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/users/${id}`);
      setUsers(response.data.results);
    } catch (error) {
      setUsers({});
    }
  };

  const handlePictureChange = (event) => {
    setPicture(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRoleDb(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const updateUsers = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", roleDb);
    formData.append("password", password);

    if (picture) {
      formData.append("picture", picture);
    }

    try {
      const data = await http(token).patch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/users/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Edit users success");
      router.push("/admin-list-user");
      console.log(data);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    }
  };

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    redirect("/login");
  }
  const role = useSelector((state) => state.auth.role);
  if (role === 2) {
    redirect("/cashier-main");
  }

  const isButtonDisabled = password === ""

  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      <Sidebar path={currentPath} />
      <div className="pl-24 my-5 w-screen">
        <div className="mb-5">
          <p className="text-2xl font-bold">Edit User</p>
        </div>
        <form onSubmit={updateUsers}>
          <div className="w-full p-5 flex flex-col gap-6">
            <div className="flex gap-5">
              <div className="flex flex-col gap-2 mt-5">
                <Image src={users.picture === null ? profileDefault : users.picture} alt={users.name} className="w-60 rounded-full" />
                <span onClick={() => setHidden(!hidden)} className="flex justify-center items-center gap-1 cursor-pointer">
                  <LuEdit />
                  <p>Edit Picture</p>
                </span>
                {hidden ? (
                  <div className="w-full flex justify-center items-center">
                    <input
                      type="file"
                      name="picture"
                      onChange={handlePictureChange}
                      className="block w-40 text-sm text-slate-500 file:mr-2 file:py-2 file:px-2 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-[#101540] hover:file:bg-gray-300"
                    />
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-3 justify-center mt-3">
                <div>
                  <p>Name :</p>
                  <input className="input w-full max-w-xs mt-1" name="name" type="text" placeholder="Insert new name user" defaultValue={users.name} onChange={handleNameChange} />
                </div>
                <div>
                  <p>Email :</p>
                  <input className="input w-full max-w-xs mt-1 disabled" name="email" type="text" defaultValue={users.email} disabled />
                </div>
                <div>
                  <p>Password :</p>
                  <input className="input w-full max-w-xs mt-1" name="password" type="password" placeholder="Insert to save changes" onChange={handlePasswordChange} />
                </div>
                <div>
                  <p>Role :</p>
                  <select name="role" id="role" onClick={handleRoleChange} className="select select-bordered w-full max-w-xs mt-1">
                    <option disabled selected>
                      {users.role === 1 ? "Admin" : "Cashier"}
                    </option>
                    <option value="1">
                      <span>Admin</span>
                    </option>
                    <option value="2">
                      <span>Cashier</span>
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full flex mt-10 justify-center items-center">
              <button disabled={isButtonDisabled} type="submit" className={isButtonDisabled ? "btn btn-disable btn-wide" : "btn btn-success bg-green-500 text-white btn-wide"}>
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminEditUser;

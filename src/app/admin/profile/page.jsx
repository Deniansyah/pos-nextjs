"use client";
import Image from "next/image";
import profileDefault from "../../../../public/profileDefault.png";
import jwt_decode from "jwt-decode";
import Sidebar from "../../../components/Sidebar";
import PrivateRoute from "../../../components/PrivateRoute";
import { usePathname } from "next/navigation";
import { LuEdit } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersAction } from "../../../store/users/reducer";

const ProfileSetting = () => {
  const dispatch = useDispatch()
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname.split("/")[2];
  const token = useSelector((state) => state.auth.data);

  const [users, setUsers] = useState({});
  const [picture, setPicture] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setIsLoading(true)
    const { id } = jwt_decode(token);

    try {
      const response = await dispatch(usersAction.getUserByIdThunk(id)).unwrap();
      setUsers(response);
    } catch (err) {
      setUsers({});
      alert(err.message);
      console.log(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handlePictureChange = (event) => {
    setPicture(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const updateUsers = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { id } = jwt_decode(token);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("password", password);

    if (picture) {
      formData.append("picture", picture);
    }

    const wrapData = {
      formData,
      id,
    }

    try {
      const data = await dispatch(usersAction.updateUserThunk(wrapData)).unwrap()
      alert("Edit users success");
      router.push("/admin");
      console.log(data);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const isButtonDisabled = password === "";

  return (
    <div className="flex relative bg-gray-200 min-h-screen min-w-screen">
      {isLoading ? (
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-25 flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-warning"></span>
        </div>
      ) : null}
      <Sidebar path={currentPath} />
      <div className="pl-24 my-5 w-screen">
        <div className="mb-5">
          <p className="text-2xl font-bold">Profile Setting</p>
        </div>
        <form onSubmit={updateUsers}>
          <div className="w-full p-5 flex flex-col gap-6">
            <div className="flex gap-5">
              <div className="flex flex-col gap-2 mt-5">
                <Image src={users.picture === null ? profileDefault : users.picture} alt={users.name} width={240} height={240} className="rounded-full" />
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
                  <p><span className="text-warning">*</span>Password :</p>
                  <input className="input w-full max-w-xs mt-1" name="password" type="password" placeholder="Insert to save changes" onChange={handlePasswordChange} />
                </div>
              </div>
            </div>
            <div className="w-full flex mt-10 justify-center items-center">
              <button disabled={isButtonDisabled || loading} type="submit" className={isButtonDisabled || loading ? "btn btn-disable btn-wide" : "btn btn-success bg-green-500 text-white btn-wide"}>
                {loading ? <span className="loading loading-spinner loading-md"></span> : "Save Changes"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrivateRoute(ProfileSetting, [1]);

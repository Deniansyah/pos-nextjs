"use client";
import Sidebar from "../../../../components/Sidebar";
import PrivateRoute from "../../../../components/PrivateRoute";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usersAction } from "../../../../store/users/reducer";

const InsertUser = () => {
  const dispatch = useDispatch()
  const pathname = usePathname();
  const currentPath = pathname.split("/")[2];
  const router = useRouter();
  const [picture, setPicture] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roleDb, setRoleDb] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePictureChange = (event) => {
    setPicture(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRoleDb(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const addUsers = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", roleDb);

    if (picture) {
      formData.append("picture", picture);
    }

    try {
      const data = await dispatch(usersAction.createUserThunk(formData)).unwrap()
      alert("add user success");
      router.push("/admin/users");
      console.log(data);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const isButtonDisabled = name === "" || email === "" || password === "" || roleDb === "";

  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      <Sidebar path={currentPath} />
      <div className="pl-24 my-5 w-screen">
        <div className="mb-5">
          <p className="text-2xl font-bold">Add New User</p>
        </div>
        <form onSubmit={addUsers}>
          <div className="mr-4 mb-5">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-400 text-left">Picture</th>
                  <th className="px-6 py-3 bg-gray-400 text-left">Name</th>
                  <th className="px-6 py-3 bg-gray-400 text-left">Email</th>
                  <th className="px-6 py-3 bg-gray-400 text-left">Password</th>
                  <th className="px-6 py-3 bg-gray-400 text-left">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-3 bg-white border-b">
                    <input onChange={handlePictureChange} type="file" name="picture" id="picture" className="w-44 py-2 focus:outline-none" />
                  </td>
                  <td className="px-6 py-3 bg-white border-b">
                    <input onChange={handleNameChange} name="name" type="text" placeholder="Insert name" className="w-44 py-2 focus:outline-none" />
                  </td>
                  <td className="px-6 py-3 bg-white border-b">
                    <input onChange={handleEmailChange} name="email" type="text" placeholder="Your email address" className="w-44 py-2 focus:outline-none" />
                  </td>
                  <td className="px-6 py-3 bg-white border-b">
                    <input onChange={handlePasswordChange} name="password" type="password" placeholder="Your password" className="w-44 py-2 focus:outline-none" />
                  </td>
                  <td className="px-6 py-3 bg-white border-b">
                    <select defaultValue={"DEFAULT"} name="role" id="role" onChange={handleRoleChange} className="w-44 py-2 focus:outline-none">
                      <option value="DEFAULT" disabled>
                        Select Role
                      </option>
                      <option value="1">
                        <span>Admin</span>
                      </option>
                      <option value="2">
                        <span>Cashier</span>
                      </option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full flex justify-center">
            <button disabled={isButtonDisabled || loading} type="submit" className={isButtonDisabled || loading ? "btn btn-disable btn-wide" : "btn btn-success bg-green-500 text-white btn-wide"}>
              {loading ? <span className="loading loading-spinner loading-md"></span> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrivateRoute(InsertUser, [1]);

"use client";
import Link from "next/link";
import Image from "next/image";
import profileDefault from "../../../../public/profileDefault.png";
import Sidebar from "../../../components/Sidebar";
import PrivateRoute from "../../../components/PrivateRoute";
import { usePathname } from "next/navigation";
import { LuSearch, LuPlus, LuTrash, LuPencil, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useEffect, useState } from "react";
import { usersAction } from "../../../store/users/reducer";
import { useDispatch, useSelector } from "react-redux";

const ListUsers = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const currentPath = pathname.split("/")[2];
  const [del, setDel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState({
    page: 1,
    limit: 5,
    searchBy: "name",
    search: "",
    sortBy: "createdAt",
    sort: "DESC",
    role: null,
  });

  const users = useSelector((state) => state.users);
  const data = users.data.results;

  useEffect(() => {
    setDel(false);
    getUsers()
  }, [dispatch, del, query]);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      await dispatch(usersAction.getUsersThunk(query)).unwrap();
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUsers = async (id) => {
    try {
      const response = await dispatch(usersAction.deleteUserThunk(id)).unwrap()
      alert("delete users success");
      setDel(true);
      console.log(response);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.trim() === "") {
      setQuery((prevData) => ({
        ...prevData,
        search: "",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      if (searchTerm.trim() !== "") {
        setQuery((prevData) => ({
          ...prevData,
          search: searchTerm,
        }));
        setQuery((prevData) => ({
          ...prevData,
          page: 1,
        }));
      }
    }
  };

  const sortSearch = (value) => {
    if (value === "name") {
      setQuery((prevData) => ({
        ...prevData,
        searchBy: "name",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "email") {
      setQuery((prevData) => ({
        ...prevData,
        searchBy: "email",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
  };

  const sortBy = (value) => {
    if (value === "name") {
      setQuery((prevData) => ({
        ...prevData,
        sortBy: "name",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "createdAt") {
      setQuery((prevData) => ({
        ...prevData,
        sortBy: "createdAt",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
  };

  const sort = (value) => {
    if (value === "ASC") {
      setQuery((prevData) => ({
        ...prevData,
        sort: "ASC",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "DESC") {
      setQuery((prevData) => ({
        ...prevData,
        sort: "DESC",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
  };

  const limit = (value) => {
    if (value === "5") {
      setQuery((prevData) => ({
        ...prevData,
        limit: 5,
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "10") {
      setQuery((prevData) => ({
        ...prevData,
        limit: 10,
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "20") {
      setQuery((prevData) => ({
        ...prevData,
        limit: 20,
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "30") {
      setQuery((prevData) => ({
        ...prevData,
        limit: 30,
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
  };

  const prevPage = () => {
    setQuery((prevData) => ({
      ...prevData,
      page: query.page - 1,
    }));
  };

  const nextPage = () => {
    setQuery((prevData) => ({
      ...prevData,
      page: query.page + 1,
    }));
  };

  const handleRoleChange = (event) => {
    setQuery((prevData) => ({
      ...prevData,
      role: event.target.value,
    }));
    setQuery((prevData) => ({
      ...prevData,
      page: 1,
    }));
  };

  return (
    <div className="flex relative bg-gray-200 min-h-screen min-w-screen">
      {isLoading ? (
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-25 flex justify-center items-center z-10">
          <span className="loading loading-spinner loading-lg text-warning"></span>
        </div>
      ) : null}
      <Sidebar path={currentPath} />
      <div className="pl-24 my-5 w-screen">
        <div className="flex gap-5 mb-5 mr-4">
          <div className="flex grow gap-3 border-2 rounded-md border-gray-400 py-2 px-3">
            <div className="relative flex gap-5 w-full">
              <LuSearch className="absolute text-2xl text-warning top-3 left-3" />
              <input value={searchTerm} onKeyDown={handleSearch} onChange={handleSearchChange} className="px-5 pl-12 rounded-xl input input-bordered input-warning w-full" type="text" placeholder="Search something..." />
            </div>
            <select onClick={(e) => sortSearch(e.target.value)} className="focus:outline-none rounded-md btn btn-warning text-left" name="seachBy" id="seachBy">
              <option value="name">Name</option>
              <option value="email">Email</option>
            </select>
          </div>
          <div className="flex gap-3 border-2 rounded-md border-gray-400 py-2 px-3">
            <select onChange={handleRoleChange} className="focus:outline-none btn btn-warning text-left">
              <option value={null}>Role</option>
              <option value="1">Admin</option>
              <option value="2">Cashier</option>
            </select>
          </div>
          <div className="flex gap-3 border-2 rounded-md border-gray-400 py-2 px-3">
            <select onClick={(e) => sortBy(e.target.value)} className="focus:outline-none btn btn-warning text-left" name="sortBy" id="sortBy">
              <option value="createdAt">Created At</option>
              <option value="name">Name</option>
            </select>
            <select onClick={(e) => sort(e.target.value)} className="focus:outline-none btn btn-warning text-left" name="sort" id="sort">
              <option value="DESC">DESC</option>
              <option value="ASC">ASC</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3 mb-5">
          <Link href={"/admin/users/insert"} className="btn btn-success bg-green-500 text-white pl-2 px-3 py-2 rounded-lg flex items-center gap-1 w-fit">
            <LuPlus className="text-2xl" />
            <p>Add user</p>
          </Link>
        </div>
        <div className="mb-5">
          <p>Total Users : {users?.data?.pageInfo?.totalData}</p>
        </div>
        <div className="mr-5 mb-5">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-400 text-left">Actions</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Picture</th>
                <th className="px-6 py-3 bg-gray-400 text-left">ID</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Name</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Email</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Role</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 bg-white border-b">
                    <div className="flex space-x-10">
                      <Link href={"/admin/users/edit/" + user.id} size="sm" className="flex justify-center items-center flex-col text-yellow-500">
                        <LuPencil className="w-5 h-5" /> Edit
                      </Link>
                      <button onClick={() => deleteUsers(user.id)} size="sm" className="flex justify-center items-center flex-col text-red-500">
                        <LuTrash className="w-5 h-5" /> Delete
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 bg-white border-b">
                    <Image src={user.picture === null ? profileDefault : user.picture} alt={user.name} width={40} height={40} className="object-cover rounded-full" />
                  </td>
                  <td className="px-6 py-4 bg-white border-b">{user.id}</td>
                  <td className="px-6 py-4 bg-white border-b">{user.name}</td>
                  <td className="px-6 py-4 bg-white border-b">{user.email}</td>
                  <td className="px-6 py-4 bg-white border-b">{user.role === 1 ? "Admin" : "Cashier"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* next prev page */}
        <div className="flex justify-between items-center gap-5 mr-5">
          <button onClick={prevPage} disabled={query.page === 1} className={query.page === 1 ? "bg-gray-500 p-3 rounded-md text-white" : "bg-warning p-3 rounded-md text-white"}>
            <LuChevronLeft className="text-3" />
          </button>
          <div className="flex justify-center items-center">
            <p>Lines per page : </p>
            <div className="ml-3">
              <select onClick={(e) => limit(e.target.value)} className="focus:outline-none border-black border p-1 my-1 rounded-md pl-3" name="limit" id="limit">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <p>Page :</p>
            <p>
              {query.page}/{users?.data?.pageInfo?.totalPage}
            </p>
          </div>
          <button onClick={nextPage} disabled={query.page === users?.data?.pageInfo?.totalPage} className={query.page === users?.data?.pageInfo?.totalPage ? "bg-gray-500 p-3 rounded-md text-white" : "bg-warning p-3 rounded-md text-white"}>
            <LuChevronRight className="text-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoute(ListUsers, [1]);

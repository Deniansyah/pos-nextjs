"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { redirect } from "next/navigation";
import { LuSearch, LuPlus, LuTrash, LuPencil, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useEffect, useState } from "react";
import { categoriesAction } from "../../store/categories/reducer";
import { useDispatch, useSelector } from "react-redux";
import http from "../../helpers/http";
import Sidebar from "../../components/Sidebar";

const AdminListCategory = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const currentPath = pathname.split("/")[1].split("-")[2];
  const token = useSelector((state) => state.auth.data);
  const [del, setDel] = useState(false);
  const [query, setQuery] = useState({
    page: 1,
    limit: 5,
    searchBy: "name",
    search: "",
    sortBy: "createdAt",
    sort: "ASC",
  });

  const categories = useSelector((state) => state.categories);
  const data = categories.data.results;

  useEffect(() => {
    dispatch(categoriesAction.getCategoriesThunk(query));
    setDel(false);
  }, [dispatch, del, query]);

  const deleteCategories = async (id) => {
    try {
      const response = await http(token).delete(`${process.env.NEXT_PUBLIC_URL_BACKEND}/categories/${id}`);
      alert("delete categories succes");
      setDel(true);
      console.log(response);
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

  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      <Sidebar path={currentPath} />
      <div className="pl-24 my-5 w-screen">
        <div className="flex gap-5 mb-5 mr-4">
          <div className="flex grow gap-3 border-2 rounded-md border-gray-400 py-2 px-3">
            <div className="relative flex gap-5 w-full">
              <LuSearch className="absolute text-2xl text-warning top-3 left-3" />
              <input className="px-5 pl-12 rounded-xl input input-bordered input-warning w-full" type="text" placeholder="Search something..." />
            </div>
            <select className="focus:outline-none rounded-md btn btn-warning text-left" name="seachBy" id="seachBy">
              <option value="name">Name</option>
            </select>
          </div>
          <div className="flex gap-3 border-2 rounded-md border-gray-400 py-2 px-3">
            <select className="focus:outline-none btn btn-warning text-left" name="sortBy" id="sortBy">
              <option value="createdAt">Created At</option>
              <option value="name">Name</option>
            </select>
            <select className="focus:outline-none btn btn-warning text-left" name="sort" id="sort">
              <option value="ASC">ASC</option>
              <option value="DESC">DESC</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3 mb-5">
          <Link href={"/admin-insert-category"} className="btn btn-success bg-green-500 text-white pl-2 px-3 py-2 rounded-lg flex items-center gap-1 w-fit">
            <LuPlus className="text-2xl" />
            <p>Add category</p>
          </Link>
        </div>
        <div className="mb-5">
          <p>Total Category : {categories?.data?.pageInfo?.totalData}</p>
        </div>
        <div className="mr-5 mb-5">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="pl-6 py-3 bg-gray-400 text-left">Actions</th>
                <th className="px-6 py-3 bg-gray-400 text-left">ID</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Name</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((category) => (
                <tr key={category.id}>
                  <td className="pl-6 py-4 bg-white border-b">
                    <div className="flex space-x-10">
                      <Link href={"/admin-edit-category/" + category.id} size="sm" className="flex justify-center items-center flex-col text-yellow-500">
                        <LuPencil className="w-5 h-5" /> Edit
                      </Link>
                      <button onClick={() => deleteCategories(category.id)} size="sm" className="flex justify-center items-center flex-col text-red-500">
                        <LuTrash className="w-5 h-5" /> Delete
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 bg-white border-b">{category.id}</td>
                  <td className="px-6 py-4 bg-white border-b">{category.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* next prev page */}
        <div className="flex justify-between items-center gap-5 mr-5">
          {/* Primary Color : #101540 */}
          <button
            // onClick={prevPage}
            // disabled={query.page === 1}
            className="bg-gray-500 p-4 rounded-md text-white"
            // {query.page === 1 ? "bg-gray-500 p-3 rounded-md text-white" : "bg-[#101540] p-3 rounded-md text-white"}
          >
            <LuChevronLeft className="text-3" />
          </button>
          <div className="flex justify-center items-center">
            <p>Baris per halaman : </p>
            <div className="ml-3">
              <select className="focus:outline-none border-black border p-1 my-1 rounded-md pl-3" name="limit" id="limit">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <p>Halaman :</p>
            <p>
              {query.page}/{categories?.data?.pageInfo?.totalPage}
            </p>
          </div>
          <button
            // onClick={nextPage}
            // disabled={query.page === product?.data?.pageInfo?.totalPage}
            className="bg-gray-500 p-4 rounded-md text-white"
            // {query.page === product?.data?.pageInfo?.totalPage ? "bg-gray-500 p-3 rounded-md text-white" : "bg-[#101540] p-3 rounded-md text-white"}
          >
            <LuChevronRight className="text-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminListCategory;

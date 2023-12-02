"use client";
import { usePathname } from "next/navigation";
import { redirect, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import http from "../../../../../helpers/http";
import Sidebar from "../../../../../components/Sidebar";

const EditCategory = ({ params }) => {
  const id = params.id;
  const pathname = usePathname();
  const currentPath = pathname.split("/")[2];
  const token = useSelector((state) => state.auth.data);
  const router = useRouter();
  const [categories, setCategories] = useState({});
  const [name, setName] = useState("");

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await http(token).get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/categories/${id}`);
      setCategories(response.data.results);
    } catch (error) {
      setCategories({});
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const updateCategories = async (event) => {
    event.preventDefault();
    const formData = {
      name: name,
    };

    try {
      const data = await http(token).patch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/categories/${id}`, formData);
      alert("Edit categories success");
      router.push("/admin/category");
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
    redirect("/cashier");
  }

  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      <Sidebar path={currentPath} />
      <div className="pl-24 my-5 w-screen">
        <div className="mb-5">
          <p className="text-2xl font-bold">Edit Category</p>
        </div>
        <form onSubmit={updateCategories}>
          <div className="mr-4 mb-5">
            <table className="w-64">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-400 text-left">Category Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-3 bg-white border-b">
                    <input type="text" name="name" placeholder="Insert new name categories" defaultValue={categories.name} onChange={handleNameChange} className="w-54 py-2 focus:outline-none" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full flex">
            <button type="submit" className="btn btn-success bg-green-500 text-white btn-wide">
              Save Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;

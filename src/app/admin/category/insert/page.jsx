"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { categoriesAction } from "../../../../store/categories/reducer";
import Sidebar from "../../../../components/Sidebar";
import PrivateRoute from "../../../../components/PrivateRoute";

const InsertCategory = () => {
  const dispatch = useDispatch()
  const pathname = usePathname();
  const currentPath = pathname.split("/")[2];
  const router = useRouter();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const addCategories = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = {
      name: name,
    };

    try {
      const data = await dispatch(categoriesAction.createCategoriesThunk(formData)).unwrap()
      alert("add categories success");
      router.push("/admin/category");
      console.log(data);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const isButtonDisabled = name === "";

  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      <Sidebar path={currentPath} />
      <div className="pl-24 my-5 w-screen">
        <div className="mb-5">
          <p className="text-2xl font-bold">Add New Category</p>
        </div>
        <form onSubmit={addCategories}>
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
                    <input type="text" name="name" onChange={handleNameChange} placeholder="Insert category name" className="w-52 py-2 focus:outline-none" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full flex">
            <button type="submit" disabled={isButtonDisabled || loading} className={isButtonDisabled || loading ? "btn btn-disable btn-wide" : "btn btn-success bg-green-500 text-white btn-wide"}>
              {loading ? <span className="loading loading-spinner loading-md"></span> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrivateRoute(InsertCategory, [1]);

"use client";
import Sidebar from "../../../../components/Sidebar";
import PrivateRoute from "../../../../components/PrivateRoute";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { categoriesAction } from "../../../../store/categories/reducer";
import { productAction } from "../../../../store/product/reducer";

const InsertProduct = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname.split("/")[2];
  const [categoryDb, setCategoryDb] = useState([]);
  const [loading, setLoading] = useState(false);
  const [picture, setPicture] = useState(null);
  const [name, setName] = useState("");
  const [categories, setCategories] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const limit = 50;
    try {
      const response = await dispatch(categoriesAction.getCategoriesFiftyThunk(limit)).unwrap();
      setCategoryDb(response);
    } catch (error) {
      alert(err.message);
      console.log(err);
      throw err;
    }
  };

  const handlePictureChange = (event) => {
    setPicture(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoriesChange = (event) => {
    setCategories(event.target.value);
    console.log(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const addProduct = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("categories_id", categories);
    formData.append("price", price);
    formData.append("description", description);

    if (picture) {
      formData.append("picture", picture);
    }

    try {
      const data = await dispatch(productAction.createProductThunk(formData)).unwrap()
      alert("add product succes");
      router.push("/admin/product");
      console.log(data);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const isButtonDisabled = name === "" || price === "" || description === "" || categories === ""

  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      <Sidebar path={currentPath} />
      <form onSubmit={addProduct}>
        <div className="pl-24 my-5 w-screen">
          <div className="mb-4">
            <p className="text-2xl font-bold">Add New Product</p>
          </div>
          <div className="mr-5 mb-4">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-400 text-left">Picture</th>
                  <th className="px-6 py-3 bg-gray-400 text-left">Categories</th>
                  <th className="px-6 py-3 bg-gray-400 text-left">Product Name</th>
                  <th className="px-6 py-3 bg-gray-400 text-left">Description</th>
                  <th className="px-6 py-3 bg-gray-400 text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-3 bg-white border-b">
                    <input onChange={handlePictureChange} type="file" name="picture" id="picture" className="w-44 py-2 focus:outline-none" />
                  </td>
                  <td className="px-6 py-3 bg-white border-b">
                    <select defaultValue={"DEFAULT"} name="categories" id="categories" onChange={handleCategoriesChange} className="w-44 py-2 focus:outline-none">
                      <option value="DEFAULT" disabled>
                        Select Categories
                      </option>
                      {categoryDb?.map((categories) => (
                        <option key={categories.id} value={categories.id}>
                          {categories.name}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-6 py-3 bg-white border-b">
                    <input name="name" onChange={handleNameChange} type="text" placeholder="Insert name" className="w-44 py-2 focus:outline-none" />
                  </td>
                  <td className="px-6 py-3 bg-white border-b">
                    <input type="text" name="description" onChange={handleDescriptionChange} placeholder="Insert description" className="w-44 py-2 focus:outline-none" />
                  </td>
                  <td className="px-6 py-3 bg-white border-b">
                    <input type="number" name="price" onChange={handlePriceChange} placeholder="Insert price" className="w-44 py-2 focus:outline-none" />
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
        </div>
      </form>
    </div>
  );
};

export default PrivateRoute(InsertProduct, [1]);

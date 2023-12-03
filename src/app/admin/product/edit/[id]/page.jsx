"use client";
import Image from "next/image";
import productDefault from "../../../../../../public/productDefault.jpg";
import http from "../../../../../helpers/http";
import Sidebar from "../../../../../components/Sidebar";
import PrivateRoute from "../../../../../components/PrivateRoute";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { LuEdit } from "react-icons/lu";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const EditProduct = ({ params }) => {
  const id = params.id;
  const pathname = usePathname();
  const currentPath = pathname.split("/")[2];

  const token = useSelector((state) => state.auth.data);
  const router = useRouter();

  const [categoryDb, setCategoryDb] = useState([]);
  const [product, setProduct] = useState({});
  const [picture, setPicture] = useState(null);
  const [name, setName] = useState("");
  const [categories, setCategories] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [hidden, setHidden] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProduct();
    getCategory();
  }, []);

  const getCategory = async () => {
    try {
      const response = await http(token).get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/categories?limit=50`);
      const data = response.data.results;
      setCategoryDb(data);
    } catch (error) {
      alert(err.message);
      console.log(err);
      throw err;
    }
  };

  const getProduct = async () => {
    try {
      const response = await http(token).get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/product/${id}`);
      setProduct(response.data.results);
    } catch (error) {
      setProduct({});
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
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const updateProduct = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("categories", categories);
    formData.append("price", price);
    formData.append("description", description);

    if (picture) {
      formData.append("picture", picture);
    }

    try {
      const data = await http(token).patch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/product/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Edit product succes");
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

  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      <Sidebar path={currentPath} />
      <div className="pl-24 my-4 w-screen">
        <div className="mb-5">
          <p className="text-2xl font-bold">Edit Product</p>
        </div>
        <form onSubmit={updateProduct}>
          <div className="flex gap-5">
            <div className="flex flex-col gap-2 mt-5">
              <Image src={product.picture === null ? productDefault : product.picture} alt={product.name} className="w-60 rounded-full" />
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
                <p>Name Product :</p>
                <input className="input w-full max-w-xs mt-1" name="name" type="text" placeholder="Insert new name product" defaultValue={product.name} onChange={handleNameChange} />
              </div>
              <div>
                <p>Category :</p>
                <select name="categories" id="categories" onClick={handleCategoriesChange} className="select select-bordered w-full max-w-xs mt-1">
                  <option disabled selected>
                    {product.categories_name}
                  </option>
                  {categoryDb?.map((categories) => (
                    <option key={categories.id} value={categories.id}>
                      {categories.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p>Price :</p>
                <input className="input w-full max-w-xs mt-1" type="number" name="price" placeholder="Insert new price" defaultValue={product.price} onChange={handlePriceChange} />
              </div>
              <div>
                <p>Description :</p>
                <textarea
                  className="textarea textarea-bordered mt-1"
                  cols="50"
                  rows="5"
                  name="description"
                  id="description"
                  placeholder="Insert new description product"
                  defaultValue={product.description}
                  onChange={handleDescriptionChange}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-5">
            <button disabled={loading} type="submit" className={loading ? "btn btn-disable btn-wide" : "btn btn-success bg-green-500 text-white btn-wide"}>
              {loading ? <span className="loading loading-spinner loading-md"></span> : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrivateRoute(EditProduct, [1]);

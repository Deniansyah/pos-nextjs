"use client";
import { LuSearch, LuX, LuPlus, LuMinus, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../../store/product/reducer";
import { categoriesAction } from "../../store/categories/reducer";
import { transactionAction } from "../../store/transaction/reducer";
import { detailTransactionAction } from "../../store/detailTransaction/reducer";
import { useRouter } from "next/navigation";
import jwt_decode from "jwt-decode";
import Image from "next/image";
import productDefault from "../../../public/productDefault.jpg";
import SidebarCashier from "../../components/SidebarCashier";
import PrivateRoute from "../../components/PrivateRoute";

const CashierMain = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname.split("/")[1];
  const token = useSelector((state) => state.auth.data);
  const [currentDate, setCurrentDate] = useState("");
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState({
    page: 1,
    limit: 6,
    searchBy: "name",
    search: "",
    sortBy: "createdAt",
    sort: "ASC",
    categories_name: "",
  });

  const product = useSelector((state) => state.product);
  const data = product.data.results;

  useEffect(() => {
    setTotal(calculateTotal());
    updateDate();
    dispatch(productAction.getProductThunk(query));
  }, [dispatch, query, cart]);

  useEffect(() => {
    getCategory();
  },[])

  const getCategory = async () => {
    setIsLoading(true)
    const limit = 50;
    try {
      const response = await dispatch(categoriesAction.getCategoriesFiftyThunk(limit)).unwrap();
      setCategory(response);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    } finally {
      setIsLoading(false)
    }
  };

  const updateDate = () => {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const today = new Date();
    setCurrentDate(today.toLocaleDateString("en-US", options));
  };

  // Converter Rupiah
  const formatPrice = (price) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);

    return formattedPrice;
  };

  const handleAddToCart = (product) => {
    // Cari indeks produk yang sudah ada dalam keranjang
    const existingProductIndex = cart.findIndex((item) => item.product_name === product["name"]);

    if (existingProductIndex !== -1) {
      // Jika produk sudah ada di keranjang, tambahkan kuantitas
      const updatedCart = cart.map((item, index) => (index === existingProductIndex ? { ...item, qty: item.qty + 1 } : item));
      setCart(updatedCart);
    } else {
      // Jika produk belum ada di keranjang, tambahkan produk dengan kuantitas 1
      setCart([...cart, { transaction_id: null, product_id: product["id"], product_name: product["name"], product_price: product["price"], qty: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    // Cari indeks produk yang sudah ada dalam keranjang
    const existingProductIndex = cart.findIndex((item) => item.product_name === product.product_name);

    if (existingProductIndex !== -1) {
      // Jika kuantitas produk lebih dari 1, kurangkan kuantitas
      if (cart[existingProductIndex].qty > 1) {
        const updatedCart = cart.map((item, index) => (index === existingProductIndex ? { ...item, qty: item.qty - 1 } : item));
        setCart(updatedCart);
      } else {
        // Jika kuantitas produk adalah 1, hapus produk dari keranjang
        const updatedCart = cart.filter((item, index) => index !== existingProductIndex);
        setCart(updatedCart);
      }
    }
  };

  const handleAddFromCart = (product) => {
    // Cari indeks produk yang sudah ada dalam keranjang
    const existingProductIndex = cart.findIndex((item) => item.product_name === product.product_name);

    const updatedCart = cart.map((item, index) => (index === existingProductIndex ? { ...item, qty: item.qty + 1 } : item));
    setCart(updatedCart);
  };

  const handleCloseFromCart = (product) => {
    // Cari indeks produk yang sudah ada dalam keranjang
    const existingProductIndex = cart.findIndex((item) => item.product_name === product.product_name);

    const updatedCart = cart.filter((item, index) => index !== existingProductIndex);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.product_price * item.qty;
    }, 0);
  };

  const addTransaction = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { id } = jwt_decode(token);

    const formDataTransaction = {
      users_id: id,
      total: total,
    };

    try {
      const response = await dispatch(transactionAction.createTransactionThunk(formDataTransaction)).unwrap()
      const newId = response.data.results.id;

      const updatedCart = cart.map((item) => ({ ...item, transaction_id: newId }));
      setCart(updatedCart);

      await dispatch(detailTransactionAction.createDetailTransactionThunk(updatedCart)).unwrap()

      alert("Success Order!");
      router.push("/cashier/transaction");
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    } finally {
      setLoading(false);
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

  const limit = (value) => {
    if (value === "6") {
      setQuery((prevData) => ({
        ...prevData,
        limit: 6,
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

  const handleCategoryChange = (value) => {
    setQuery((prevData) => ({
      ...prevData,
      categories_name: value,
    }));
    setQuery((prevData) => ({
      ...prevData,
      page: 1,
    }));
  };

  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-5">Check your order!</h3>
          <table>
            <thead>
              <tr>
                <th className="pr-20">Name of product</th>
                <th className="pr-20">Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td className="pr-20">{item.product_name}</td>
                  <td className="pr-20">{formatPrice(item.product_price)}</td>
                  <td className="flex w-full justify-center">{item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex mt-5">
            <p className="font-bold mr-2 text-lg">Total :</p>
            <p className="text-lg">{formatPrice(total)}</p>
          </div>
          <div className="modal-action">
            <button onClick={addTransaction} disabled={loading} className={loading ? "btn btn-disabled" : "btn btn-warning"}>
              {loading ? <span className="loading loading-spinner loading-md"></span> : "Order"}
            </button>
            <label htmlFor="my_modal_6" className="btn">
              Back
            </label>
          </div>
        </div>
      </div>
      <div className="flex relative bg-gray-200 min-h-screen min-w-screen">
        {isLoading ? (
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-25 flex justify-center items-center z-10">
            <span className="loading loading-spinner loading-lg text-warning"></span>
          </div>
        ) : null}
        <SidebarCashier path={currentPath} />
        {/* isi */}
        <div className="pl-24 mt-5 w-full">
          <div className="flex gap-10">
            <div>
              <h1 className="text-xl font-bold">Point of Sale</h1>
              <p>{currentDate}</p>
            </div>
            <div className="relative">
              <LuSearch className="absolute text-2xl text-warning top-3 left-3" />
              <input value={searchTerm} onKeyDown={handleSearch} onChange={handleSearchChange} className="h-full px-5 pl-12 rounded-xl w-[32rem] input input-bordered input-warning" type="text" placeholder="Search product..." />
            </div>
          </div>
          {/* Categoty */}
          <div className="flex gap-3 mt-5">
            <button onClick={() => handleCategoryChange("")} className={query.categories_name === "" ? "text-warning" : ""}>
              All
            </button>
            {category?.map((cat) => (
              <div key={cat.id} className="border-l border-black pl-3 ">
                <button onClick={() => handleCategoryChange(cat.name)} className={query.categories_name === cat.name ? "text-warning" : ""}>
                  {cat.name}
                </button>
              </div>
            ))}
          </div>
          {/* Choose */}
          <div className="mt-5 w-[70%]">
            <h2 className="text-lg font-bold mb-3">Choose something</h2>
            <div className="flex gap-5 flex-wrap min-h-[25rem]">
              {data?.map((product) => (
                <div key={product.id} className="flex gap-3 bg-white w-[48%] h-fit p-3 rounded-xl">
                  <div className="flex justify-center items-center">
                    <Image src={product.picture === null ? productDefault : product.picture} alt={product.name} width={96} height={96} className="rounded-xl" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-bold w-40">{product.name}</h3>
                    <p className="text-gray-400 text-sm w-36">{product.description}</p>
                    <div className="flex w-full justify-center items-center">
                      <p className="grow">{formatPrice(product.price)}</p>
                      <button onClick={() => handleAddToCart(product)} className="btn btn-outline btn-warning btn-sm">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center gap-5 mr-3 my-5">
              <button onClick={prevPage} disabled={query.page === 1} className={query.page === 1 ? "bg-gray-500 p-3 rounded-md text-white" : "bg-warning p-3 rounded-md text-white"}>
                <LuChevronLeft className="text-3" />
              </button>
              <div className="flex justify-center items-center">
                <p>Lines per page : </p>
                <div className="ml-3">
                  <select onClick={(e) => limit(e.target.value)} className="focus:outline-none border-black border p-1 my-1 rounded-md pl-3" name="limit" id="limit">
                    <option value="6">6</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center items-center gap-3">
                <p>Page :</p>
                <p>
                  {query.page}/{product?.data?.pageInfo?.totalPage}
                </p>
              </div>
              <button
                onClick={nextPage}
                disabled={query.page === product?.data?.pageInfo?.totalPage}
                className={query.page === product?.data?.pageInfo?.totalPage ? "bg-gray-500 p-3 rounded-md text-white" : "bg-warning p-3 rounded-md text-white"}>
                <LuChevronRight className="text-3" />
              </button>
            </div>
          </div>
        </div>
        {/* aside */}
        <div className="bg-white fixed h-screen right-0 rounded-l-2xl p-2 w-[27.5%]">
          <h1 className="text-2xl font-bold px-3">Order list</h1>
          <p className="text-gray-400 px-3 text-xs">Temporary shopping baskets are requested to be emptied immediately, thank you!</p>
          <h3 className="font-bold px-3">Items :</h3>
          <div className="h-[65%] overflow-y-auto mt-2">
            {cart.length === 0 ? (
              <div className="w-full h-full flex justify-center items-center">Shopping cart is still empty.</div>
            ) : (
              <div className="flex flex-col gap-5 pt-2">
                {cart.map((item, index) => (
                  <div key={index} className="border rounded-xl px-3 ml-3 mr-2 py-4 relative">
                    <button onClick={() => handleCloseFromCart(item)} className="absolute border border-red-500 rounded-full p-1 bg-white -top-2 -left-2">
                      <LuX className="text-red-500 text-lg" />
                    </button>
                    <p className="font-bold">{item.product_name}</p>
                    <div className="w-full flex mt-2">
                      <p className="grow">{formatPrice(item.product_price)}</p>
                      <div className="flex justify-center items-center gap-3">
                        <button onClick={() => handleRemoveFromCart(item)} className="border-black border rounded-md p-1">
                          <LuMinus />
                        </button>
                        <p>{item.qty}</p>
                        <button onClick={() => handleAddFromCart(item)} className="border-black border rounded-md p-1">
                          <LuPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="border-dotted border-2 mt-5 mx-3 rounded-t-xl">
            <div className="border-b-2 p-2">
              <div className="flex w-full">
                <h2 className="grow font-bold">Total</h2>
                <p>{formatPrice(total)}</p>
              </div>
            </div>
            <div className="flex justify-evenly items-center p-2">
              <label htmlFor="my_modal_6" className={cart.length > 0 ? "btn btn-warning btn-wide" : "btn btn-disabled btn-wide"}>
                Check your order
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivateRoute(CashierMain, [2]);

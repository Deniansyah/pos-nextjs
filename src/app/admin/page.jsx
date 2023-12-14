"use client";
import { LuDollarSign, LuArrowUp, LuBookmarkMinus, LuArrowDown, LuUsers } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { detailTransactionAction } from "../../store/detailTransaction/reducer";
import { transactionAction } from "../../store/transaction/reducer";
import Image from "next/image";
import productDefault from "../../../public/productDefault.jpg";
import Sidebar from "../../components/Sidebar";
import PrivateRoute from "../../components/PrivateRoute";

const Dashboard = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const currentPath = pathname.split("/")[1];
  const [currentDate, setCurrentDate] = useState("");
  const [mpo, setMpo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [todaysTotals, setTodaysTotals] = useState(0)
  const [yesterdaysTotals, setYesterdaysTotals] = useState(0)
  const [comparison, setComparison] = useState(0)
  const [todaysCustomers, setTodaysCustomers] = useState(0)
  const [yesterdaysCustomers, setYesterdaysCustomers] = useState(0)
  const [comparisonCustomers, setComparisonCustomers] = useState(0)
  const [todaysOrdered, setTodaysOrdered] = useState(0)
  const [yesterdaysOrdered, setYesterdaysOrdered] = useState(0)
  const [comparisonOrdered, setComparisonOrdered] = useState(0)
  const [query, setQuery] = useState({
    page: 1,
    limit: 6,
  });

  useEffect(() => {
    getPopularProduct();
    getAllTodaysTotals();
    getAllYesterdaysTotals();
    updateComparison();
    getTodaysCustomers();
    getYesterdaysCustomers();
    updateComparisonCustomers();
    getTodaysOrdered()
    getYesterdaysOrdered();
    updateComparisonOrdered();
    updateDate();
  }, [query, todaysTotals, yesterdaysTotals, comparison, todaysCustomers, yesterdaysCustomers, comparisonCustomers, todaysOrdered, yesterdaysOrdered, comparisonOrdered]);

  const getAllTodaysTotals = async () => {
    setLoading(true)
    try {
      const response = await dispatch(transactionAction.getAllTodaysTotalsThunk()).unwrap();
      setTodaysTotals(response.results.alltotal);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getAllYesterdaysTotals = async () => {
    setLoading(true)
    try {
      const response = await dispatch(transactionAction.getAllYesterdaysTotalsThunk()).unwrap();
      setYesterdaysTotals(response.results.alltotal);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateComparison = () => {
    if (todaysTotals > yesterdaysTotals) {
      setComparison(((todaysTotals - yesterdaysTotals) / yesterdaysTotals) * 100);
    } else if (todaysTotals < yesterdaysTotals) {
      setComparison(-((yesterdaysTotals - todaysTotals) / yesterdaysTotals) * 100);
    } else {
      setComparison(0);
    } 
  }

  const getTodaysCustomers = async () => {
    setLoading(true)
    try {
      const response = await dispatch(transactionAction.getTodaysCustomersThunk()).unwrap();
      setTodaysCustomers(response.results.customer);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getYesterdaysCustomers = async () => {
    setLoading(true)
    try {
      const response = await dispatch(transactionAction.getYesterdaysCustomersThunk()).unwrap();
      setYesterdaysCustomers(response.results.customer);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateComparisonCustomers = () => {
    if (todaysCustomers > yesterdaysCustomers) {
      setComparisonCustomers(((todaysCustomers - yesterdaysCustomers) / yesterdaysCustomers) * 100);
    } else if (todaysCustomers < yesterdaysCustomers) {
      setComparisonCustomers(-((yesterdaysCustomers - todaysCustomers) / yesterdaysCustomers) * 100);
    } else {
      setComparisonCustomers(0);
    }
  };


  const getTodaysOrdered = async () => {
    setLoading(true)
    try {
      const response = await dispatch(detailTransactionAction.getTodaysOrderedThunk()).unwrap();
      setTodaysOrdered(response.results.productOrdered);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getYesterdaysOrdered = async () => {
    setLoading(true)
    try {
      const response = await dispatch(detailTransactionAction.getYesterdaysOrderedThunk()).unwrap();
      setYesterdaysOrdered(response.results.productOrdered);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateComparisonOrdered = () => {
    if (todaysOrdered > yesterdaysOrdered) {
      setComparisonOrdered(((todaysOrdered - yesterdaysOrdered) / yesterdaysOrdered) * 100);
    } else if (todaysOrdered < yesterdaysOrdered) {
      setComparisonOrdered(-((yesterdaysOrdered - todaysOrdered) / yesterdaysOrdered) * 100);
    } else {
      setComparisonOrdered(0);
    }
  };


  const getPopularProduct = async () => {
    setLoading(true)
    try {
      const response = await dispatch(detailTransactionAction.getPopularProductThunk(query)).unwrap();
      setMpo(response);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const showAll = () => {
    if (mpo.pageInfo.totalData === query.limit) {
      setQuery((prevData) => ({
        ...prevData,
        limit: 6,
      }));
    } else {
      setQuery((prevData) => ({
        ...prevData,
        limit: mpo?.pageInfo?.totalData,
      }));
    }
  }

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

  return (
    <div className="flex relative bg-gray-200 min-h-screen min-w-screen">
      {loading ? (
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-25 flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-warning"></span>
        </div>
      ) : null}
      <Sidebar path={currentPath} />
      <div className="pl-24 my-5 w-screen mr-4">
        <div className="mb-4 flex flex-col">
          <p className="text-2xl font-bold">Dashboard</p>
          <p className="mb-3">{currentDate}</p>
          <div className="w-full border-b border-gray-400" />
        </div>
        <div className="w-full flex gap-10 justify-center mb-5">
          <div className="bg-white p-3 rounded-lg flex flex-col gap-2 w-60">
            <div className="flex gap-3">
              <span className="bg-orange-200 p-2 rounded-lg">
                <LuDollarSign className="text-warning" />
              </span>
              <div
                className={
                  isFinite(comparison)
                    ? comparison > 0
                      ? "flex justify-center items-center text-green-500"
                      : comparison < 0
                      ? "flex justify-center items-center text-red-500"
                      : "flex justify-center items-center"
                    : "flex justify-center items-center"
                }>
                <p>{isFinite(comparison) ? (comparison > 0 ? `+${comparison.toFixed(2)}%` : comparison < 0 ? `${comparison.toFixed(2)}%` : "No changes") : "Start Counting"}</p>
                {isFinite(comparison) ? comparison > 0 ? <LuArrowUp /> : comparison < 0 ? <LuArrowDown /> : null : null}
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold">{formatPrice(todaysTotals)}</p>
            </div>
            <div>
              <p>Total Revenue</p>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg flex flex-col gap-2 w-60">
            <div className="flex gap-3">
              <span className="bg-orange-200 p-2 rounded-lg">
                <LuBookmarkMinus className="text-warning" />
              </span>
              <div
                className={
                  isFinite(comparisonOrdered)
                    ? comparisonOrdered > 0
                      ? "flex justify-center items-center text-green-500"
                      : comparisonOrdered < 0
                      ? "flex justify-center items-center text-red-500"
                      : "flex justify-center items-center"
                    : "flex justify-center items-center"
                }>
                <p>{isFinite(comparisonOrdered) ? (comparisonOrdered > 0 ? `+${comparisonOrdered.toFixed(2)}%` : comparisonOrdered < 0 ? `${comparisonOrdered.toFixed(2)}%` : "No changes") : "Start Counting"}</p>
                {isFinite(comparisonOrdered) ? comparisonOrdered > 0 ? <LuArrowUp /> : comparisonOrdered < 0 ? <LuArrowDown /> : null : null}
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold">{todaysOrdered}</p>
            </div>
            <div>
              <p>Total products ordered</p>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg flex flex-col gap-2 w-60">
            <div className="flex gap-3">
              <span className="bg-orange-200 p-2 rounded-lg">
                <LuUsers className="text-warning" />
              </span>
              <div
                className={
                  isFinite(comparisonCustomers)
                    ? comparisonCustomers > 0
                      ? "flex justify-center items-center text-green-500"
                      : comparisonCustomers < 0
                      ? "flex justify-center items-center text-red-500"
                      : "flex justify-center items-center"
                    : "flex justify-center items-center"
                }>
                <p>{isFinite(comparisonCustomers) ? (comparisonCustomers > 0 ? `+${comparisonCustomers.toFixed(2)}%` : comparisonCustomers < 0 ? `${comparisonCustomers.toFixed(2)}%` : "No changes") : "Start Counting"}</p>
                {isFinite(comparisonCustomers) ? comparisonCustomers > 0 ? <LuArrowUp /> : comparisonCustomers < 0 ? <LuArrowDown /> : null : null}
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold">{todaysCustomers}</p>
            </div>
            <div>
              <p>Total Customer</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg min-h-60 p-5">
          <div className="w-full flex flex-col gap-3 justify-center items-center mb-5">
            <h1 className="text-2xl">Most Product Ordered</h1>
            <div className="w-full border-b border-gray-400" />
          </div>
          <div className="flex justify-between gap-10 flex-wrap mb-5">
            {mpo?.results?.map((product) => (
              <div key={product.id} className="flex gap-3 bg-gray-200 w-80 h-fit p-3 rounded-xl">
                <div className="flex justify-center items-center">
                  <Image src={product.picture === null ? productDefault : product.picture} alt={product.name} width={96} height={96} className="rounded-xl" />
                </div>
                <div className="w-full">
                  <h3 className="font-bold w-40">{product.name}</h3>
                  <p className="text-gray-400 text-sm w-36">{product.description}</p>
                  <div className="flex w-full justify-center items-center">
                    <p className="grow">{formatPrice(product.price)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <button onClick={showAll} className="btn btn-outline btn-warning btn-wide btn-sm capitalize">
              {mpo?.pageInfo?.totalData === query.limit ? "Less..." : "Other..."}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoute(Dashboard, [1]);

"use client";
import { LuSearch, LuExternalLink, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { transactionAction } from "../../../store/transaction/reducer";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Link from "next/link";
import Sidebar from "../../../components/Sidebar";
import PrivateRoute from "../../../components/PrivateRoute";

const ListTransaction = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const currentPath = pathname.split("/")[2];
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState({
    page: 1,
    limit: 5,
    cInitUser: "u",
    searchBy: "name",
    search: "",
    cInitTrans: "t",
    sortBy: "createdAt",
    sort: "ASC",
  });

  const transaction = useSelector((state) => state.transaction);
  const data = transaction?.data?.results;

  useEffect(() => {
    dispatch(transactionAction.getTransactionThunk(query));
  }, [dispatch, query]);

  // Converter Rupiah
  const formatPrice = (price) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);

    return formattedPrice;
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
        cInitUser: "u",
        searchBy: "name",
      }));
      setQuery((prevData) => ({
        ...prevData,
        page: 1,
      }));
    }
    if (value === "invoice") {
      setQuery((prevData) => ({
        ...prevData,
        cInitUser: "t",
        searchBy: "invoice",
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
        cInitTrans: "u",
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
        cInitTrans: "t",
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

  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
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
              <option value="invoice">Invoice</option>
            </select>
          </div>
          <div className="flex gap-3 border-2 rounded-md border-gray-400 py-2 px-3">
            <select onClick={(e) => sortBy(e.target.value)} className="focus:outline-none btn btn-warning text-left" name="sortBy" id="sortBy">
              <option value="createdAt">Created At</option>
              <option value="name">Name</option>
            </select>
            <select onClick={(e) => sort(e.target.value)} className="focus:outline-none btn btn-warning text-left" name="sort" id="sort">
              <option value="ASC">ASC</option>
              <option value="DESC">DESC</option>
            </select>
          </div>
        </div>
        <div className="mb-5">
          <p>Total Transactions : {transaction?.data?.pageInfo?.totalData}</p>
        </div>
        <div className="mr-4 mb-5">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-400 text-left">Actions</th>
                <th className="px-6 py-3 bg-gray-400 text-left">ID</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Cashier Name</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Invoice</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Date</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 bg-white border-b">
                    <div className="flex space-x-10">
                      <Link href={"/admin/transaction/detail/" + transaction.id} size="sm" className="flex justify-center items-center flex-col text-blue-500">
                        <LuExternalLink className="w-5 h-5" /> Detail
                      </Link>
                    </div>
                  </td>
                  <td className="px-6 py-4 bg-white border-b">{transaction.id}</td>
                  <td className="px-6 py-4 bg-white border-b">{transaction.name}</td>
                  <td className="px-6 py-4 bg-white border-b">{transaction.invoice}</td>
                  <td className="px-6 py-4 bg-white border-b">{moment(transaction.date).format("LLLL")}</td>
                  <td className="px-6 py-4 bg-white border-b">{formatPrice(transaction.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* next prev page */}
        <div className="flex justify-between items-center gap-5 mr-4">
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
              {query.page}/{transaction?.data?.pageInfo?.totalPage}
            </p>
          </div>
          <button
            onClick={nextPage}
            disabled={query.page === transaction?.data?.pageInfo?.totalPage}
            className={query.page === transaction?.data?.pageInfo?.totalPage ? "bg-gray-500 p-3 rounded-md text-white" : "bg-warning p-3 rounded-md text-white"}>
            <LuChevronRight className="text-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoute(ListTransaction, [1]);

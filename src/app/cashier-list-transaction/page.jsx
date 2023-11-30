"use client";
import { LuSearch, LuExternalLink, LuChevronLeft, LuChevronRight, LuPencil, LuTrash } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { transactionAction } from "../../store/transaction/reducer";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Link from "next/link";
import SidebarCashier from "../../components/SidebarCashier";
import http from "../../helpers/http";

const CashierListTransaction = () => {
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

  const transaction = useSelector((state) => state.transaction);
  const data = transaction?.data?.results;

  useEffect(() => {
    dispatch(transactionAction.getTransactionThunk(query));
    setDel(false);
  }, [dispatch, del, query]);

  const deleteTransaction = async (id) => {
    try {
      const response = await http(token).delete(`${process.env.NEXT_PUBLIC_URL_BACKEND}/transaction/${id}`);
      alert("delete transaction success");
      setDel(true);
      console.log(response);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    }
  };

  // Private route
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    redirect("/login");
  }
  const role = useSelector((state) => state.auth.role);
  if (role === 1) {
    redirect("/admin-dashboard");
  }

  // Converter Rupiah
  const formatPrice = (price) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);

    return formattedPrice;
  };

  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      <SidebarCashier path={currentPath} />
      <div className="pl-24 my-5 w-screen">
        <div className="flex gap-5 mb-5 mr-4">
          <div className="flex grow gap-3 border-2 rounded-md border-gray-400 py-2 px-3">
            <div className="relative flex gap-5 w-full">
              <LuSearch className="absolute text-2xl text-warning top-3 left-3" />
              <input className="px-5 pl-12 rounded-xl input input-bordered input-warning w-full" type="text" placeholder="Search something..." />
            </div>
            <select className="focus:outline-none rounded-md btn btn-warning text-left" name="seachBy" id="seachBy">
              <option value="name">Name</option>
              <option value="description">Invoice</option>
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
        <div className="mb-5">
          <p>Total Transactions : {transaction?.data?.pageInfo?.totalData}</p>
        </div>
        <div className="mr-4 mb-5">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="pl-6 py-3 bg-gray-400 text-left">Actions</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Cashier Name</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Invoice</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Date</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="pl-6 py-4 bg-white border-b">
                    <div className="flex space-x-10">
                      <button onClick={() => deleteTransaction(transaction.id)} size="sm" className="flex justify-center items-center flex-col text-red-500">
                        <LuTrash className="w-5 h-5" /> Delete
                      </button>
                      <Link href={"/cashier-edit-transaction/" + transaction.id} size="sm" className="flex justify-center items-center flex-col text-yellow-500">
                        <LuPencil className="w-5 h-5" /> Edit
                      </Link>
                      <Link href={"/cashier-detail-transaction/" + transaction.id} size="sm" className="flex justify-center items-center flex-col text-blue-500">
                        <LuExternalLink className="w-5 h-5" /> Detail
                      </Link>
                    </div>
                  </td>
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
            <p>Lines per page : </p>
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
            <p>Page :</p>
            <p>
              {query.page}/{transaction?.data?.pageInfo?.totalPage}
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

export default CashierListTransaction;

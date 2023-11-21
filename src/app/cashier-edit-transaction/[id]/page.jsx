"use client";
import SidebarCashier from "../../../components/SidebarCashier";
import http from "../../../helpers/http";
import { usePathname } from "next/navigation";
import { redirect, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const CashierEditTransaction = ({ params }) => {
  const id = params.id;
  const pathname = usePathname();
  const currentPath = pathname.split("/")[1].split("-")[2];

  const token = useSelector((state) => state.auth.data);
  const router = useRouter();

  const [transaction, setTransaction] = useState({});
  const [date, setDate] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    getTransaction();
  }, []);

  const getTransaction = async () => {
    try {
      const response = await http(token).get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/transaction/${id}`);
      setTransaction(response.data.results);
    } catch (error) {
      setTransaction({});
    }
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTotalChange = (event) => {
    setTotal(event.target.value);
  };

  const updateTransaction = async (event) => {
    event.preventDefault();
    const formData = {
      date: date,
      total: total
    };

    try {
      const data = await http(token).patch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/transaction/${id}`, formData);
      alert("Edit transaction success");
      router.push("/cashier-list-transaction");
      console.log(data);
    } catch (err) {
      alert(err.message);
      console.log(err);
      throw err;
    }
  };

  //Private Route
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    redirect("/login");
  }
  const role = useSelector((state) => state.auth.role);
  if (role === 1) {
    redirect("/admin-dashboard");
  }

  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      <SidebarCashier path={currentPath} />
      <form onSubmit={updateTransaction}>
        <div className="pl-24 my-5 w-screen">
          <div className="mb-5">
            <p className="text-2xl font-bold">Edit Transaction - {transaction.invoice}</p>
          </div>
          <div className="mr-4 mb-5">
            <table className="w-64">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-400 text-left">Date</th>
                  <th className="px-6 py-3 bg-gray-400 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-3 bg-white border-b">
                    <input type="date" value={transaction?.date?.split("T")[0]} className="w-52 py-2 focus:outline-none" onChange={handleDateChange} />
                  </td>
                  <td className="px-6 py-3 bg-white border-b">
                    <input type="number" placeholder="Insert new total" defaultValue={transaction.total} className="w-52 py-2 focus:outline-none" onChange={handleTotalChange} />
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
        </div>
      </form>
    </div>
  );
};

export default CashierEditTransaction;

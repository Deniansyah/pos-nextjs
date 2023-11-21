"use client";
import { usePathname } from "next/navigation";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailTransactionAction } from "../../../store/detailTransaction/reducer";
import moment from "moment";
import http from "../../../helpers/http";
import SidebarCashier from "../../../components/SidebarCashier";

const CashierDetailTransaction = ({ params }) => {
  const dispatch = useDispatch();
  const id = params.id;
  const pathname = usePathname();
  const currentPath = pathname.split("/")[1].split("-")[2];
  const token = useSelector((state) => state.auth.data);
  const [transaction, setTransaction] = useState({});
  const [transaction_id] = useState(id);

  const detailTransaction = useSelector((state) => state.detailTransaction);
  const data = detailTransaction?.data?.results;

  useEffect(() => {
    dispatch(detailTransactionAction.getDetailTransactionThunk(transaction_id));
    getTransaction();
  }, [dispatch]);

  const getTransaction = async () => {
    try {
      const response = await http(token).get(`${process.env.NEXT_PUBLIC_URL_BACKEND}/transaction/${id}`);
      setTransaction(response.data.results);
    } catch (error) {
      setTransaction({});
    }
  };

  // Converter Rupiah
  const formatPrice = (price) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);

    return formattedPrice;
  };

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
      <div className="pl-24 my-5 w-screen mr-4">
        <div className="mb-5">
          <p className="text-2xl font-bold">Detail Transaction - {transaction.invoice}</p>
        </div>
        <div className="w-full p-5 flex gap-6 bg-white">
          <div className="text-2xl">
            <p>Invoice : {transaction.invoice}</p>
            <p>Date : {moment(transaction.date).format("LLLL")}</p>
            <p className="mb-3">Cashier Name : {transaction.name}</p>
            <div>
              <ul>
                {data.map((product, index) => (
                  <li key={index} className="mb-5 ml-5 border border-black rounded-md p-3 w-fit">
                    <p>Product Name : {product.product_name}</p>
                    <p>Product Price : {formatPrice(product.product_price)}</p>
                    <p>Quantity : {product.qty}</p>
                  </li>
                ))}
              </ul>
            </div>
            <p>Total : {formatPrice(transaction.total)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashierDetailTransaction;

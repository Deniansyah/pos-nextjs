"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailTransactionAction } from "../../../../../store/detailTransaction/reducer";
import { transactionAction } from "../../../../../store/transaction/reducer";
import moment from "moment";
import Sidebar from "../../../../../components/Sidebar";
import PrivateRoute from "../../../../../components/PrivateRoute";

const DetailTransaction = ({ params }) => {
  const dispatch = useDispatch();
  const id = params.id;
  const pathname = usePathname();
  const currentPath = pathname.split("/")[2];
  const [transaction, setTransaction] = useState({});
  const [transaction_id] = useState(id);
  const [loading, setLoading] = useState(false);

  const detailTransaction = useSelector((state) => state.detailTransaction);
  const data = detailTransaction?.data?.results;

  useEffect(() => {
    getTransaction();
    dispatch(detailTransactionAction.getDetailTransactionThunk(transaction_id));
  }, []);

  const getTransaction = async () => {
    setLoading(true)

    try {
      const response = await dispatch(transactionAction.getTransactionByIdThunk(id)).unwrap()
      setTransaction(response);
    } catch (err) {
      setTransaction({});
      alert(err.message);
      console.log(err);
      throw err;
    } finally {
      setLoading(false);
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

  return (
    <div className="flex relative bg-gray-200 min-h-screen min-w-screen">
      {loading ? (
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black opacity-25 flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-warning"></span>
        </div>
      ) : null}
      <Sidebar path={currentPath} />
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
                {data?.map((product, index) => (
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

export default PrivateRoute(DetailTransaction, [1]);

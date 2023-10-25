"use client";
import { usePathname } from "next/navigation";
import SidebarCashier from "../../components/SidebarCashier";

const CashierDetailTransaction = () => {
  const pathname = usePathname();
  const currentPath = pathname.split("/")[1].split("-")[2];

  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      <SidebarCashier path={currentPath} />
      <div className="pl-24 my-5 w-screen mr-4">
        <div className="mb-5">
          <p className="text-2xl font-bold">Detail Transaction - INV003</p>
        </div>
        <div className="w-full p-5 flex gap-6 bg-white">
          <div>
            <img src="" alt="Product 1" className="h-60 w-60 rounded-full bg-warning" />
          </div>
          <div className="flex gap-3 justify-center items-center text-2xl">
            <div>
              <p>Invoice</p>
              <p>Date</p>
              <p>Cashier Name</p>
              <p>Product Name</p>
              <p>Product Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            <div>
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div>
              <p>INV003</p>
              <p>15 Desember 2023</p>
              <p>Cashier 1</p>
              <p>Product 3</p>
              <p>Rp. 100.000</p>
              <p>15 pcs</p>
              <p>Rp. 1.500.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashierDetailTransaction;

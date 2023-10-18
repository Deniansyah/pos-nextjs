import { LuShoppingBag, LuSettings, LuLogOut, LuArrowRightLeft } from "react-icons/lu";

const CashierDetailTransaction = () => {
  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      <div className="flex flex-col fixed h-screen gap-10 w-28 px-4 py-5 border-r bg-[#fbbd23] rounded-tr-2xl rounded-br-2xl">
        <button className="flex flex-col justify-center items-center text-gray-500">
          <LuShoppingBag className="text-2xl" />
          <p>Market</p>
        </button>
        <button className="flex flex-col justify-center items-center bg-[#ecca73] rounded-xl p-3">
          <LuArrowRightLeft className="text-2xl" />
          <p>Transaction</p>
        </button>
        <button className="flex flex-col justify-center items-center text-gray-500">
          <LuSettings className="text-2xl" />
          <p>Setting</p>
        </button>
        <div className="flex flex-col justify-end items-center text-red-500 grow">
          <button className="flex flex-col justce items-center">
            <LuLogOut className="text-2xl" />
            <p>Log out</p>
          </button>
        </div>
      </div>
      <div className="pl-32 my-5 w-screen mr-4">
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
}

export default CashierDetailTransaction
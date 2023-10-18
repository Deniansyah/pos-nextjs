"use client";
import { LuShoppingBag, LuSettings, LuLogOut, LuSearch, LuExternalLink, LuChevronLeft, LuChevronRight, LuArrowRightLeft, LuPencil, LuTrash } from "react-icons/lu";

const CashierListTransaction = () => {
  // Dummy data
  const transactions = [
    {
      id: 1,
      name: "Cashier 1",
      invoice: "INV-001",
      date: "2023-10-01",
      total: "$100.00",
    },
    {
      id: 2,
      name: "Cashier 2",
      invoice: "INV-002",
      date: "2023-10-02",
      total: "$75.50",
    },
    {
      id: 3,
      name: "Cashier 3",
      invoice: "INV-003",
      date: "2023-10-03",
      total: "$50.25",
    },
    {
      id: 4,
      name: "Cashier 4",
      invoice: "INV-004",
      date: "2023-10-04",
      total: "$125.75",
    },
    {
      id: 5,
      name: "Cashier 5",
      invoice: "INV-005",
      date: "2023-10-05",
      total: "$90.20",
    },
    // Add more dummy data as needed
  ];

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
      <div className="pl-32 my-5 w-screen">
        <div className="flex gap-5 mb-5 mr-5">
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
          <p>Total Transactions : 5</p>
        </div>
        <div className="mr-5 mb-5">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="pl-6 py-3 bg-gray-400 text-left">Actions</th>
                <th className="pr-6 py-3 bg-gray-400 text-left">ID</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Cashier Name</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Invoice</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Date</th>
                <th className="px-6 py-3 bg-gray-400 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="pl-6 py-4 bg-white border-b">
                    <div className="flex space-x-10">
                      <button size="sm" className="flex justify-center items-center flex-col text-red-500">
                        <LuTrash className="w-5 h-5" /> Delete
                      </button>
                      <button size="sm" className="flex justify-center items-center flex-col text-yellow-500">
                        <LuPencil className="w-5 h-5" /> Edit
                      </button>
                      <button size="sm" className="flex justify-center items-center flex-col text-blue-500">
                        <LuExternalLink className="w-5 h-5" /> Detail
                      </button>
                    </div>
                  </td>
                  <td className="pr-6 py-4 bg-white border-b">{transaction.id}</td>
                  <td className="px-6 py-4 bg-white border-b">{transaction.name}</td>
                  <td className="px-6 py-4 bg-white border-b">{transaction.invoice}</td>
                  <td className="px-6 py-4 bg-white border-b">{transaction.date}</td>
                  <td className="px-6 py-4 bg-white border-b">{transaction.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* next prev page */}
        <div className="flex justify-between items-center gap-5 mr-5">
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
            <p>Baris per halaman : </p>
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
            <p>Halaman :</p>
            <p>
              {/* {query.page}/{product?.data?.pageInfo?.totalPage} */}
              1/1
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

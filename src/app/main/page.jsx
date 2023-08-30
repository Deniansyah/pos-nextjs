import { LuShoppingBag, LuCreditCard, LuSettings, LuLogOut, LuSearch, LuX, LuPlus, LuMinus } from "react-icons/lu";

const Main = () => {
  return (
    <div className="flex bg-gray-200 min-h-screen min-w-screen">
      {/* sidebar */}
      <div className="flex flex-col fixed h-screen gap-10 px-4 py-5 border-r bg-[#fbbd23] rounded-tr-2xl rounded-br-2xl">
        <button className="flex flex-col justify-center items-center bg-[#ecca73] rounded-xl p-3">
          <LuShoppingBag className="text-2xl" />
          <p>Market</p>
        </button>
        <button className="flex flex-col justify-center items-center text-gray-500">
          <LuCreditCard className="text-2xl" />
          <p>Sales</p>
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
      {/* isi */}
      <div className="pl-32 my-5 w-[100%]">
        <div className="flex gap-10">
          <div>
            <h1 className="text-xl font-bold">Point of Sale</h1>
            <p>Kamis, Juni 13 2023</p>
          </div>
          <div className="relative">
            <LuSearch className="absolute text-2xl text-warning top-3 left-3" />
            <input className="h-full px-5 pl-12 rounded-xl w-[200%] input input-bordered input-warning" type="text" placeholder="Search something..." />
          </div>
        </div>
        {/* Categoty */}
        <div className="flex gap-3 mt-5">
          <button className="text-warning">All</button>|<button>Category1</button>|<button>Category2</button>|<button>Category3</button>|<button>Category4</button>
        </div>
        {/* Choose */}
        <div className="mt-5 w-[70%]">
          <h2 className="text-lg font-bold mb-5">Choose something</h2>
          <div className="flex gap-5 flex-wrap">
            <div className="flex gap-3 bg-white w-[48%] p-3 rounded-xl">
              <div className="flex justify-center items-center">
                <div className="w-20 h-20 rounded-xl bg-red-500" />
              </div>
              <div className="w-full">
                <h3 className="font-bold w-40 mb-3">Lorem ipsum dolor sit amet.</h3>
                <div className="flex w-full justify-center items-center">
                  <p className="grow">Rp. 35.000</p>
                  <button className="btn btn-outline btn-warning btn-sm">Add to cart</button>
                </div>
              </div>
            </div>
            <div className="flex gap-3 bg-white w-[48%] p-3 rounded-xl">
              <div className="flex justify-center items-center">
                <div className="w-20 h-20 rounded-xl bg-red-500" />
              </div>
              <div className="w-full">
                <h3 className="font-bold w-40 mb-3">Lorem ipsum dolor sit amet.</h3>
                <div className="flex w-full justify-center items-center">
                  <p className="grow">Rp. 35.000</p>
                  <button className="btn btn-outline btn-warning btn-sm">Add to cart</button>
                </div>
              </div>
            </div>
            <div className="flex gap-3 bg-white w-[48%] p-3 rounded-xl">
              <div className="flex justify-center items-center">
                <div className="w-20 h-20 rounded-xl bg-red-500" />
              </div>
              <div className="w-full">
                <h3 className="font-bold w-40 mb-3">Lorem ipsum dolor sit amet.</h3>
                <div className="flex w-full justify-center items-center">
                  <p className="grow">Rp. 35.000</p>
                  <button className="btn btn-outline btn-warning btn-sm">Add to cart</button>
                </div>
              </div>
            </div>
            <div className="flex gap-3 bg-white w-[48%] p-3 rounded-xl">
              <div className="flex justify-center items-center">
                <div className="w-20 h-20 rounded-xl bg-red-500" />
              </div>
              <div className="w-full">
                <h3 className="font-bold w-40 mb-3">Lorem ipsum dolor sit amet.</h3>
                <div className="flex w-full justify-center items-center">
                  <p className="grow">Rp. 35.000</p>
                  <button className="btn btn-outline btn-warning btn-sm">Add to cart</button>
                </div>
              </div>
            </div>
            <div className="flex gap-3 bg-white w-[48%] p-3 rounded-xl">
              <div className="flex justify-center items-center">
                <div className="w-20 h-20 rounded-xl bg-red-500" />
              </div>
              <div className="w-full">
                <h3 className="font-bold w-40 mb-3">Lorem ipsum dolor sit amet.</h3>
                <div className="flex w-full justify-center items-center">
                  <p className="grow">Rp. 35.000</p>
                  <button className="btn btn-outline btn-warning btn-sm">Add to cart</button>
                </div>
              </div>
            </div>
            <div className="flex gap-3 bg-white w-[48%] p-3 rounded-xl">
              <div className="flex justify-center items-center">
                <div className="w-20 h-20 rounded-xl bg-red-500" />
              </div>
              <div className="w-full">
                <h3 className="font-bold w-40 mb-3">Lorem ipsum dolor sit amet.</h3>
                <div className="flex w-full justify-center items-center">
                  <p className="grow">Rp. 35.000</p>
                  <button className="btn btn-outline btn-warning btn-sm">Add to cart</button>
                </div>
              </div>
            </div>
            <div className="flex gap-3 bg-white w-[48%] p-3 rounded-xl">
              <div className="flex justify-center items-center">
                <div className="w-20 h-20 rounded-xl bg-red-500" />
              </div>
              <div className="w-full">
                <h3 className="font-bold w-40 mb-3">Lorem ipsum dolor sit amet.</h3>
                <div className="flex w-full justify-center items-center">
                  <p className="grow">Rp. 35.000</p>
                  <button className="btn btn-outline btn-warning btn-sm">Add to cart</button>
                </div>
              </div>
            </div>
            <div className="flex gap-3 bg-white w-[48%] p-3 rounded-xl">
              <div className="flex justify-center items-center">
                <div className="w-20 h-20 rounded-xl bg-red-500" />
              </div>
              <div className="w-full">
                <h3 className="font-bold w-40 mb-3">Lorem ipsum dolor sit amet.</h3>
                <div className="flex w-full justify-center items-center">
                  <p className="grow">Rp. 35.000</p>
                  <button className="btn btn-outline btn-warning btn-sm">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* aside */}
      <div className="bg-white fixed w-[26%] h-screen right-0 rounded-l-2xl p-2">
        <h1 className="text-2xl font-bold px-3">Order list</h1>
        <p className="text-gray-400 px-3">#08098999917</p>
        <h3 className="font-bold px-3">Items :</h3>
        <div className="flex flex-col gap-5 mt-3 h-[65%] overflow-y-auto">
          <div className="border rounded-xl px-3 ml-3 py-4 relative">
            <button className="absolute border border-red-500 rounded-full p-1 bg-white -top-2 -left-2">
              <LuX className="text-red-500 text-lg" />
            </button>
            <p className="font-bold">Lorem ipsum dolor sit amet.</p>
            <div className="w-full flex mt-2">
              <p className="grow">Rp. 70.000</p>
              <div className="flex justify-center items-center gap-3">
                <div className="border-black border rounded-md p-1">
                  <LuMinus />
                </div>
                <p>2</p>
                <div className="border-black border rounded-md p-1">
                  <LuPlus />
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-xl px-3 ml-3 py-4 relative">
            <button className="absolute border border-red-500 rounded-full p-1 bg-white -top-2 -left-2">
              <LuX className="text-red-500 text-lg" />
            </button>
            <p className="font-bold">Lorem ipsum dolor sit amet.</p>
            <div className="w-full flex mt-2">
              <p className="grow">Rp. 70.000</p>
              <div className="flex justify-center items-center gap-3">
                <div className="border-black border rounded-md p-1">
                  <LuMinus />
                </div>
                <p>2</p>
                <div className="border-black border rounded-md p-1">
                  <LuPlus />
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-xl px-3 ml-3 py-4 relative">
            <button className="absolute border border-red-500 rounded-full p-1 bg-white -top-2 -left-2">
              <LuX className="text-red-500 text-lg" />
            </button>
            <p className="font-bold">Lorem ipsum dolor sit amet.</p>
            <div className="w-full flex mt-2">
              <p className="grow">Rp. 70.000</p>
              <div className="flex justify-center items-center gap-3">
                <div className="border-black border rounded-md p-1">
                  <LuMinus />
                </div>
                <p>2</p>
                <div className="border-black border rounded-md p-1">
                  <LuPlus />
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-xl px-3 ml-3 py-4 relative">
            <button className="absolute border border-red-500 rounded-full p-1 bg-white -top-2 -left-2">
              <LuX className="text-red-500 text-lg" />
            </button>
            <p className="font-bold">Lorem ipsum dolor sit amet.</p>
            <div className="w-full flex mt-2">
              <p className="grow">Rp. 70.000</p>
              <div className="flex justify-center items-center gap-3">
                <div className="border-black border rounded-md p-1">
                  <LuMinus />
                </div>
                <p>2</p>
                <div className="border-black border rounded-md p-1">
                  <LuPlus />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-dotted border-2 mt-3 mx-3 rounded-t-xl">
          <div className="border-b-2 p-2">
            <div className="flex w-full">
              <h2 className="grow font-bold">Subtotal</h2>
              <p>Rp. 280.000</p>
            </div>
            <div className="flex w-full">
              <h2 className="grow">Tax(10%)</h2>
              <p>Rp. 28.000</p>
            </div>
          </div>
          <div className="flex justify-evenly items-center p-2">
            <button className="btn btn-error btn-sm">Cancel</button>
            <button className="btn btn-warning btn-sm">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main
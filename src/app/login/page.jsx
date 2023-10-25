"use client";
import Link from "next/link";
import Image from "next/image";
import bg from "../../../public/bg.jpg";

const login = () => {
  return (
    <div className="flex">
      <div className="basis-2/5 h-screen">
        <div className="relative w-full">
          <div className="absolute -z-10 w-full">
            <Image src={bg} alt="background" className="w-full h-screen" />
          </div>
          <div className="absolute flex flex-col w-full h-screen justify-center items-center drop-shadow-xl px-10">
            <h1 className="text-[6rem] font-bold text-white">POS</h1>
            <h3 className="text-white text-4xl drop-shadow-xl mb-10 -mt-7">Point of sale</h3>
            <p className="text-white drop-shadow-xl text-xl text-center">An application that will make your gift sending experience even more memorable</p>
          </div>
        </div>
      </div>
      <div className="basis-3/5 w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-5">Get Started</h1>
        <div className="form-control w-1/2 mb-3">
          <label className="label text-lg">
            <span>
              Email<span className="text-red-500">*</span>
            </span>
          </label>
          <input type="text" placeholder="Insert your email address" className="input input-bordered w-full" />
        </div>
        <div className="form-control w-1/2">
          <label className="label text-lg">
            <span>
              Password<span className="text-red-500">*</span>
            </span>
          </label>
          <input type="password" placeholder="Insert your password" className="input input-bordered w-full" />
        </div>
        <Link href={'/cashier-main'} className="btn btn-warning mt-7 w-1/2">Login</Link>
        <p className="text-gray-400 mt-10">
          Not Registered Yet? <span className="text-warning">Create an ccount</span>
        </p>
      </div>
    </div>
  );
};

export default login;

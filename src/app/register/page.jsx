import Image from "next/image";
import bg from "../../../public/bg.jpg";

const register = () => {
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
        <h1 className="text-5xl font-bold mb-5">Create an account</h1>
        <div className="form-control w-1/2 mb-3">
          <label className="label text-lg">
            <span>
              Name<span className="text-red-500">*</span>
            </span>
          </label>
          <input type="text" placeholder="Insert your fullname" className="input input-bordered w-full" />
        </div>
        <div className="form-control w-1/2 mb-3">
          <label className="label text-lg">
            <span>
              Email<span className="text-red-500">*</span>
            </span>
          </label>
          <input type="text" placeholder="Insert your email address" className="input input-bordered w-full" />
        </div>
        <div className="form-control w-1/2 mb-3">
          <label className="label text-lg">
            <span>
              Password<span className="text-red-500">*</span>
            </span>
          </label>
          <input type="password" placeholder="Insert your password" className="input input-bordered w-full" />
        </div>
        <div className="flex mb-3">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text mr-3">Admin</span>
              <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text mr-3">Cashier</span>
              <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
            </label>
          </div>
        </div>
        <button className="btn btn-warning w-1/2">Register Now</button>
      </div>
    </div>
  );
}

export default register
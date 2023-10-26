"use client";
import Image from "next/image";
import bg from "../../../public/bg.jpg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../store/auth/reducer";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isError = useSelector((state) => state.auth.isError);
  const message = useSelector((state) => state.auth.errorMessage);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) {
    redirect("/cashier-main");
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const isButtonDisabled = email === "" || password === ""

  const loginRequest = (e) => {
    e.preventDefault();
    const { value: email } = e.target.email;
    const { value: password } = e.target.password;

    if (email.length === 0 || password.length === 0) {
      setShowAlert(true);
    } else {
      const cb = () => {
        router.push("/cashier-main");
      };

      if (isError) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }

      dispatch(authAction.loginThunk({ email, password, cb }));
    }
  };

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
        {showAlert && (
          <div className="alert alert-error w-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{message}</span>
          </div>
        )}
        <form onSubmit={loginRequest} className="w-full flex flex-col justify-center items-center">
          <div className="form-control w-1/2 mb-3">
            <label className="label text-lg">
              <span>
                Email<span className="text-red-500">*</span>
              </span>
            </label>
            <input type="email" name="email" onChange={handleEmailChange} placeholder="Insert your email address" className="input input-bordered w-full" />
          </div>
          <div className="form-control w-1/2">
            <label className="label text-lg">
              <span>
                Password<span className="text-red-500">*</span>
              </span>
            </label>
            <input type="password" name="password" onChange={handlePasswordChange} placeholder="Insert your password" className="input input-bordered w-full" />
          </div>
          <button disabled={isButtonDisabled} className={isButtonDisabled ? "btn btn-disabled mt-7 w-1/2" : "btn btn-warning mt-7 w-1/2"}>
            Login
          </button>
        </form>
        <p className="text-gray-400 mt-10">
          Not Registered Yet? <span className="text-warning">Create an ccount</span>
        </p>
      </div>
    </div>
  );
};

export default Login;

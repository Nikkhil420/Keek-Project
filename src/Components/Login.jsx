import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaMobileAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { BsEyeSlash } from "react-icons/bs";
import { Key } from "@mui/icons-material";
import { Link } from "react-router-dom";
import LoginCarousel from "../Components/LoginSignUpPage/LoginCarousel/LoginCarousel";

const Login = () => {
  const [shoPass, setShowPass] = useState(false);
  let slides = [
    "https://www.searchenginejournal.com/wp-content/uploads/2022/09/influencer-marketing2-631aeb9e3273a-sej.png",
    "https://cdn.i.haymarketmedia.asia/?n=campaign-india%2Fcontent%2Finfluencer+india.jpg&h=570&w=855&q=100&v=20170226&c=1",
    "https://agencynetwork.org/assets/upload/article/835112326202038253232_6393005ccc516923b883acee_Influencer-Marketing.jpg",
  ];
  return (
    <>
      <div className="flex flex-row h-[100vh] relative">
        {/* carausal panel */}
        <div className="h-screen w-[100%] relative">
          <LoginCarousel slides={slides} autoSlide={true} />
        </div>
        {/* login panel */}
        <div className="h-screen mx-16 w-1/2 text-start">
          <h1 className="text-5xl font-bold text-blue-600 font-serif mt-8">
            Keek
          </h1>
          <h2 className="mt-4 font-bold">Welcome Back!</h2>
          <h2 className="opacity-75 mb-4">Please enter your credentials</h2>
          <button className="w-full border rounded-md my-2 py-2 active:bg-blue-600 active:text-white">
            <FcGoogle className="inline-block text-[20px]" /> Continue with
            google
          </button>
          <Link to="/Login_Mobile">
            <button className="w-full border rounded-md my-2 py-2 active:bg-blue-600 active:text-white">
              <FaMobileAlt className="inline-block mx-2 text-lg opacity-50" />
              Continue with mobile number
            </button>
          </Link>
          <div className="flex text-sm items-center opacity-50">
            <hr className="w-1/2" /> <span className="p-4">OR</span>
            <hr className="w-1/2" />
          </div>
          <div className="mb-2">
            <div>Email</div>
            <div className="relative">
              <input
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                type="text"
                placeholder="john.doe@gmail.com"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CiMail className="inline-block text-xl opacity-75" />
              </div>
            </div>
          </div>
          <div className="my-2">
            <div>Password</div>
            <div className="relative">
              <input
                className="border rounded-md pl-10 w-full py-2"
                type={`${shoPass ? "text" : "password"}`}
                placeholder="Password"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Key className="rotate-90 opacity-50" />
              </div>
              <div
                onClick={() => {
                  setShowPass(!shoPass);
                }}
                className="absolute inset-y-0 right-2 pl-3 flex items-center"
              >
                {shoPass ? (
                  <BsEyeSlash className="text-2xl opacity-50" />
                ) : (
                  <IoEyeOutline className="text-2xl opacity-50" />
                )}
              </div>
            </div>
          </div>
          <div className="text-end">
            <button className="text-end text-blue-600 active:text-blue-800 active:font-semibold">
              <Link to={"/forget_pass"}>Forget password</Link>
            </button>
          </div>
          <div>
            <button className="w-full border text-white rounded-md my-2 py-2 bg-blue-600 active:bg-transparent active:border active:text-black">
              Login
            </button>
          </div>
          <div>
            <hr className="w-full my-6" />
          </div>
          <div className="items-center text-center">
            <h2>
              Don’t have an account?&nbsp;
              <button className="text-end text-blue-600 active:text-blue-800 active:font-semibold">
                <Link to={"/sign_up"}>Sign up</Link>
              </button>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

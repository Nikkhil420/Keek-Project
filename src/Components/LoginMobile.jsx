import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginCarousel from './LoginSignUpPage/LoginCarousel/LoginCarousel';
import { FaMobileAlt } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { BsEyeSlash } from "react-icons/bs";
import { FiKey } from "react-icons/fi"; // Import the key icon

const LoginMobile = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [showPass, setShowPass] = useState(false); // State for toggling password visibility

  const handleInputChange = (event) => {
    const { value } = event.target;
    const numericValue = value.replace(/[^0-9]/g, '');
    setMobileNumber(numericValue);
  };

  let slides = [
    "https://www.searchenginejournal.com/wp-content/uploads/2022/09/influencer-marketing2-631aeb9e3273a-sej.png",
    "https://cdn.i.haymarketmedia.asia/?n=campaign-india%2Fcontent%2Finfluencer+india.jpg&h=570&w=855&q=100&v=20170226&c=1",
    "https://agencynetwork.org/assets/upload/article/835112326202038253232_6393005ccc516923b883acee_Influencer-Marketing.jpg"
  ];

  return (
    <>
      <div className="flex flex-row h-[100vh] justify-center items-center">
        {/* carousel panel */}
        <div className="h-screen w-[100%] relative">
          <LoginCarousel slides={slides} autoSlide={true} />
        </div>
        {/* login panel */}
        <div className="mx-16 w-1/2 text-start items-center">
          <h1 className="text-5xl font-bold text-blue-600 font-serif mt-8">
            Keek
          </h1>
          <h2 className="mt-4 font-bold">Login with your Mobile Number</h2>
          <h2 className="opacity-75 mb-4">Please enter your Mobile Number</h2>
          <div className="mb-2">
            <div>Mob. Number</div>
            <div className="relative">
              <input
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                type="text"
                inputMode="numeric"
                value={mobileNumber}
                onChange={handleInputChange}
                placeholder="1234567890"
                maxLength={12}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMobileAlt className="inline-block mx-2 text-lg opacity-50" />
              </div>
            </div>

            <div className="my-2">
              <div>Password</div>
              <div className="relative">
                <input
                  className="border rounded-md pl-10 w-full py-2"
                  type={`${showPass ? "text" : "password"}`}
                  placeholder="Password"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiKey className="rotate-90 opacity-50" />
                </div>
                <div
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                  className="absolute inset-y-0 right-2 pl-3 flex items-center cursor-pointer"
                >
                  {showPass ? (
                    <BsEyeSlash className="text-2xl opacity-50" />
                  ) : (
                    <IoEyeOutline className="text-2xl opacity-50" />
                  )}
                </div>
              </div>
            </div>

            <div>
              <button className="w-full border text-white rounded-md my-2 py-2 bg-blue-600 active:bg-transparent active:border active:text-black">
                Login
              </button>
            </div>

            

            <div>
              <Link to={"/"}>
                <button className="w-full border rounded-md my-2 py-2 active:bg-blue-600 active:border active:text-white">
                  Back To Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginMobile;

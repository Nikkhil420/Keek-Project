import { CiMail } from 'react-icons/ci';
import Rectangle from '../Assets/Login_images/Rectangle.png';
import React from 'react'
import { Link } from 'react-router-dom';
import LoginCarousel from './LoginSignUpPage/LoginCarousel/LoginCarousel';

const ForgetPass = () => {
  let slides = ["https://www.searchenginejournal.com/wp-content/uploads/2022/09/influencer-marketing2-631aeb9e3273a-sej.png",
    "https://cdn.i.haymarketmedia.asia/?n=campaign-india%2Fcontent%2Finfluencer+india.jpg&h=570&w=855&q=100&v=20170226&c=1",
   "https://agencynetwork.org/assets/upload/article/835112326202038253232_6393005ccc516923b883acee_Influencer-Marketing.jpg"
  ]
  return (
    <>
      <div className="flex flex-row h-[100vh] justify-center items-center">
        {/* carausal panel */}
        <div className="h-screen w-[100%] relative">
          
        <LoginCarousel slides={slides} autoSlide={true}/>
        </div>
        {/* login panel */}
        <div className="mx-16 w-1/2 text-start items-center">
          <h1 className="text-5xl font-bold text-blue-600 font-serif mt-8">
            Keek
          </h1>
          <h2 className="mt-4 font-bold">Forgot Password?</h2>
          <h2 className="opacity-75 mb-4">Please enter your credentials</h2>
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
            <div>
              <button className="w-full border text-white rounded-md my-2 py-2 bg-blue-600 active:bg-transparent active:border active:text-black">
                Send reset link
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

export default ForgetPass
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from '../Components/Login';
import ForgetPass from '../Components/ForgetPass';
import LoginMobile from '../Components/LoginMobile';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/forget_pass" element={<ForgetPass />} />
        <Route path="/sign_up" element={<div>Sign up page <br /><Link to={"/"} className='text-blue-600'> Go BACK</Link></div>} />
        <Route path="/*" element={<h1>error 404</h1>} />
        <Route path="/Login_Mobile" element={<LoginMobile />} />
      </Routes>
    </>
  );
}

export default Routing;

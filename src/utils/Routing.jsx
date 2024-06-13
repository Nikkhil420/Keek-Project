import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from '../Components/Login';
import ForgetPass from '../Components/ForgetPass';
import LoginMobile from '../Components/LoginMobile';
import SignUp from '../Components/SignUp';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/forget_pass" element={<ForgetPass />} />
        <Route path="/sign_up" element={<SignUp/>} />
        <Route path="/*" element={<h1>error 404</h1>} />
        <Route path="/Login_Mobile" element={<LoginMobile />} />
      </Routes>
    </>
  );
}

export default Routing;

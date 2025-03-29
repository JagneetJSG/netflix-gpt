import React from "react";
import Body from "../components/Body";
import Header from "../components/Header";

const Login = () => {
  return (
    <div>
      <div className='absolute z-10 bg-gradient-to-b from-black from-30%'>
        <Header />
      </div>
      <Body />
    </div>
  );
};

export default Login;

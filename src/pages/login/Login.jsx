import React from "react";

const Login = () => {
  return (
    <div className="bg-amber-500 w-[50%] mx-auto py-12 my-8 ">
      <h1 className="text-center text-3xl text-white font-bold">Please Log in</h1>
      <div className="text-center">
        
        <br />
        <input className="mr-4 pl-2 py-3 w-[50%] my-6" type="email" name="email" id="" placeholder="Email"/> <br />
        <input className="mr-4 pl-2 py-3 w-[50%]" type="password" name="password" id="" placeholder="password"/> <br />
        <button className="text-center bg-white text-amber-500 px-8 my-4">
            Subscribe
          </button>
      </div>
    </div>
  );
};

export default Login;

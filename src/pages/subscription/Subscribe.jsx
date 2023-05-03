import React from "react";

const Subscribe = () => {
  return (
    <form className="bg-amber-500 w-[70%] mx-auto py-12 my-8 mb-20">
      <div className="mb-8">
        <h1 className=" text-3xl md:text-4xl font-bold text-center text-white pb-8">
          Subscribe To Get Information <br /> & Discount
        </h1>
        <div className="text-center">
          <input
            className="mr-4 pl-2 py-2 sm: mb-3 md:py-3 md:px-32"
            type="text"
            placeholder="Email address"
            required
          />
          <button className="hover:bg-amber-600 border border-white text-white md:text-lg py-2 px-2  md:px-8">
            Subscribe
          </button>
        </div>
      </div>
    </form>
  );
};

export default Subscribe;

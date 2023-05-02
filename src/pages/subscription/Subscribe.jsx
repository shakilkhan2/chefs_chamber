import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-amber-500 w-[70%] mx-auto py-12 my-8 mb-20">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center text-white pb-8">
          Subscribe To Get Information <br /> & Discount
        </h1>
        <div className="text-center">
          <input
            className="mr-4 pl-2 py-3 px-32"
            type="text"
            placeholder="Email address"
          />
          <button className="hover:bg-amber-600 border border-white text-white text-lg py-2 px-8">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

import React from "react";

const Reviews = () => {
  return (
    <div>
      <h1 className="text-center text-3xl text-amber-500 font-bold">
        Reviews
      </h1>
      <hr className="w-[30%] mx-auto mt-2 border-amber-500" />

      <div className="grid grid-cols-3 w-[70%] mx-auto my-8">
        <div className="bg-white border border-amber-500 shadow-2xl h-60 w-60 text-center p-1">
          <h1 className="tex-2xl font-bold text-amber-500">Jhon</h1>
          <p><strong>Foods are delicious recommend for all.</strong></p>
        </div>
        <div className="bg-white border border-amber-500 shadow-2xl h-60 w-60 text-center p-2">
        <h1 className="tex-2xl font-bold text-amber-500">Jhon</h1>
          <p><strong>Foods are delicious recommend for all.</strong></p>
        </div>
        <div className="bg-white border border-amber-500 shadow-2xl h-60 w-60 text-center p-2">
        <h1 className="tex-2xl font-bold text-amber-500">Jhon</h1>
          <p><strong>Foods are delicious recommend for all.</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

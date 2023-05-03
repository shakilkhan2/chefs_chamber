import React from "react";

const Reviews = () => {
  return (
    <div>
      <h1 className="text-center text-3xl text-amber-500 font-bold">Reviews</h1>
      <hr className="w-[30%] mx-auto mt-2 border-amber-500" />

      <div className="grid sm:grid-cols-1   md:grid-cols-3 w-[70%] mx-auto my-8 ">
        <div className="bg-white border border-amber-500 shadow-2xl h-60 w-60 text-center p-2">
          <img
            className="h-16 w-16 mx-auto rounded-full flex items-center"
            src="https://i.ibb.co/kmmdDRw/user-1.jpg"
            alt=""
          />
          <h1 className="tex-2xl font-bold text-amber-500">Anon</h1>
          <p>
            We travelled all the way from Canada for this fantastic food and
            definately worth the trip!
          </p>
        </div>
        <div className="bg-white border border-amber-500  shadow-2xl h-60 w-60 text-center p-2">
          <img
            className="h-16 w-16 mx-auto rounded-full flex items-center"
            src="https://i.ibb.co/kmmdDRw/user-1.jpg"
            alt=""
          />
          <h1 className="tex-2xl font-bold text-amber-500">Morlock</h1>
          <p>
            Fabulous food and excellent service - so lovely to spend an evening
            at Chefs' Chamber!
          </p>
        </div>
        <div className="bg-white border border-amber-500 shadow-2xl h-60 w-60 text-center p-2">
          <img
            className="h-16 w-16 mx-auto rounded-full flex items-center"
            src="https://i.ibb.co/kmmdDRw/user-1.jpg"
            alt=""
          />
          <h1 className="tex-2xl font-bold text-amber-500">Jhon</h1>
          <p>
            The only sufficient word I can use to describe our dining experience
            is 'magnifique'!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

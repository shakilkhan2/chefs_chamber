import React from "react";
import "./cover.css";

const Cover = () => {
  return (
    <div className="cover">
      <div className="flex justify-between">
        <h1
          className="font-bold text-4xl md:text-5xl text-white ml-40 pt-20
      "
        >
          Customize your test <br /> with our best <br /> chefs'...
        </h1>
        <div>
          <img
            className="sm:appearance-none md:max-w-full   md:pt-8 pr-40 image-full h-auto"
            src="https://i.ibb.co/bPXqjbD/chef-Cover.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Cover;

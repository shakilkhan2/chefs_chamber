import React from "react";
import "./home.css";
import Cover from "../cover/Cover";

import { useLoaderData } from "react-router-dom";
import ChefInfo from "../chefInfo/ChefInfo";
import Subscribe from "../subscription/Subscribe";
import Reviews from "../reviews/Reviews";

const Home = () => {
  const allChef = useLoaderData();
  // console.log(allChef);
  return (
    <div className="">
      <Cover />
      <div className="mt-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-800 text-center">
          Meet our Chef
        </h1>
        <p>Our best chefs are skilled culinary professionals with years of experience in creating delicious and visually <br /> appealing dishes.  They are passionate about cooking and use their <br /> creativity to make every meal a masterpiece.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  ">
        {allChef.map((chef) => (
          <ChefInfo key={chef.id} chef={chef}></ChefInfo>
        ))}
      </div>
      <div>
        <Subscribe />
      </div>
     <Reviews/>
    </div>
  );
};

export default Home;

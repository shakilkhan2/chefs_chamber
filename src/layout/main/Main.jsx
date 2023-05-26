import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../pages/navbar/Navbar";
import Footer from "../../pages/shared/footer/Footer";
import Loading from "../../pages/loading/Loading";

const Main = () => {
  const navigation = useNavigation();

  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div>{navigation.state === "loading" ? <Loading /> : ""}</div>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

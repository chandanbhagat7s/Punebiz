import React from "react";
import NavBarr from "../Components/NavBar";
import Navv from "../Components/Navv";
import Navi from "../Components/Change/Navi";
import Footer from "../Components/Footer";

export default function MainOut({ children }) {
  return (
    <>
      {/* <Navv /> */}
      <Navi />
      <div className="mt-44 lg:mt-32"></div>
      {children}
      <Footer />
    </>
  );
}

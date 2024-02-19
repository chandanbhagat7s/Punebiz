import React from "react";
import NavBarr from "../Components/NavBar";
import Footer from "../Components/Footer";
import Navv from "../Components/Navv";

export default function MainOut({ children }) {
  return (
    <>
      <Navv />
      {children}
      <Footer />
    </>
  );
}

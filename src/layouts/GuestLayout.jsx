import React from "react";
import NavBar from "../componenets/NavBar";
import Hero from "../componenets/Hero";
import WeeklySpecial from "../componenets/WeeklySpecial";
import Footer from "../componenets/Footer";

function GuestLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default GuestLayout;

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";

function DefaultLayout(props) {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      {props.children}
    </>
  );
}

export default DefaultLayout;

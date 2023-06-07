import React from "react";
import Navbar from "../components/Navbar/Navbar";

function MovieLayout(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default MovieLayout;

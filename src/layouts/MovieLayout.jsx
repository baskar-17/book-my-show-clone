import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar";

function MovieLayout(props) {
  return (
    <>
      <MovieNavbar />
      {props.children}
    </>
  );
}

export default MovieLayout;

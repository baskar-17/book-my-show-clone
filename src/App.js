import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DefaultHOC from "./HOC/DefaultHOC";
import MovieHOC from "./HOC/MovieHOC";

import HomePage from "./components/Pages/HomePage";
import MoviePage from "./components/Pages/MoviePage";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact={true} component={HomePage} />
      <MovieHOC path="/movie/:title" exact={true} component={MoviePage} />
    </>
  );
}

export default App;

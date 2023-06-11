import React from "react";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DefaultHOC from "./HOC/DefaultHOC";
import MovieHOC from "./HOC/MovieHOC";

import HomePage from "./components/Pages/HomePage";
import MoviePage from "./components/Pages/MoviePage";
import PlaysPage from "./components/Pages/PlaysPage";

// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact={true} component={HomePage} />
      <DefaultHOC path="/plays" exact={true} component={PlaysPage} />
      <MovieHOC path="/movie/:title" exact={true} component={MoviePage} />
    </>
  );
}

export default App;

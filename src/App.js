import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DefaultHOC from "./HOC/DefaultHOC";
import HomePage from "./components/Pages/HomePage";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact={true} component={HomePage} />
    </>
  );
}

export default App;

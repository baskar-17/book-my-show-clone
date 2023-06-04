import React from "react";

import DefaultHOC from "./HOC/DefaultHOC";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact={true} component={Navbar} />
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

import MovieLayout from "../layouts/MovieLayout";

function MovieHOC({ component: Component, ...props }) {
  return (
    <>
      <Routes>
        <Route
          {...props}
          element={
            <MovieLayout>
              <Component />
            </MovieLayout>
          }
        />
      </Routes>
    </>
  );
}

export default MovieHOC;

import React from "react";
import { Routes, Route } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";

function DefaultHOC({ component: Component, ...props }) {
  return (
    <>
      <Routes>
        <Route
          {...props}
          element={
            <DefaultLayout>
              <Component />
            </DefaultLayout>
          }
        />
      </Routes>
    </>
  );
}

export default DefaultHOC;

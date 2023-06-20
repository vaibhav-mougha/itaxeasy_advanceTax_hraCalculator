import React from "react";
import { Route, Routes } from "react-router-dom";
import AdvanceTaxCalculator from "../Pages/AdvanceTaxCalculator";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={"/advance"} element={<AdvanceTaxCalculator />} />
      </Routes>
    </>
  );
};

export default AllRoutes;

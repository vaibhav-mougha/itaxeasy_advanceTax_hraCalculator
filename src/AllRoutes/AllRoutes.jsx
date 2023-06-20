import React from "react";
import { Route, Routes } from "react-router-dom";
import AdvanceTaxCalculator from "../Pages/AdvanceTaxCalculator";
import HouseRentAllowanceCalculator from "../Pages/HouseRentAllowanceCalculator";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<HouseRentAllowanceCalculator />} />
        <Route path={"/advance"} element={<AdvanceTaxCalculator />} />
      </Routes>
    </>
  );
};

export default AllRoutes;

import { Route, Routes } from "react-router-dom";

import React from 'react'
import HomeFinances from "../pages/HomeFinances";
import { Comparison } from "../pages/Comparison";

const AppRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={<HomeFinances />} />
          <Route path="/comparison" element={<Comparison />} />
      </Routes>
  )
}

export default AppRoutes
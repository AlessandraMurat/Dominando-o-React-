import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanetsScreen from "../screens/planets";
import PlanetScreen from "../screens/planet";
import NotFound from "../screens/notFound";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PlanetsScreen />} />
      <Route path="/planet/:id" element={<PlanetScreen />} />

      <Route path="*" element={<NotFound />} />
     
      
    </Routes>
  </BrowserRouter>
);

export default Router;

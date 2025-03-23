import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Ability from "./pages/Ability";
import Species from "./pages/Species";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/abilities"
        element={
          <MainLayout>
            <Ability />
          </MainLayout>
        }
      />
      <Route
        path="/species"
        element={
          <MainLayout>
            <Species />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

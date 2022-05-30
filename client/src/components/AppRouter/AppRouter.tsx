import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProductList from "../../pages/ProductList";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/articles" element={<ProductList />} />
      <Route path="/articles/:page" element={<ProductList />} />

      <Route path="*" element={<Navigate to="/articles" />} />
    </Routes>
  );
};
export default AppRouter;

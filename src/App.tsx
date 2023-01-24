import React from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "./App.scss";

const Cart = React.lazy(
  () => import(/*webpackChunkName: "Cart"*/ "./pages/Cart")
);
const ProductInfo = React.lazy(
  () => import(/*webpackChunkName: "ProductInfo"*/ "./pages/ProductInfo")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route
          path="Cart"
          element={
            <React.Suspense fallback={<div>Загрузка корзины...</div>}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route
          path="Product/:id"
          element={
            <React.Suspense fallback={<div>Загрузка товара...</div>}>
              <ProductInfo />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;

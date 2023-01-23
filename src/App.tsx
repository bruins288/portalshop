import { Route, Routes } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import ProductInfo from "./pages/ProductInfo";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Product/:id" element={<ProductInfo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;

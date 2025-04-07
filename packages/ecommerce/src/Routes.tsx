import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
const Products = React.lazy(
  () => import("./components/Pages/Products/Products")
);
const Cart = React.lazy(() => import("cart/App"));
const Profile = React.lazy(() => import("profile/App"));
const Orders = React.lazy(() => import("orders/App"));

function Error404() {
  return <div>Page not found</div>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="shopping/:name" element={<Products />} />
      <Route path="cart/*" element={<Cart />} />
      <Route path="profile/*" element={<Profile />} />
      <Route path="orders/*" element={<Orders />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default AppRoutes;

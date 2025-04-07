import { Routes, Route } from "react-router-dom";
import CartItems from "./components/Pages/CartItems/CartItems";
import Checkout from "./components/Pages/Checkout/Checkout";

function Error404() {
  return <div>Page not found</div>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CartItems />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default AppRoutes;

import { Routes, Route } from "react-router-dom";
import Orders from "./components/Pages/Orders/Orders";
import Payment from "./components/Pages/Payment/Payment";

function Error404() {
  return <div>Page not found</div>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Orders />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default AppRoutes;

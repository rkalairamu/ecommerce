import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";

function Error404() {
  return <div>Page not found</div>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default AppRoutes;

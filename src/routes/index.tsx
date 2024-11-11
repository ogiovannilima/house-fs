import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cookies } from "../pages/Cookies";
import { Privacy } from "../pages/Privacy";
import { Terms } from "../pages/Terms";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}

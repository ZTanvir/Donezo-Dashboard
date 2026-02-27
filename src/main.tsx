import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router";
import UserContextLayout from "./layouts/UserContextLayout";
import ProtectedUserRoute from "./lib/ProtectedUserRoute";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<UserContextLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route element={<ProtectedUserRoute />}>
            <Route path="/dashboard" element={<div>Dashboard</div>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

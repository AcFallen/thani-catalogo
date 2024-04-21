import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

import "aos/dist/aos.css";
import React from "react";

import { UserProvider } from "../context/UserContext";
import  PrivateRouter  from "./PrivateRouter";

const Router = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRouter />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default Router;

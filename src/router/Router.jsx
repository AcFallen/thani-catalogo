import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";


import "aos/dist/aos.css";
import React from 'react';

const Router = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;

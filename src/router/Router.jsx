import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Login from "../pages/Login";


import "aos/dist/aos.css";
import React from 'react';

const Router = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;

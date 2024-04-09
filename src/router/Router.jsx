import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";

import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react';

const Router = () => {



  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;

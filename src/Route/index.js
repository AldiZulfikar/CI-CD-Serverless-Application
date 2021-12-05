import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import ProductAdmin from "../pages/Admin";
import Regis from "../pages/Regis";

const Router = () => {
  let [status, setStatus] = useState(false);
  return (
    <>
      <Nav status={status} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/admin" element={<ProductAdmin />}></Route>
        <Route
          path="/login"
          element={<Login setStatus={setStatus} status={status} />}
        ></Route>
        <Route path="/regis" element={<Regis />}></Route>
      </Routes>
    </>
  );
};

export default Router;

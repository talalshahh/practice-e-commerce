import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../components/Dashboard";
import { DashProducts } from "../pages/DashProducts";
import { Cart } from "../pages/Cart";

export const RoutesLayout = () => {
  const { user, isLoggedIn, isCheckingAuth } = useAuth();

  return (
    <>
      {!user && !isLoggedIn && !isCheckingAuth && (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path='/' element={<Login/>}/> */}
        </Routes>
      )}
      {user && isLoggedIn && !isCheckingAuth && (
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/" element={<DashProducts />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      )}
    </>
  );
};

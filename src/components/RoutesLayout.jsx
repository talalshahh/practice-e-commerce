import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../components/Dashboard";
import { DashProducts } from "../pages/DashProducts";
import { Cart } from "../pages/Cart";
import { Favourites } from "../pages/Favourites";
import { ProductDetails } from "../pages/ProductDetails";
import StripePayment from "../pages/StripePayment";

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
          <Route path="/" element={<DashProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashproducts" element={<DashProducts />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/stripepayment" element={<StripePayment />} />
        </Routes>
      )}
    </>
  );
};

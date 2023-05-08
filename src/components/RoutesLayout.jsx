import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { DashProducts } from "../pages/DashProducts";
import { Cart } from "../pages/Cart";

import { ProductDetails } from "../pages/ProductDetails";
import StripePayment from "../pages/StripePayment";
import { Box } from "@mui/material";
import { Favourites } from "../pages/Favourites";
import { SideMenu } from "./SideMenuOnFocus";

export const RoutesLayout = () => {
  const { user, isLoggedIn, isCheckingAuth } = useAuth();

  return (
    <>
      {!user && !isLoggedIn && !isCheckingAuth && (
        <Routes>
          <Route path="/" element={<DashProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
      {user && isLoggedIn && !isCheckingAuth && (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              // marginTop: "3ch",
              gap: "2ch",
              width: "80%",
            }}
          >
            <Routes>
              <Route path="/" element={<DashProducts />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/dashproducts" element={<DashProducts />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/product-details/:id" element={<ProductDetails />} />
              <Route path="/stripepayment" element={<StripePayment />} />
            </Routes>
          </Box>
        </Box>
      )}
    </>
  );
};

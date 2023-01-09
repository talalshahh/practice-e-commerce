import React from "react";
import { Box } from "@mui/material";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "white" }}>
      <Header />

      <Box sx={{ minHeight: "100vh" }}> {children}</Box>

      <Footer />
    </Box>
  );
};
export default Layout;

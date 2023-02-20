import React, { useState } from "react";
import { Box } from "@mui/system";
import { Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [focusItem, setFocusItem] = useState("Products");
  const menu = [
    {
      name: "Products",
      path: "/dashProducts",
    },
    {
      name: "Favourites",
      path: "/favourites",
    },
    {
      name: "Cart",
      path: "/cart",
    },
    {
      name: "Orders",
      path: "",
    },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "#BF0A30",
          width: "15%",
          alignItems: "center",
          height: "100vh",
          margin: "0",
          padding: "0",
          border: "1px solid black",
        }}
      >
        {menu.map((item, idx) => (
          <Typography
            sx={{
              color: "white",
              fontSize: "25px",
              marginTop: "20px",
              fontWeight: "2ch",
              width: "100%",
              textAlign: "center",
              "&: hover": {
                color: "#BF0A30",
                backgroundColor: "white",
                borderRadius: "0.2rem",
              },
              color: focusItem && "#BF0A30",
              backgroundColor: focusItem && "white",
            }}
            key={idx}
            onClick={() => {
              setFocusItem(item.name);
              navigate(item.path);
            }}
          >
            {item.name}
          </Typography>
        ))}
      </Box>
    </>
  );
};

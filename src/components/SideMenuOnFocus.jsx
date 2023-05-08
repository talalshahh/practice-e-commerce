import React, { useState } from "react";
import { Box } from "@mui/system";
import { Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const SideMenu = () => {
  const navigate = useNavigate();
  const [focusItem, setFocusItem] = useState("Products");
  const [activeIndex, setActiveIndex] = useState(0); // set the initial active index to the first menu item

  const handleMenuItemClick = (index) => {
    setActiveIndex(index);
  };

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
  const getMenuStyle = (index) => {
    if (index === activeIndex) {
      return { backgroundColor: "white", color: "red" }; // set the background color to the bgColor property of the active menu item
    } else {
      return {}; // return an empty object for the inactive menu items
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "#BF0A30",
          width: "15%",
          alignItems: "center",
          height: "150vh",
          margin: "0",
          padding: "0",
          border: "1px solid black",
        }}
      >
        {menu.map((item, index) => (
          <Typography
            sx={{
              color: "white",
              fontSize: "25px",
              marginTop: "20px",
              fontWeight: "2ch",
              width: "100%",
              textAlign: "center",
              // "&: hover": {
              //   color: "#BF0A30",
              //   borderRadius: "0.2rem",
              // },
            }}
            style={getMenuStyle(index)}
            key={index}
            onClick={() => {
              setFocusItem(item.name);
              navigate(item.path);
              handleMenuItemClick(index);
            }}
          >
            {item.name}
          </Typography>
        ))}
      </Box>
    </>
  );
};

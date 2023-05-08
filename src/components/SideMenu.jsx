import React, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { BiMenu } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Menu } from "@mui/material";

export default function SideMenu() {
  const navigate = useNavigate();
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

  const [state, setState] = useState({
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        height: "70%",
        // position: "fixed",
        width: "225px",

        paddingTop: "50 px",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Button sx={{ color: "black" }}>X</Button>
      <List sx={{ paddingTop: "60px" }}>
        {menu.map((text, index) => (
          <Typography
            sx={{
              background: "transparent none repeat scroll 0 0",
              color: "#666",
              fontSize: "14px",
              fontWeight: "700",
              lineHeight: " 45px",
              padding: " 0 0 0 70px",
              position: "relative",
              textTransform: "uppercase",
              zIndex: "1",
              "&:hover": {
                backgroundColor: "red",
                color: "white",
                transition: " all .5s ease 0s;",
              },
            }}
            onClick={() => {
              navigate(text.path);
            }}
            key={index}
          >
            {text.name}
          </Typography>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <Fragment>
          <BiMenu
            onClick={toggleDrawer(anchor, true)}
            size={40}
            color="black"
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
          />

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}

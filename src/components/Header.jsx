import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import SideMenu from "./SideMenu";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { async } from "@firebase/util";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const pages = ["Men", "Women", "Bags", "About Us", "Services"];

export const Header = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, isLoggedIn, isCheckingAuth, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        "& .MuiContainer-root": {
          backgroundColor: "white",
        },
      }}
      position="static"
    >
      <Container maxWidth="x3">
        <Box
          sx={{
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box flexGrow={0.5}>
            <SideMenu />
          </Box>
          <Box flexGrow={0.5}>
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                // mr: 2,
                display: { md: "flex" },
                fontWeight: "bolder",
                letterSpacing: ".2rem",
                color: "red",
                fontSize: { xs: "35px", md: "50px" },
                textDecoration: "none",
                width: "8%",
              }}
            >
              Bata
            </Typography>
          </Box>

          {!user && !isLoggedIn && !isCheckingAuth ? (
            <Button
              variant="contained"
              sx={{
                textAlign: "center",
                backgroundColor: "red",
                color: "white",
                marginTop: "1rem",
                "&:hover": {
                  backgroundColor: "Black",
                  color: "white",
                },
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          ) : (
            <>
              <AiOutlineShoppingCart
                size={25}
                style={{ color: "black", marginRight: "10px" }}
              />
              <Button
                variant="contained"
                onClick={handleLogout}
                sx={{
                  backgroundColor: "red",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "red",
                    border: "1px solid red",
                  },
                }}
              >
                Logout
              </Button>
            </>
          )}
        </Box>
      </Container>
    </AppBar>
  );
};

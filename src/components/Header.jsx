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

import { AiOutlineShoppingCart } from "react-icons/ai";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const pages = ["Men", "Women", "Bags", "About Us", "Services"];

export const Header = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box flexGrow={0.75}>
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: "bolder",
                letterSpacing: ".2rem",
                color: "red",
                fontSize: "50px",
                textDecoration: "none",
                width: "8%",
                marginLeft: "48%",
              }}
            >
              Bata
            </Typography>
          </Box>
          <Button variant="contained" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button variant="contained" onClick={() => navigate("/register")}>
            Register
          </Button>
          <IconButton>
            <AiOutlineShoppingCart
              color="black"
              com
              style={{ fontSize: "20px", marginRight: "10px" }}
            />
          </IconButton>

          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
        <Box
          className="appBarMenu"
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "1vh",
          }}
        >
          <Box>
            {pages.map((page, idx) => (
              <Typography
                key={idx}
                variant="h5"
                component="a"
                href="/"
                sx={{
                  color: "black",
                  marginRight: "6vh",
                  textDecoration: "none",
                }}
              >
                {page}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

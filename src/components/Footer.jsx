import React from "react";
import { Box } from "@mui/system/";
import { Container, Button } from "@mui/material/";
import { FormControl, Typography, TextField } from "@mui/material/";
import { FilledInput, InputAdornment, InputLabel } from "@mui/material/";

export const Footer = () => {
  return (
    <>
      <Box className="footer" sx={{ backgroundColor: "black", padding: "1vh" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ color: "white", marginRight: "2ch" }}
              >
                SignUp For Email Updates
              </Typography>
            </Box>
            <Box>
              <TextField
                // size="120"

                placeholder="Enter Your Email For Updates"
                sx={{
                  backgroundColor: "black",
                  outline: "none",
                  border: "1px solid white",
                  borderRadius: "1ch  ",
                  color: "white",

                  "& .MuiOutlinedInput-root": {
                    height: "40px",
                    width: "20vw",
                    color: "white",
                  },
                  "& .MuiInputBase-input": {
                    "&:: placeholder": {
                      color: "",
                    },
                  },
                }}
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  marginLeft: { xs: "0", md: "5vw" },
                  width: { xs: "", md: "150px" },
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                Join
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ marginTop: "2ch" }}>
        <Container maxWidth="lg">
          <Typography variant="h6" sx={{ color: "grey" }}>
            BATA - PAKISTAN'S FAVORITE FOOTWEAR BRAND
          </Typography>
          <Typography variant="p">
            Since 1942 Bata Pakistan has been rendering its services to its
            valued customers by offering quality products.{" "}
            <a href="">Read More</a>
          </Typography>
        </Container>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1ch",
          background: "red",
        }}
      >
        <Typography sx={{ color: "white", fontSize: "200" }}>
          COPYRIGHT © 2022 BATA PAKISTAN, INC. ALL RIGHTS RESERVED.
        </Typography>
        <Box />
      </Box>
    </>
  );
};

import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Header } from "../components/Header";

export const Payment = () => {
  return (
    <>
      <Box>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1ch",
              }}
            >
              <Box
                sx={{
                  border: "1px solid red",
                  height: "500px",
                  width: "500px",
                  display: "flex",
                  flexDirection: "column",
                  justifyItems: "center",
                }}
              >
                <form action="">
                  <Box sx={{ padding: "4px" }}>
                    <label>Email</label>
                    <input type="text" />
                  </Box>

                  <Box sx={{ padding: "4px" }}>
                    <label>Card Inforamtion</label>
                    <input type="text" />
                    <Box sx={{ display: "flex" }}>
                      <input type="date" placeholder="MM / YY" />
                      <input type="tel" placeholder="CVC" />
                    </Box>
                    <Box sx={{ padding: "4px" }}>
                      <label>Name on Card</label>
                      <input type="text" />
                    </Box>
                    <Box sx={{ padding: "4px" }}>
                      <label>Country</label>
                      <input type="text" placeholder="Country" />
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      sx={{
                        width: "99%",
                        backgroundColor: "red",
                        color: "white",
                        "&:hover": { backgroundColor: "black", color: "white" },
                      }}
                    >
                      Pay{" "}
                    </Button>
                  </Box>
                </form>
              </Box>
            </Box>
            <Box flexGrow={0.5} sx={{ border: "1px solid red" }}>
              <Box sx={{ padding: "0.7rem" }}>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ textAlign: "center", borderBottom: "2px solid red" }}
                  >
                    Cart Totals
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{
                      display: "flex",
                      marginTop: "1rem",
                      justifyContent: "space-between",
                      borderBottom: "1px solid grey",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "25px",
                          fontWeight: "12px",
                          color: "grey",
                        }}
                      >
                        SubTotal
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "25px",
                          fontWeight: "12px",
                        }}
                      >
                        52222
                      </Typography>

                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "20px",
                          fontWeight: "12px",
                        }}
                      >
                        99Rs
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      marginTop: "1rem",
                      justifyContent: "space-between",
                      borderBottom: "1px solid grey",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "25px",
                          fontWeight: "12px",
                          color: "grey",
                        }}
                      >
                        Total
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "25px",
                          fontWeight: "12px",
                        }}
                      ></Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

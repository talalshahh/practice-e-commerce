import React, { useState } from "react";
import { Box, Container } from "@mui/system";
import { Button, Card, CardMedia, Typography } from "@mui/material";

import image from "../assets/images/img.jpeg";
import { getProducts } from "../api/public/products";
import { useEffect } from "react";
import { Counter } from "../components/Counter";
import { Dashboard } from "../components/Dashboard";
import { getCartProducts } from "../api/private/cart";
import { useAuth } from "../context/auth.context";
import { UpdateCounter } from "../components/UpdateCounter";
import { Navigate, useNavigate } from "react-router-dom";

export const Cart = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [data, setdata] = useState(null);
  // console.log("working");
  console.log(data, "daat");
  const getCartProductData = async () => {
    const response = await getCartProducts(user.uid);
    if (response && response.status === 200) {
      setdata(response.data);
    } else {
      console.log("products are not fectched suceesfully ");
    }
  };
  useEffect(() => {
    getCartProductData();
  }, []);

  return (
    <>
      <Box
        sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}
      >
        <Dashboard />
        <Container maxWidth="xl">
          {/* <Typography
            variant="h2"
            sx={{ textAlign: "center", marginTop: "1rem" }}
          >
            Cart
          </Typography> */}
          <Box sx={{ display: "flex", marginTop: "2rem" }}>
            <Box flexGrow={0.7}>
              {data &&
                data?.products?.map((content, idx) => (
                  <Box sx={{ display: "flex" }} key={idx}>
                    <Box
                      sx={{
                        width: "30%",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "black",
                          borderBottom: "2px solid black",
                          fontSize: "25px",
                          fontWeight: "12px",
                        }}
                      >
                        Product
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          marginTop: "1rem",
                        }}
                      >
                        <Box
                          component="img"
                          src={content.image}
                          sx={{ height: "95px", width: "90px", grid: "20px" }}
                        ></Box>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "20px",
                              wordWrap: "break-word",
                              marginLeft: "5px",
                              fontWeight: "20px",
                              fontFamily: "revert",
                            }}
                          >
                            {content.name}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: "25%",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "black",
                          borderBottom: "2px solid black",
                          fontSize: "25px",
                          fontWeight: "12px",
                          textAlign: "center",
                        }}
                      >
                        Price
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          marginTop: "1rem",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            padding: "0",
                            margin: "0",
                            fontSize: "15px",
                            wordWrap: "break-word",
                            marginLeft: "5px",
                          }}
                        >
                          {content.unitPrice}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: "15%",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "black",
                          borderBottom: "2px solid black",
                          fontSize: "25px",
                          fontWeight: "12px",
                        }}
                      >
                        Quantity
                      </Typography>
                      <UpdateCounter
                        cartId={data._id}
                        product={content}
                        totalPrice={data?.totalPrice}
                        totalItems={data?.totalItems}
                        getUpdatedProduct={getCartProductData}
                      />
                    </Box>
                    <Box
                      sx={{
                        maxWidth: "20%",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "black",
                          borderBottom: "2px solid black",
                          fontSize: "25px",
                          fontWeight: "12px",
                        }}
                      >
                        Subtotal
                      </Typography>
                      <Box sx={{ display: "flex", marginTop: "1rem" }}>
                        <Typography
                          sx={{
                            padding: "0",
                            margin: "0",
                            fontSize: "15px",
                            wordWrap: "break-word",
                            marginLeft: "5px",
                          }}
                        >
                          {content.unitPrice * content.quantity}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
            </Box>
            <Box flexGrow={0.3}>
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
                      {data?.totalPrice}
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
                    >
                      {data?.totalPrice + 99}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Button
                variant="text"
                onClick={() =>
                  navigate("/stripepayment", { state: data.totalPrice + 99 })
                }
                sx={{
                  width: "100%",
                  height: "50px",
                  marginTop: "1rem",
                  backgroundColor: "red",
                  color: "white",
                  fontWeight: "20px",

                  "&:hover": { backgroundColor: "grey", color: "white" },
                }}
              >
                CheckOut
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

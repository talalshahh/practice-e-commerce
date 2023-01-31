import React, { useState } from "react";
import { Box, Container } from "@mui/system";
import { Button, Card, CardMedia, Typography } from "@mui/material";

import image from "../assets/images/img.jpeg";
import { getProducts } from "../api/public/products";
import { useEffect } from "react";

export const Cart = () => {
  const [data, setdata] = useState(null);
  const [counter, setCounter] = useState(1);
  const handleClickP = () => {
    setCounter(counter + 1);
  };
  const handleClickN = () => {
    setCounter(counter - 1);
  };

  const getProductData = async () => {
    const response = await getProducts();
    if (response && response.status === 200) {
      setdata(response.data);
    } else {
      console.log("products are not fectched suceesfully ");
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flexGrow: "0.50" }}>
          {data &&
            data.map((content, idx) => (
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
                          marginLeft: "20px",
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
                      {content.price}
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
                  <Box sx={{ display: "flex", marginTop: "1rem" }}>
                    <Button onClick={handleClickN}>-</Button>
                    <Typography>{counter}</Typography>
                    <Button onClick={handleClickP}>+</Button>
                  </Box>
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
                    ></Typography>
                  </Box>
                </Box>
              </Box>
            ))}
        </Box>
        <Box>
          <Typography>hfjfkjfkjfkjfkj</Typography>
        </Box>
      </Box>
    </Container>
  );
};

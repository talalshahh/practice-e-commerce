import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { getProducts } from "../api/public/products";
import { Link } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";

export const DashProducts = () => {
  const [data, setData] = useState([]);

  const getProductData = async () => {
    const response = await getProducts();

    if (response && response.status === 200) {
      setData(response.data);
    } else {
      console.log("Product not fetched successfully");
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <Box
      sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}
    >
      <Dashboard />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "3ch",
          gap: "2ch",
          width: "80%",
        }}
      >
        {data &&
          data.map((content, idx) => (
            <Link>
              <Box
                key={idx}
                className="card"
                sx={{ Width: "100%", position: "relative" }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    image={content.image}
                    alt="Paella dish"
                    sx={{
                      height: "320px",
                      width: "250px",
                    }}
                  />
                </Card>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  $ {content.price}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", color: "white" }}
                >
                  {content.name}
                </Typography>
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    background: "rgba(37, 37, 37, 0.9)",
                    width: "100%",
                    height: "84%",
                    top: "0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "black",
                      border: "1px solid #999999",
                      color: "#f9fafa",
                      padding: "12px 35px",
                      fontSize: "15px",
                      zIndex: "3",
                      transition: "opacity 0.4s",
                    }}
                    size="large"
                  >
                    View More
                  </Button>
                </Box>
              </Box>
            </Link>
          ))}
      </Box>
    </Box>
  );
};

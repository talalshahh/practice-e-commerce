import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { getProducts } from "../api/public/products";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

export const DashProducts = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productCount, setProductCount] = useState(null);

  const getProductData = async () => {
    const response = await getProducts(currentPage);

    if (response && response.status === 200) {
      setData(response?.data?.productData);
      setProductCount(response?.data?.productCount);
    } else {
      console.log(response?.data, "Product not fetched successfully");
    }
  };
  useEffect(() => {
    getProductData();
  }, [currentPage]);
  return (
    <>
      <Box
        sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}
      >
        {/* <Dashboard /> */}

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
              <Link
                to={"/product-details/" + content._id}
                style={{ textDecoration: "none" }}
              >
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
                    sx={{
                      textAlign: "center",
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    {content.name}
                  </Typography>
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      background: "rgba(0,0,0,0.65)",
                      width: "100%",
                      height: "84%",
                      top: "0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "none",
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
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {data.length > 0 && (
          <Pagination
            // className="flex w-full justify-center mb-12 "
            sx={{ display: "flex", width: "100%", justifyContent: "center" }}
            currentPage={currentPage}
            totalCount={productCount}
            pageSize={10}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </Box>
    </>
  );
};

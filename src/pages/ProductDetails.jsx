import React, { useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import img1 from "../assets/images/img.jpeg";
import { Counter } from "../components/Counter";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../api/public/products";
import { toast } from "react-toastify";
import { useAuth } from "../context/auth.context";

import { cartCreationAndUpdate } from "../api/private/cart";

export const ProductDetails = () => {
  const data = useParams();
  const { user } = useAuth();
  const [productData, setProductData] = useState(null);
  const [totalItems, setTotalItems] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  console.log(data, "daat");
  console.log(user, "user");

  const getProductData = async () => {
    const response = await getSingleProduct(data.id);

    if (response && response.status === 200) {
      setProductData(response.data);
    } else {
      toast.error("Failed To Fetch Product");
    }
  };

  const handleCartCreation = async () => {
    const cartTotal = totalItems * productData?.price;
    const cartData = {
      userId: user.uid,
      products: [
        {
          productId: productData._id,
          name: productData.name,
          image: productData.image,
          unitPrice: productData.price,
          quantity: totalItems,
        },
      ],
      totalItems,
      totalPrice: cartTotal,
    };
    const response = await cartCreationAndUpdate(cartData);
    if (response && response.status == 200) {
      toast.success("Product is added in cart");
    }
  };
  useEffect(() => {
    getProductData();
  }, []);
  console.log("product", productData);
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              // alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <Box sx={{ flexBasis: "50%" }}>
              <Box
                component="img"
                src={productData?.image}
                sx={{ height: "500px", maxWidth: "35vw" }}
              ></Box>
            </Box>
            <Box
              sx={{
                flexBasis: "50%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: "grey",
                  fontSize: "20px",
                  fontWeight: "12px",
                  textAlign: "center",
                }}
              >
                Category
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  // borderBottom: "2px solid black",
                  fontSize: "25px",
                  fontWeight: "12px",
                }}
              >
                {productData?.name}
              </Typography>

              <Box>
                <Typography
                  sx={{
                    color: "red",
                    // borderBottom: "2px solid black",
                    fontSize: "25px",
                    fontWeight: "12px",
                    textAlign: "center",
                  }}
                >
                  {productData?.price}
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Counter
                  sx={{ padding: "0", margin: "0" }}
                  setTotalItems={setTotalItems}
                />
                <Button
                  sx={{
                    backgroundColor: "red",
                    color: "white",
                    marginLeft: "1rem",
                    width: "200px",
                  }}
                  onClick={handleCartCreation}
                >
                  Add To cart
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

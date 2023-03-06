import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { updateCartCounter } from "../api/private/cart";

export const UpdateCounter = ({
  product,
  cartId,
  totalItems,
  totalPrice,
  getUpdatedProduct,
}) => {
  const [counter, setCounter] = useState(product.quantity);
  const valueUpdate = async (quantity, type) => {
    let newTotalItems;
    let newTotalPrice;
    let productQuantity;

    if (type === "add") {
      productQuantity = quantity + product.quantity;
      newTotalItems = totalItems + productQuantity;
      newTotalPrice = totalPrice + productQuantity * product.unitPrice;
    } else if (type === "subtract") {
      if (quantity > product.quantity) {
        productQuantity = quantity - product.quantity;
        newTotalItems = totalItems - productQuantity;
        newTotalPrice = totalPrice - productQuantity * product.unitPrice;
      } else if (product.quantity > quantity) {
        productQuantity = product.quantity - quantity;
        newTotalItems = totalItems - productQuantity;
        newTotalPrice = totalPrice - productQuantity * product.unitPrice;
      }
    } else if (!type && quantity === 1) {
      return;
    }
    const response = await updateCartCounter(cartId, {
      quantity,
      productId: product.productId,
      totalItems: newTotalItems,
      totalPrice: newTotalPrice,
    });
    if (response.status == 200) {
      getUpdatedProduct();
    } else {
      console.log(" Cart products are not updated  sucessfully");
    }
  };
  useEffect(() => {
    setCounter(product.quantity);
  }, [product.quantity]);

  const handleClickP = () => {
    setCounter(counter + 1);
    valueUpdate(counter + 1, "add");
  };
  const handleClickN = () => {
    if (counter <= 1) {
      setCounter(1);
      valueUpdate(1);
    } else {
      setCounter(counter - 1);
      valueUpdate(counter - 1, "subtract");
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Button
        variant="contained"
        onClick={handleClickN}
        sx={{
          backgroundColor: "grey",
          minWidth: "20px",
          "&:hover": { background: "grey" },
        }}
      >
        -
      </Button>
      <Typography sx={{ margin: "5px" }}>{counter}</Typography>
      <Button
        onClick={handleClickP}
        variant="contained"
        sx={{
          backgroundColor: "grey",
          minWidth: "20px",
          "&:hover": { background: "grey" },
        }}
      >
        +
      </Button>
    </Box>
  );
};

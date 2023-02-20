import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

export const Counter = ({ setTotalItems }) => {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    setTotalItems(counter);
  }, []);

  const handleClickP = () => {
    setCounter(counter + 1);
    setTotalItems(counter + 1);
  };
  const handleClickN = () => {
    if (counter <= 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
      setTotalItems(counter - 1);
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

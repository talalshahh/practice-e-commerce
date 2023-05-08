import React from "react";
import { Container, Box } from "@mui/system";
import { Button, FormControl, Typography } from "@mui/material";
import { useFormik } from "formik";

import { initialValues, schema } from "../helpers";
import { useAuth } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { signInwithEmail } = useAuth();
  const formik = useFormik({
    initialValues: initialValues[1],
    validationSchema: schema[1],
    onSubmit: (values) => {
      handleSubmit(values);
      signInwithEmail(values.email, values.password);
    },
  });
  const handleSubmit = (values) => {
    console.log(values, "values");

    //first api call then empty values
    formik.setFieldValue("email", "");
    formik.setTouched("email", false);
    formik.setFieldValue("password", "");
    formik.setTouched("password", false);
  };
  return (
    <>
      <Box>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                  }}
                  variant="h4"
                >
                  Login Here
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "2rem",
                }}
              >
                <Box
                  sx={{
                    width: "450px",
                    border: "1px solid black",
                    borderRadius: "1rem",
                    padding: "20px",
                    height: "400px",
                    backgroundColor: "#f2f2f2",
                    boxShadow: " 0px 0px 5px 0px #ddd",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "red",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Bata
                  </Typography>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="login-form">
                      <label for="lname">Email</label>

                      <input
                        type="email"
                        name="email"
                        placeholder="Enter yor Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <p
                          style={{
                            padding: "0",
                            margin: "5px",
                            color: "red",
                            fontSize: "13px",
                          }}
                        >
                          {formik.errors.email}
                        </p>
                      )}
                    </div>
                    <div className="login-form">
                      <label for="c">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder="Enter your password"
                      />
                      {formik.touched.password && formik.errors.password && (
                        <p
                          style={{
                            padding: "0",
                            margin: "5px",
                            color: "red",
                            fontSize: "13px",
                          }}
                        >
                          {formik.errors.password}
                        </p>
                      )}
                    </div>
                    <Box
                      sx={{
                        display: "center",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        sx={{
                          textAlign: "center",
                          backgroundColor: "red",
                          color: "white",
                          marginTop: "1rem",
                          "&:hover": {
                            backgroundColor: "red",
                            color: "white",
                          },
                        }}
                        type="submit"
                      >
                        Login
                      </Button>
                    </Box>
                  </form>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "20px",
                    }}
                  >
                    <Button
                      sx={{
                        width: "70%",
                        textAlign: "center",
                        backgroundColor: "red",
                        color: "white",
                        marginTop: "1rem",
                        "&:hover": {
                          backgroundColor: "Black",
                          color: "white",
                        },
                      }}
                      onClick={() => navigate("/register")}
                    >
                      Register
                    </Button>
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

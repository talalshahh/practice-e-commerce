import React from "react";
import { Container, Box } from "@mui/system";
import { Button, FormControl, Typography } from "@mui/material";
import { useFormik } from "formik";
import { initialValues, schema } from "../helpers";
import { useAuth } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { signUpwithEmail } = useAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initialValues[0],
    validationSchema: schema[0],
    onSubmit: () => {
      signUpwithEmail({
        email: formik.values.email,
        password: formik.values.password,
        navigate,
      });
    },
  });

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
                  Register Here
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
                    height: "auto",
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
                    <label for="fname"> Name</label>

                    <input
                      type="text"
                      onChange={formik.handleChange}
                      name="name"
                      placeholder="Your name"
                    />
                    {formik.touched.name && formik.errors.name && (
                      <p
                        style={{
                          padding: "0",
                          margin: "5px",
                          color: "red",
                          fontSize: "13px",
                        }}
                      >
                        {formik.errors.name}
                      </p>
                    )}
                    <label for="lname">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter yor Email"
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

                    <label for="c">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      onChange={formik.handleChange}
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

                    <label for="country">Re-Enter Password</label>
                    <input
                      type="password"
                      name="reenterPassword"
                      placeholder="Re-Enter Password"
                      onChange={formik.handleChange}
                    />
                    {formik.touched.reenterPassword &&
                      formik.errors.reenterPassword && (
                        <p
                          style={{
                            padding: "0",
                            margin: "5px",
                            color: "red",
                            fontSize: "13px",
                          }}
                        >
                          {formik.errors.reenterPassword}
                        </p>
                      )}

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
                          "&:hover": { backgroundColor: "red", color: "white" },
                        }}
                        type="submit"
                      >
                        Register
                      </Button>
                    </Box>
                  </form>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

import React from "react";
import { Container, Box } from "@mui/system";
import { FormControl, Typography } from "@mui/material";
import { useFormik } from "formik";

import { initialValues, schema } from "../helpers";
import { useAuth } from "../context/auth.context";

export const Login = () => {
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
          <Box>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              Login Here
            </Typography>
            <FormControl>
              <Box>
                <form onSubmit={formik.handleSubmit}>
                  <label for="lname">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter yor Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p>{formik.errors.email}</p>
                  )}

                  <label for="c">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Enter your password"
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p>{formik.errors.password}</p>
                  )}

                  <input type="submit" value="Submit" />
                </form>
              </Box>
            </FormControl>
          </Box>
        </Container>
      </Box>
    </>
  );
};

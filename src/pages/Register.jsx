import React from 'react';
import { Container, Box } from '@mui/system';
import { FormControl, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { initialValues, schema } from '../helpers';
import { useAuth } from '../context/auth.context';
import { useNavigate } from 'react-router-dom';

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
        <Container maxWidth='lg'>
          <Box>
            <Typography variant='h3' sx={{ textAlign: 'center' }}>
              Register Here
            </Typography>
            <FormControl>
              <Box>
                <form onSubmit={formik.handleSubmit}>
                  <label for='fname'> Name</label>

                  <input
                    type='text'
                    onChange={formik.handleChange}
                    name='name'
                    placeholder='Your name'
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p>{formik.errors.name}</p>
                  )}
                  <label for='lname'>Email</label>
                  <input
                    type='email'
                    name='email'
                    placeholder='Enter yor Email'
                    onChange={formik.handleChange}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p>{formik.errors.email}</p>
                  )}

                  <label for='c'>Password</label>
                  <input
                    type='password'
                    name='password'
                    placeholder='Enter your password'
                    onChange={formik.handleChange}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p>{formik.errors.password}</p>
                  )}

                  <label for='country'>Re-Enter Password</label>
                  <input
                    type='password'
                    name='reenterPassword'
                    placeholder='Re-Enter Password'
                    onChange={formik.handleChange}
                  />
                  {formik.touched.reenterPassword &&
                    formik.errors.reenterPassword && (
                      <p>{formik.errors.reenterPassword}</p>
                    )}

                  <input type='submit' value='Submit' />
                </form>
              </Box>
            </FormControl>
          </Box>
        </Container>
      </Box>
    </>
  );
};

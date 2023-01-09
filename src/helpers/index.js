import * as Yup from "yup";

export const initialValues = [
  {
    name: "",
    email: "",
    password: "",
    reenterPassword: "",
  },
  {
    email: "",
    password: "",
  },
];

export const schema = [
  Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Enter valid email")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Minimum 8 characters"),
    reenterPassword: Yup.string()
      .required("Reenter Password is required")
      .min(8, "Minimum 8 characters")
      .oneOf([Yup.ref("password"), null], "Passwords don't match"),
  }),
  Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  }),
];

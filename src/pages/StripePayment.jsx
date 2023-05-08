import React from "react";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { payment } from "../api/private/payment";
import { loadStripe } from "@stripe/stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      const response = await payment(id);
      console.log(response);
      if (response && response.status === 200) {
        console.log("Payment was successful");
      } else {
        console.log("Payment Failed");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Pay</button>
    </form>
  );
};

const stripePromise = loadStripe(
  "pk_test_51MgoGPBEmKccR1EIHKhoCWDvV3dy9fbLG5bOvOI4wik3N4KeguPaWXAxsGSTe46Dsgz048V7R0rXTWNDb9Sm881I00MaLvamoy"
);
const StripePayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripePayment;

import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPaymentIntent } from "../api/private/payment";

export const StripePayment = () => {
  const location = useLocation();
  const [clientSecret, setClientSecret] = useState("");
  const stripePromise = loadStripe(
    "pk_test_51MgoGPBEmKccR1EIHKhoCWDvV3dy9fbLG5bOvOI4wik3N4KeguPaWXAxsGSTe46Dsgz048V7R0rXTWNDb9Sm881I00MaLvamoy"
  );
  useEffect(() => {
    fetchPaymentIntent();
  }, []);
  const fetchPaymentIntent = async () => {
    const response = await getPaymentIntent();
    if (response && response.status === 200) {
      setClientSecret(response.data.client_secret);
    } else {
      console.log(response.data, "err");
    }
  };
  const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <form>
        <PaymentElement />
        <button>Submit</button>
      </form>
    </Elements>
  );
};

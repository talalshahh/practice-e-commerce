import { async } from "@firebase/util";
import { json } from "react-router-dom";
import api from "../privateConfig";

const endpoint = "/payment";

export const getPaymentIntent = async () => {
  try {
    let url = endpoint + "/secret";
    let response = await api.get(url);
    return response;
  } catch (error) {
    console.log(error, "err");
  }
};

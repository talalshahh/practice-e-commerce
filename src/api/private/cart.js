import { async } from "@firebase/util";
import api from "../privateConfig";

const endpoint = "/cart";

export const getCartProducts = async (id) => {
  try {
    let url = endpoint + "/" + id;
    let response = await api.get(url);
    return response;
  } catch (error) {
    console.log(error, "err");
  }
};

export const cartCreationAndUpdate = async (cartData) => {
  try {
    const url = endpoint + "/";
    let response = await api.post(url, JSON.stringify({ cartData }));
    return response;
  } catch (error) {
    console.log(error, "err");
  }
};

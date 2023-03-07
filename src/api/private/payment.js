import api from "../privateConfig";

const endpoint = "/payment";

export const payment = async (id) => {
  try {
    const url = endpoint + "/";
    const { data } = await api.post(url, { id, amount: 100 });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

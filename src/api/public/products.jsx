import api from "../publicConfig";

const endpoint = "/products";
export const getProducts = async () => {
  try {
    const url = endpoint + "/";
    const result = await api.get(url);
    return result;
  } catch (error) {
    return error.response;
  }
};

export const getSingleProduct = async (id) => {
  try {
    const url = endpoint + "/" + id;
    const result = await api.get(url);
    return result;
  } catch (error) {
    return error.response;
  }
};
export const updateProducts = async (productData, id) => {
  try {
    const url = endpoint + "/" + id;
    const result = await api.put(url, JSON.stringify({ productData }));
    return result;
  } catch (error) {
    return error.response;
  }
};
export const deleteProduct = async (id) => {
  try {
    const url = endpoint + "/" + id;
    const result = await api.delete(url);
    return result;
  } catch (error) {
    return error.response;
  }
};
export const addProduct = async (productData) => {
  try {
    const url = endpoint + "/add";
    const result = await api.post(url, JSON.stringify({ productData }));
    console.log(result, "result");
    return result;
  } catch (error) {
    return error.response;
  }
};

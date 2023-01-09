import api from "../privateConfig";

const endpoint = "/user";

export const profileCreationORLoadUrl = async () => {
  try {
    let url = endpoint + "/handleProfile";
    let response = await api.post(url);
    return response;
  } catch (error) {
    console.log(error, "err");
  }
};

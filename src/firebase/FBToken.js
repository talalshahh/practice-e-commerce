import firebase from "./config";
import { getAuth, getIdToken } from "firebase/auth";

const auth = getAuth(firebase);

export const getFBToken = async () => {
  try {
    const token = await getIdToken(auth.currentUser);
    return token;
  } catch (err) {
    return null;
  }
};

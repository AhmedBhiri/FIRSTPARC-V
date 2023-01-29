import { LOGIN, LOGOUT } from "../constants/authConstants";

export const logIn = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};

export const logOut = () => {
  return {
    type: LOGOUT,
  };
};

import {
  ADD_USER,
  DELETE_USER,
  MODIFY_USER,
} from "../constants/usersConstants";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addUser = (payload) => {
  return {
    type: ADD_USER,
    payload,
  };
};

export const modifyUser = (payload) => {
  return {
    type: MODIFY_USER,
    payload,
  };
};

export const deleteUser = (payload) => (dispatch) => {
  dispatch({
    type: DELETE_USER,
    payload,
  });

  toast.success("User supprimé avec succées");
};

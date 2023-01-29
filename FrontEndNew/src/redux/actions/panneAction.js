import {
  ADD_PANNE,
  DELETE_PANNE,
  MODIFY_PANNE,
} from "../constants/pannesConstants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addPanne = (payload) => {
  return {
    type: ADD_PANNE,
    payload,
  };
};

export const modifyPanne = (payload) => {
  return {
    type: MODIFY_PANNE,
    payload,
  };
};

export const deletePanne = (payload) => (dispatch) => {
  dispatch({
    type: DELETE_PANNE,
    payload,
  });

  toast.success("Panne supprimé avec succées");
};

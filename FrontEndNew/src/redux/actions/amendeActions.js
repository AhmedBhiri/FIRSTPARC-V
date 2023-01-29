import { ADD_AMENDE, DELETE_AMENDE, MODIFY_AMENDE } from "../constants/amendesConstants";

export const addAmende = (payload) => {
  return {
    type: ADD_AMENDE,
    payload,
  };
};

export const modifyAmende = (payload) => {
  return {
    type: MODIFY_AMENDE,
    payload,
  };
};

export const deleteAmende = (payload) => {
  return {
    type: DELETE_AMENDE,
    payload,
  };
};

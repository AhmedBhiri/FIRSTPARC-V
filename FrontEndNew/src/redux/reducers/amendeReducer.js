import {
  ADD_AMENDE,
  DELETE_AMENDE,
  MODIFY_AMENDE,
} from "../constants/amendesConstants";

import data from "./amendeData";

const INITIAL_STATE = [...data];

const amendes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_AMENDE:
      return [...state, action.payload];

    case MODIFY_AMENDE:
      const index = state.findIndex(
        (amende) => amende.id === action.payload.id
      );
      state[index] = action.payload.status;
      return [...state];

    case DELETE_AMENDE:
      const newAmende = state.filter(
        (amende) => amende.id !== action.payload[0]
      );

      return newAmende;

    default:
      return state;
  }
};

export default amendes;

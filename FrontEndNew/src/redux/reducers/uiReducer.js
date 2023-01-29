import { TOGGLE_SIDEBAR } from "../constants/uiConstants";

const INITIAL_STATE = {
  sideBarIsOpen: false,
};

const ui = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      console.log(action.type);
      return {
        ...state,
        sideBarIsOpen: !state.sideBarIsOpen,
      };

    default:
      return state;
  }
};

export default ui;

import {
  ADD_NOTIFICATION,
  MODIFY_NOTIFICATION,
} from "../constants/notificationsConstants";

const INITIAL_STATE = [];

const notifications = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return [...state, action.payload];

    case MODIFY_NOTIFICATION:
      const index = state.findIndex(
        (notification) => notification.id === action.payload
      );

      state[index].seen = true;
      return [...state];

    default:
      return state;
  }
};

export default notifications;

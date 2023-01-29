import {
  ADD_NOTIFICATION,
  MODIFY_NOTIFICATION,
} from "../constants/notificationsConstants";

export const addNotification = (payload) => {
  return {
    type: ADD_NOTIFICATION,
    payload,
  };
};

export const modifyNotification = (payload) => {
  return {
    type: MODIFY_NOTIFICATION,
    payload,
  };
};

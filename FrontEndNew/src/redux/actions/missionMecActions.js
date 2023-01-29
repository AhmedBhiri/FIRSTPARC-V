import {
  ADD_MISSIONMEC,
  DELETE_MISSIONMEC,
  MODIFY_MISSIONMEC,
} from "../constants/missionsMecConstants";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addMissionMec = (payload) => {
  return {
    type: ADD_MISSIONMEC,
    payload,
  };
};

export const modifyMissionMec = (payload) => {
  return {
    type: MODIFY_MISSIONMEC,
    payload,
  };
};

export const deleteMissionMec = (payload) => (dispatch) => {
  dispatch({
    type: DELETE_MISSIONMEC,
    payload,
  });

  toast.success("Mission supprimée avec succées");
};

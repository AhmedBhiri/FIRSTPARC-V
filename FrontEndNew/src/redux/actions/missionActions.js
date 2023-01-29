import {
  ADD_MISSION,
  DELETE_MISSION,
  MODIFY_MISSION,
} from "../constants/missionsConstants";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const addMission = (payload) => {
  return {
    type: ADD_MISSION,
    payload,
  };
};

export const modifyMission = (payload) => {
  return {
    type: MODIFY_MISSION,
    payload,
  };
};

export const deleteMission = (payload) => (dispatch) => {
  dispatch({
    type: DELETE_MISSION,
    payload,
  });

  toast.success("Mission supprimée avec succées");
};

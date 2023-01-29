import {
  ADD_MISSION,
  DELETE_MISSION,
  MODIFY_MISSION,
  MODIFY_MISSION_STATUS,
} from "../constants/missionsConstants";

import data from "./missionData";

const INITIAL_STATE = [...data];

const missions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return [...state, action.payload];

    case MODIFY_MISSION:
      console.log(action.payload);
      const index = state.findIndex(
        (mission) => mission.id === action.payload.id
      );

      state[index] = action.payload;
      return [...state];

    case MODIFY_MISSION_STATUS:
      const index_status = state.findIndex(
        (mission) => mission.id === action.payload.userID
      );
      state[index_status].status = action.payload.status;
      return [...state];

    case DELETE_MISSION:
      const newMission = state.filter(
        (mission) => mission.id !== action.payload
      );

      return newMission;

    default:
      return state;
  }
};

export default missions;

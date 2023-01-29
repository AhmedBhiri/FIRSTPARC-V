import {
    ADD_MISSIONMEC,
    DELETE_MISSIONMEC,
    MODIFY_MISSIONMEC,
    MODIFY_MISSIONMEC_STATUS,
  } from "../constants/missionsMecConstants";
  
  import data from "./missionMecData";
  
  const INITIAL_STATE = [...data];
  
  const missionsmec = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ADD_MISSIONMEC:
        return [...state, action.payload];
  
      case MODIFY_MISSIONMEC:
        const index = state.findIndex(
          (missionmec) => missionmec.id === action.payload.id
        );
  
        state[index] = action.payload;
        return [...state];
  
      case MODIFY_MISSIONMEC_STATUS:
        const index_status = state.findIndex(
          (missionmec) => missionmec.id === action.payload.userID
        );
        state[index_status].status = action.payload.status;
        return [...state];
  
      case DELETE_MISSIONMEC:
        const newMissionMec = state.filter(
          (missionmec) => missionmec.id !== action.payload
        );
  
        return newMissionMec;
  
      default:
        return state;
    }
  };
  
  export default missionsmec;
  
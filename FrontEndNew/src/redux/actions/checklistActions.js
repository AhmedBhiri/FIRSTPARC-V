import { SUBMIT_CHECKLIST } from "../constants/checklistConstants";

export const submitChecklist = (payload) => {
  return {
    type: SUBMIT_CHECKLIST,
    payload,
  };
};

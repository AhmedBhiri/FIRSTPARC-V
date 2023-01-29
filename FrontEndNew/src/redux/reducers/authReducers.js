import { LOGIN, LOGOUT } from "../constants/authConstants";
import data from "./authData/authData";

const INITIAL_STATE = {
  auth: false,
  user: [],
};

const allUsers = [...data];

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      const { email, password } = action.payload;

      const user = allUsers.find((user) => user.email === email);

      if (!user) {
        console.log("No account found");
        return;
      }

      console.log(user);

      const passwordMatches = password === user.password;

      if (!passwordMatches) {
        console.log("Incorrect password");
        return;
      }

      return {
        auth: true,
        user,
      };

    case LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default auth;

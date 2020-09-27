import { FETCH_USERS } from "../actions/users";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        usersList: action.payload,
      };
    default:
      return state;
  }
};

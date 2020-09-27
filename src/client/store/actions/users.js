import axios from "axios";

export const FETCH_USERS = "fetch_users";
export const fetchUsers = () => {
  return (dispatch) => {
    // let res = await axios.get("http://react-ssr-api.herokuapp.com/users");
    let res = [{ name: "Akansha", id: 1 }];
    dispatch({
      type: FETCH_USERS,
      payload: res,
    });
  };
};

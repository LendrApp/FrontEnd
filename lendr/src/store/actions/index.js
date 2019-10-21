import axiosWithAuth from "../../utils/axiosWithAuth";

//Registration Action

export const REGISTRATION_START = "REGISTRATION_START";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";

export const addUser = user => dispatch => {
  dispatch({ type: REGISTRATION_START });
  axiosWithAuth()
    .post(``, {
      username: user.username,
      password: user.password
    })
    .then(res => {
      console.log(res.data);
      dispatch({ type: REGISTRATION_SUCCESS, payload: res.data });
      return true;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTRATION_FAILURE, payload: err.response });
    });
};

//Login Action

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (username, password) => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post(``, {
      username: username,
      password: password
    })
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      return true;
    })
    .catch(res => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: res.data
      });
    });
};

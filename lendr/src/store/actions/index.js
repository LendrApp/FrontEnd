import axiosWithAuth from "../../utils/axiosWithAuth";

//Registration Action

export const REGISTRATION_START = "REGISTRATION_START";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";

export const addUser = user => dispatch => {
  dispatch({ type: REGISTRATION_START });
  axiosWithAuth()
    .post(`https://lenders-app.herokuapp.com/api/auth/register`, {
      fullName: user.fullName,
      username: user.username,
      password: user.password,
      email: user.email
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
    .post(`https://lenders-app.herokuapp.com/api/auth/login`, {
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

// Items Action
export const ADDING_ITEM = "ADDING_ITEM";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const ADD_ITEM_FAILURE = "ADD_ITEM_FAILURE";

export const addLendItems = lendItems => dispatch => {
  dispatch({ type: ADDING_ITEM });
  return axiosWithAuth()
    .post(``, lendItems)
    .then(res => {
      dispatch({
        type: ADD_ITEM_SUCCESS,
        payload: res.data
      });
    })
    .catch(res =>
      dispatch({
        type: ADD_ITEM_FAILURE,
        payload: res.data
      })
    );
};

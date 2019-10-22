import axiosWithAuth from "../../utils/axiosWithAuth";

//Registration Action

export const REGISTRATION_START = "REGISTRATION_START";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";

export const addUser = user => dispatch => {
  dispatch({ type: REGISTRATION_START });
  axiosWithAuth()
    .post(`api/auth/register`, {
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

export const login = user => dispatch => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post(`api/auth/login`, user)

    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token,
        user: user.username
      });
      // return true;
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

//Edit Action
export const EDIT_START = "EDIT_START";

export const updateItem = id => dispatch => {
  dispatch({ type: EDIT_START });
  axiosWithAuth()
    .put(`Idk yet`)
    .then(res => {
      //   dispatch({ type: FETCH_SUCCESS, payload: res.data });
      // })
      // .catch(err => {
      //   dispatch({ type: FETCH_FAILURE, payload: err.response });
    });
};

export const ITEM_DETAIL_START = "ITEM_DETAIL_START";
export const ITEM_DETAIL_SUCCESS = "ITEM_DETAIL_SUCCESS";

export const itemDetail = id => dispatch => {
  dispatch({ type: ITEM_DETAIL_START });
  axiosWithAuth()
    .get(`IDK YET`)
    .then(res => {
      // console.log(res)
      dispatch({ type: ITEM_DETAIL_SUCCESS, payload: res.data });
    });
};

//Delete Action
export const DELETE_ITEM_START = "DELETE_ITEM_START";
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const DELETE_ITEM_FAILURE = "DELETE_ITEM_FAILURE";

export const deleteItem = id => dispatch => {
  dispatch({ type: DELETE_ITEM_START });
  axiosWithAuth()
    .delete(`/:user_id/posts/:post_id/instructions/:instruction_id`)
    .then(res => {
      console.log(res.data.message);
      dispatch({ type: DELETE_ITEM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_ITEM_FAILURE, payload: err });
    });
};

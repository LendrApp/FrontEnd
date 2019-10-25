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

export const logInUser = user => dispatch => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post(`api/auth/login`, user)
    .then(res => {
      console.log(res);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token,
        //  && res.data.user
        user: res.data.user
      });
    })
    .catch(res =>
      dispatch({
        type: LOGIN_FAILURE,
        payload: res.data
      })
    );
};

// Logout Action
export const LOG_OUT = "LOG_OUT";
export const logOut = () => {
  return { type: LOG_OUT };
};

// Fetching User Action
export const FETCHING_USER = "FETCHING_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCHING_FAILURE = "FETCH_FAILURE";

export const fetchUser = username => dispatch => {
  dispatch({ type: FETCHING_USER });
  axiosWithAuth()
    .get(`/api/auth/users/${username}`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
    })
    .catch(err =>
      dispatch({ type: FETCHING_FAILURE, payload: err.response.data.code })
    );
};

// Fetching items

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchItem = () => dispatch => {
  dispatch({ type: FETCH_START });
  axiosWithAuth()
    .get(`/api/items`)
    .then(res => {
      console.log("fetched items", res);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err.response });
    });
};

// Items Action
export const ADDING_ITEM = "ADDING_ITEM";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const ADD_ITEM_FAILURE = "ADD_ITEM_FAILURE";

export const addLendItems = lendItems => dispatch => {
  console.log(lendItems);
  dispatch({ type: ADDING_ITEM });
  axiosWithAuth()
    .post(`/api/items`, lendItems)
    .then(res => {
      console.log(`ADD ITEMS`, res);
      dispatch({
        type: ADD_ITEM_SUCCESS,
        // payload: res.data
        payload: lendItems
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
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAILURE = "EDIT_FAILURE";

export const updateItem = (updatedItem, id) => dispatch => {
  // let newItem = {
  //   name: updateItem.name,
  //   price: updateItem.price,
  //   description: updateItem.description
  // };
  dispatch({ type: EDIT_START });
  axiosWithAuth()
    .put(`https://lenders-app.herokuapp.com/api/items/${id}`, updatedItem)
    .then(res => {
      dispatch({ type: EDIT_SUCCESS, payload: updatedItem });
    })
    .catch(err => {
      dispatch({ type: EDIT_FAILURE, payload: err.response.data.code });
      console.log(err.message);
    });
};

// export const ITEM_DETAIL_START = "ITEM_DETAIL_START";
// export const ITEM_DETAIL_SUCCESS = "ITEM_DETAIL_SUCCESS";

// export const itemDetail = id => dispatch => {
//   dispatch({ type: ITEM_DETAIL_START });
//   axiosWithAuth()
//     .get(`https://lenders-app.herokuapp.com/api/items/:id`)
//     .then(res => {
//       // console.log(res)
//       dispatch({ type: ITEM_DETAIL_SUCCESS, payload: res.data });
//     });
// };

//Delete Action
export const DELETE_ITEM_START = "DELETE_ITEM_START";
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const DELETE_ITEM_FAILURE = "DELETE_ITEM_FAILURE";

export const deleteItem = id => dispatch => {
  dispatch({ type: DELETE_ITEM_START });
  axiosWithAuth()
    .delete(`https://lenders-app.herokuapp.com/api/items/${id}`)
    .then(res => {
      console.log(res.data.message);
      dispatch({ type: DELETE_ITEM_SUCCESS, payload: id });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_ITEM_FAILURE, payload: err });
    });
};

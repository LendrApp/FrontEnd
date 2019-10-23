import {
  REGISTRATION_START,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ADDING_ITEM,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  LOG_OUT,
  FETCHING_USER,
  FETCH_USER_SUCCESS,
  FETCHING_FAILURE
} from "../actions/index";

// REGISTRATION

export const reducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case REGISTRATION_START:
      return {
        ...state,
        error: "",
        fetchingData: true
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        addUser: action.payload,
        error: "",
        fetchingData: false,
        username: action.payload
      };
    case REGISTRATION_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingData: false
      };
    case LOGIN_START:
      return {
        ...state,
        isLoadingLOGIN: true,
        successLOGIN: false
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload);
      localStorage.setItem("username", action.user);

      return {
        ...state,
        isLoadingLOGIN: false,
        successLOGIN: true,

        // password: action.password,
        token: action.payload,
        username: action.user
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isloadingLOGIN: false,
        successLOGIN: false,
        username: "",
        password: ""
      };
    case ADDING_ITEM:
      return {
        ...state,
        fetchingData: false,
        addItem: true
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        itemData: action.payload,
        fetchingData: false,
        addItem: true,
        error: ""
      };
    case ADD_ITEM_FAILURE:
      return {
        ...state,
        addItem: false,
        error: action.payload
      };

    case LOG_OUT:
      localStorage.clear();
      return {
        ...initialState,
        token: ""
      };
    case FETCHING_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        fetchingData: true,
        fetching_message: "Looking for user...",
        singleItem: ""
      };

    case FETCH_USER_SUCCESS:
      // localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        fetchingData: false,
        fetching_message: "",
        userItems: action.payload,
        error: false
      };
    case FETCHING_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: true
      };

    default:
      return state;
  }
};

const initialState = {
  error: "",
  fetchingData: false,
  fetching_message: "",
  users: [],
  addUser: [],
  isLoadingLOGIN: false,
  successLOGIN: false,
  fullName: localStorage.getItem("fullName"),
  username: localStorage.getItem("username"),
  password: "",
  email: "",
  itemData: [],
  addItem: false,
  data: [],
  token: localStorage.getItem("token"),
  // singleItem: JSON.parse(localStorage.getItem("item")),
  // userItems: JSON.parse(localStorage.getItem("user"))
  singleItem: localStorage.getItem("item"),
  userItems: localStorage.getItem("user")
};

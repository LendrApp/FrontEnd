import {
  REGISTRATION_START,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ADDING_ITEM,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE
} from "../actions/index";

//REGISTRATION

const initialState = {
  error: "",
  fetchingData: false,
  users: [],
  addUser: [],
  isLoadingLOGIN: false,
  successLOGIN: false,
  fullName: "",
  username: "",
  password: "",
  email: "",
  itemData: [],
  addItem: false,
  data: []
};

export const registrationReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

//LOGIN

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoadingLOGIN: true,
        successLOGIN: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoadingLOGIN: false,
        successLOGIN: true,
        username: action.payload,
        password: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isloadingLOGIN: false,
        successLOGIN: false,
        username: "",
        password: ""
      };
    default:
      return state;
  }
};

// ITEMS

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

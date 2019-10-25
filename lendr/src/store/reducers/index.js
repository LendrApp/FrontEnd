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
  FETCHING_FAILURE,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  EDIT_START,
  DELETE_ITEM_START,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  EDIT_SUCCESS,
  EDIT_FAILURE
} from "../actions/index";

// REGISTRATION

export const reducer = (state = initialState, action) => {
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

    // Login

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

    //Adding Item

    case ADDING_ITEM:
      return {
        ...state,
        fetchingData: false,
        addItem: true
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        error: "",
        // itemData: action.payload
        itemData: [...state.itemData, action.payload]
      };
    case ADD_ITEM_FAILURE:
      return {
        ...state,
        addItem: false,
        error: action.payload
      };

    //Logging out

    case LOG_OUT:
      localStorage.clear();
      return {
        ...initialState,
        token: ""
      };

    // FETCH ITEMS
    case FETCH_START:
      return { ...state, fetching: true };
    case FETCH_SUCCESS:
      console.log(`ADDING ITEMS`, FETCH_SUCCESS);
      return { ...state, itemData: action.payload, fetching: false };
    case FETCH_FAILURE:
      return { ...state, error: action.payload, fetching: false };

    // EDIT
    case EDIT_START:
      console.log("HI");
      return {
        ...state,
        fetching: true,
        fetching_message: "Sending to database..."
      };
    case EDIT_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: false,
        itemData: action.payload
      };
    // let newItems = state.itemData.map(item => {
    //   if (item.id === action.payload.id) {
    //     return action.payload;
    //   } else {
    //     return item;
    //   }
    // });
    // let newItemsUpdate = {
    //   ...state.itemData,
    //   fetching: false,
    //   itemData: newItems
    // };
    // localStorage.setItem("user", JSON.stringify(newItemsUpdate));

    case EDIT_FAILURE:
      return { ...state, error: action.payload };

    // DELETE
    case DELETE_ITEM_START:
      return { ...state, deletingItem: true };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        deletingItem: false,
        error: "",
        message: action.payload
      };
    case DELETE_ITEM_FAILURE:
      return { ...state, error: action.payload, fetching: false };

    //Fetching user
    case FETCHING_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        fetchingData: true,
        fetching_message: "Looking for user...",
        singleItem: ""
      };

    case FETCH_USER_SUCCESS:
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
  // singleItem: localStorage.getItem("item"),
  // userItems: localStorage.getItem("user")
  singleItem: "",
  userItems: localStorage.getItem("user"),
  changed: false
};

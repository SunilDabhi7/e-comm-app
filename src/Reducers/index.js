import { combineReducers } from "redux";

import {
  LOAD_PRODUCTS,
  LOGIN,
  LOGOUT,
  SIGNUP,
  ADD_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from "../Actions";

const InitialUsersState = {
  users: [
    {
      name: "Shuniel",
      username: "sb578",
      password: "sunil@578",
      userId: 0,
      cartItems: [],
      totalPrice: null,
    },
  ],
  activeUserId: null,
  isLoggedIn: false,
};

export function shop(state = InitialUsersState, action) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        activeUserId: action.userId,
      };
    case LOGOUT:
      return {
        ...state,
        activeUserId: null,
        isLoggedIn: false,
      };
    case SIGNUP:
      const newData = { ...state.users[0], ...action.userDetails };
      return {
        ...state,
        users: [...state.users, newData],
        isLoggedIn: true,
        activeUserId: action.userDetails.userId,
      };
    case ADD_TO_CART:
      let newUsers = [...state.users];
      let data = newUsers[state.activeUserId].cartItems;
      newUsers[state.activeUserId].cartItems = [...data, action.item];
      return {
        ...state,
        users: newUsers,
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        users: action.newUsers,
      };
    default:
      return state;
  }
}

export default combineReducers({
  shop,
});

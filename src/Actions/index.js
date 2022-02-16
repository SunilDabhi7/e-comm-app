export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";

export function loadProducts(products) {
  return {
    type: LOAD_PRODUCTS,
    products,
  };
}

export function userLogin(userId) {
  return {
    type: LOGIN,
    userId,
  };
}
export function userLogout() {
  return {
    type: LOGOUT,
  };
}
export function userSignup(userDetails) {
  return {
    type: SIGNUP,
    userDetails,
  };
}
export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    item,
  };
}
export function removeItem(newUsers) {
  return {
    type: REMOVE_ITEM_FROM_CART,
    newUsers,
  };
}

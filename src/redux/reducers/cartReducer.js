import { useEffect } from "react";
import { ActionTypes } from "../constants/action-types";

const initialState = {
  cartItems: [],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case ActionTypes.OVERWRITE_CART:
      return { ...state, cartItems: action.payload };
    case ActionTypes.INCREASE_CART_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.pizzaDetails._id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

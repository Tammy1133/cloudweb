import { ActionTypes } from "../constants/action-types";

export const addToCart = (pizza, quantity, varient) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { pizzaDetails: pizza, quantity: quantity, varient },
  };
};

export const increaseQuantity = (id) => {
  return {
    type: ActionTypes.INCREASE_CART_QUANTITY,
    payload: id,
  };
};

import { ActionTypes } from "../constants/action-types";

export const setPizzas = (pizzas) => {
  return { type: ActionTypes.SET_PIZZAS, payload: pizzas };
};

export const overwritePizzas = (newPizzaList) => {
  return { type: ActionTypes.OVERWRITE_CART, payload: newPizzaList };
};

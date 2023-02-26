import { ActionTypes } from "../constants/action-types";
const initialstate = {
  pizzas: [],
};

export const allPizzasReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ActionTypes.SET_PIZZAS:
      return { ...state, pizzas: action.payload };
    default:
      return state;
  }
};

import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { allPizzasReducer } from "./pizzaReducer";

export const reducers = combineReducers({
  allPizzas: allPizzasReducer,
  allCartItems: cartReducer,
});

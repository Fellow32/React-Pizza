import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import setPizzasReducer from "./setPizzasReducer";
import setFilterReducer from "./setFilterReducer";
import thunk from "redux-thunk";
import cartReducer from "./cartReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let rootReducers = combineReducers({
  pizzas: setPizzasReducer,
  filter: setFilterReducer,
  cart: cartReducer
});

let store = createStore(rootReducers, composeEnhancer(applyMiddleware(thunk)));

export default store;

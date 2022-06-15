import { createStore } from "redux";
import { initialState, shopReducers } from "./reducers/shopReducers";
const store = createStore(
  shopReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

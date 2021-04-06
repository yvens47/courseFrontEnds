import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers/rootReducers";
// export const configureStore({
//   reducer: {}
// });
// export function rootReducer(state = [], action) {
//   return state;
// }

const rfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}; // optional redux-firestore Config Options

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,

  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;

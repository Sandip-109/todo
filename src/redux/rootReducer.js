import { combineReducers } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todoSlice";

export const rootReducer = combineReducers({
  todos: todosReducer,
});

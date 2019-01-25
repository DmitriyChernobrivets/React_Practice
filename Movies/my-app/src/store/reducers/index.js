import { combineReducers } from "redux";
import { selectReducer } from "./select";

export const rootReducer = combineReducers({ currentSelect: selectReducer });

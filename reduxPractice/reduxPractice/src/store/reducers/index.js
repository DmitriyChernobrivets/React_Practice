import counterReducer from "./counter";
import { combineReducers } from "redux";
import switchReducer from "./switchTheme";
import articleReduser from "./articles";
const rootReducer = combineReducers({
  counterValue: counterReducer,
  switchTheme: switchReducer,
  article: articleReduser
});
export default rootReducer;

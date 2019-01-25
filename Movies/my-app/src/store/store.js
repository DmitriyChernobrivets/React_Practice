import { createStore } from "redux";
import { rootReducer } from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const enhancer = composeWithDevTools();
const store = createStore(rootReducer, enhancer);

export default store;

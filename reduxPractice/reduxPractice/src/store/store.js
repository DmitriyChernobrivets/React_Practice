import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// import logger from "./middleware/logger";
// import throttle from "./middleware/throttle";
import rootReducer from "./reducers";

const enhancer = composeWithDevTools();
const store = createStore(rootReducer, enhancer);

export default store;

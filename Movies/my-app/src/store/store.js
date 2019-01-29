import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "./middlewares/thunk";

const enhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

export default store;

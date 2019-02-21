import authreducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authreducer,
    projects: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;
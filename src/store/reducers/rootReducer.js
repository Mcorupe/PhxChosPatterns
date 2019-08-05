import authReducer from "./authReducer";
import patternReducer from "./patternReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  pattern: patternReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;

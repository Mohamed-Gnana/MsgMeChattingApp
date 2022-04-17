import AuthReducer from "./authreducer";
import MsgReducer from "./msgreducer";
import PostReducer from "./postreducer";
import CommentReducer from "./commentreducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
    auth : AuthReducer,
    post : PostReducer,
    msg : MsgReducer,
    comment : CommentReducer,
    firebase : firebaseReducer,
    firestore : firestoreReducer
})

export default rootReducer;
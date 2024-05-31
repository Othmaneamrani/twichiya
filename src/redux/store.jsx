import {combineReducers, createStore} from "redux";
import postReducer from "./postReducer.jsx";

const rootReducer = combineReducers({
    post: postReducer
});

const store = createStore(rootReducer);

export default store;
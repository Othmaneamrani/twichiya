import {combineReducers, createStore} from "redux";
import postReducer from "./postReducer.jsx";
import commReducer from "./commReducer.jsx";

const rootReducer = combineReducers({
    post: postReducer,
    comm:commReducer
});

const store = createStore(rootReducer);

export default store;
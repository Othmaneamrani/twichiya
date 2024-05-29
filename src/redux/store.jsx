import {combineReducers, createStore} from "redux";
import postReducer from "./postProducer.jsx";


const rootReducer = combineReducers({
    post:postReducer
});


export const store = createStore(rootReducer);

export default store;
import counterReducer from "./counterReducer";
import loggedReducer from "./loggedReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    counter : counterReducer ,
    login : loggedReducer
})

export default reducers


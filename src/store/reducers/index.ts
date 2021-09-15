import {combineReducers} from "redux";
import usersReducer from "./usersReducer";

export const appReducer = combineReducers({
    users: usersReducer
});

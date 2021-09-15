import {combineReducers} from "redux";
import usersReducer from "./usersReducer";
import todosReducer from "./todosReducer";

export const appReducer = combineReducers({
    users: usersReducer,
    todos: todosReducer
});

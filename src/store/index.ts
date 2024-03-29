import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {appReducer} from "./reducers";

export const store = createStore(appReducer, applyMiddleware(thunk));

export type AppState = ReturnType<typeof appReducer>;
export type AppReducer = typeof appReducer;
export type AppDispatch = typeof store.dispatch;
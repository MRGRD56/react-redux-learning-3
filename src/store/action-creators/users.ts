import UsersActionType from "../../models/store/users/UsersActionType";
import {AppDispatch} from "../index";
import axios from "axios";
import User from "../../models/User";

export const fetchUsers = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch({
                type: UsersActionType.fetchUsers
            });
            const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
            const users = response.data;
            dispatch({
                type: UsersActionType.fetchUsersSuccess,
                users
            });
        } catch (error) {
            console.error(error);
            dispatch({
                type: UsersActionType.fetchUsersError,
                error: "An error occurred when users loading"
            });
        }
    };
};

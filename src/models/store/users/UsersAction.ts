import {Action} from "redux";
import UsersActionType from "./UsersActionType";
import User from "../../User";

export interface FetchUsersAction extends Action<UsersActionType.fetchUsers> {

}

export interface FetchUsersSuccessAction extends Action<UsersActionType.fetchUsersSuccess> {
    users: User[];
}

export interface FetchUsersErrorAction extends Action<UsersActionType.fetchUsersError> {
    error: string | null;
}

type UsersAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;

export default UsersAction;
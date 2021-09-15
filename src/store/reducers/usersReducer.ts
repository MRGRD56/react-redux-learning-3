import UsersState from "../../models/store/users/UsersState";
import UsersAction from "../../models/store/users/UsersAction";
import UsersActionType from "../../models/store/users/UsersActionType";

const initialState: UsersState = {
    users: [],
    isLoading: true,
    error: null
};

const usersReducer = (state: UsersState | undefined, action: UsersAction): UsersState => {
    if (!state) return initialState;

    switch (action.type) {
        case UsersActionType.fetchUsers:
            return {
                users: state.users,
                isLoading: true,
                error: null
            };
        case UsersActionType.fetchUsersSuccess:
            return {
                users: state.users.concat(action.users),
                isLoading: false,
                error: null
            };
        case UsersActionType.fetchUsersError:
            return {
                users: state.users,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export default usersReducer;
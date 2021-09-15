import User from "../../User";

export default interface UsersState {
    users: User[],
    isLoading: boolean,
    error: string | null
}
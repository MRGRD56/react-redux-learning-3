import User from "../../User";
import IDataState from "../IDataState";

export default interface UsersState extends IDataState {
    users: User[];
}
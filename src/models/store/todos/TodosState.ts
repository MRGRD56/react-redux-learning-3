import Todo from "../../Todo";
import IDataState from "../IDataState";

export default interface TodosState extends IDataState {
    todos: Todo[];
    page: number;
    pageLimit: number;
}
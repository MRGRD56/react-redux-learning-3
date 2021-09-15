import {Action} from "redux";
import TodosActionType from "./TodosActionType";
import Todo from "../../Todo";

export interface FetchTodosAction extends Action<TodosActionType.fetchTodos> {

}

export interface FetchTodosSuccessAction extends Action<TodosActionType.fetchTodosSuccess> {
    todos: Todo[];
}

export interface FetchTodosErrorAction extends Action<TodosActionType.fetchTodosError> {
    error: string | null;
}

export interface SetTodoPageAction extends Action<TodosActionType.setTodosPage> {
    page: number;
}

export interface SetCanLoadMoreTodosAction extends Action<TodosActionType.setCanLoadMoreTodos> {
    canLoadMoreTodos: boolean;
}

type TodosAction = FetchTodosAction | FetchTodosSuccessAction | FetchTodosErrorAction | SetTodoPageAction | SetCanLoadMoreTodosAction;

export default TodosAction;
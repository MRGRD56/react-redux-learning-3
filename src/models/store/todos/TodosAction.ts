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

export interface SetTodoPageAction extends Action<TodosActionType.setTodoPage> {
    page: number;
}

type TodosAction = FetchTodosAction | FetchTodosSuccessAction | FetchTodosErrorAction | SetTodoPageAction;

export default TodosAction;
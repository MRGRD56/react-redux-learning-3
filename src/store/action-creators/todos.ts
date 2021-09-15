import {AppDispatch} from "../index";
import axios from "axios";
import TodosActionType from "../../models/store/todos/TodosActionType";
import Todo from "../../models/Todo";
import TodosAction from "../../models/store/todos/TodosAction";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch({
                type: TodosActionType.fetchTodos
            });
            const response = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos", {
                params: {
                    _page: page,
                    _limit: limit
                }
            });
            const todos = response.data;
            const pagesCount = Math.ceil(response.headers["x-total-count"] / limit);
            dispatch({
                type: TodosActionType.fetchTodosSuccess,
                todos
            });
            if (!todos.length || page >= pagesCount) {
                dispatch({
                    type: TodosActionType.setCanLoadMoreTodos,
                    canLoadMoreTodos: false
                })
            }
        } catch (error) {
            console.error(error);
            dispatch({
                type: TodosActionType.fetchTodosError,
                error: "An error occurred when todos loading"
            });
        }
    };
};

export const setTodoPage = (page: number): TodosAction => {
    return {
        type: TodosActionType.setTodosPage,
        page
    }
}
import TodosState from "../../models/store/todos/TodosState";
import TodosAction from "../../models/store/todos/TodosAction";
import TodosActionType from "../../models/store/todos/TodosActionType";

const initialState: TodosState = {
    todos: [],
    isLoading: true,
    error: null,
    page: 1
};

const todosReducer = (state: TodosState | undefined, action: TodosAction): TodosState => {
    if (!state) return initialState;

    switch (action.type) {
        case TodosActionType.fetchTodos:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case TodosActionType.fetchTodosSuccess:
            return {
                ...state,
                todos: state.todos.concat(action.todos),
                isLoading: false,
                error: null
            };
        case TodosActionType.fetchTodosError:
            return {
                ...state,
                isLoading: false,
                error: "An error occurred when todos loading"
            };
        case TodosActionType.setTodoPage:
            return {
                ...state,
                page: action.page
            };
        default:
            return state;
    }
};

export default todosReducer;
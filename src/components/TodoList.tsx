import React, {FC, useEffect} from 'react';
import useAppSelector from "../hooks/useAppSelector";
import useActions from "../hooks/useActions";

const TodoList: FC = () => {
    const todosState = useAppSelector(state => state.todos);
    const {fetchTodos, setTodoPage} = useActions();

    function fetchNextPage() {
        fetchTodos(todosState.page);
        setTodoPage(todosState.page + 1);
    }

    useEffect(() => {
        fetchNextPage();
    }, []);

    if (todosState.error) {
        return <div style={{color: "red"}}>{todosState.error}</div>;
    }

    if (!todosState.isLoading && !todosState.todos.length) {
        return <div>No todos</div>;
    }

    return (
        <div>
            {todosState.todos.map(todo => (
                <div key={todo.id} style={{textDecoration: todo.completed ? "line-through" : "none"}}>
                    <p>{todo.id}. {todo.title}</p>
                </div>
            ))}
            {todosState.isLoading
                ? <div>Now loading...</div>
                : <button onClick={() => fetchNextPage()}>Load more</button>}
        </div>
    );
};

export default TodoList;
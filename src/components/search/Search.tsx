import { useEffect, useState } from "react"
import { todosService } from "../../services/todo";
import { Todo } from "../todo/Todo";

export function Search() {

    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        todosService.getAllTodos()
            .then(result => setTodos(result))
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false))
    }, [])


    return (
        <>
            <h2>Search TODO by Title</h2>
            <input type='text' />

            {!error && !isLoading && todos.length > 0 &&
                <>
                    <h3>Todos</h3>
                    {todos.map(el => <Todo todo={el} key={el['id']} />)}
                </>
            }

            {!error && !isLoading && todos.length == 0 &&
                <>
                    <h3>Todos</h3>
                    <p>There are no TODOs yet</p>
                </>
            }

            {error && <p>An error occured</p>}
            {isLoading && <p>Loading...</p>}
        </>
    )
}
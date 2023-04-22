import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";
import { todosService } from "../../services/todo";
import { Todo } from "../todo/Todo";

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export function Search() {

    const [todos, setTodos] = useState([]);
    const [results, setResults] = useState(Array<Todo>);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        todosService.getAllTodos()
            .then(result => setTodos(result))
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false))
    }, [])

    useEffect(() => {
      setResults(todos.filter((el: Todo) => el['title'].includes(String(searchParams.get('title')))))
    }, [searchParams])

    useEffect(() => {
        if (results.length > 0) {
            navigate('/todos', {
                state: results
            })
        }
    }, [results])

    return (
        <>
            <h2>Search TODO by Title</h2>
            <input type='text' onBlur={(e) => setSearchParams({ title: e.target.value })} />

            {/* {!error && !isLoading && results.length > 0 &&
                <>
                    <h3>Results</h3>
                    {results.map(el => <Todo todo={el} key={el.id} />)}
                </>
            } */}


            {/* {!error && !isLoading && results.length == 0 && todos.length > 0 &&
                <>
                    <h3>Todos</h3>
                    {todos.map(el => <Todo todo={el} key={el['id']} />)}
                </>
            } */}

            {/* {!error && !isLoading && todos.length == 0 &&
                <>
                    <h3>Todos</h3>
                    <p>There are no TODOs yet</p>
                </>
            }

            {error && <p>An error occured</p>}
            {isLoading && <p>Loading...</p>} */}
        </>
    )
}
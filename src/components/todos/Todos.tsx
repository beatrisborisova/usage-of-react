import { Fragment, useEffect, useState } from "react";
import { Todo } from "../todo/Todo";
import { todosService } from "../../services/todo";
import { useLoaderData, useLocation, useRouteError } from 'react-router-dom';
import { Todo as TodoInterface } from "../../interfaces/todo";

export function Todos() {

    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // const todos = useLoaderData()
    const error = useRouteError()

    const location = useLocation();

    useEffect(() => {
        todosService.getAllTodos()
            .then(result => setTodos(result))
            .finally(() => setIsLoading(false))
    }, [])

    console.log(location.state);


    return (
        <>
            <h1>Todos here</h1>
            {/* {isLoading && <p>Loading...</p>} */}
            {/* {!isLoading && todos.length > 0 && todos.map(el => <Todo todo={el} key={el['id']} />)} */}

            {location.state && location.state.map((el: {
                userId: number,
                id: number,
                title: string,
                completed: boolean
            }) => <Todo todo={el} key={el['id']} />)}


            {!location.state && todos.length > 0 && todos.map(el => <Todo todo={el} key={el['id']} />)}
            {(error as Error)?.message && <p>{(error as Error)?.message}</p>}
        </>
    )
}

// export const loadTodos = () => {
//     return todosService.getAllTodos()
// }
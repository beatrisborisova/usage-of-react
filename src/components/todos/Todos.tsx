import { Fragment, useEffect, useState } from "react";
import { Todo } from "../todo/Todo";

export function Todos() {

    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(respose => respose.json())
            .then(result => setTodos(result))
            .catch(error => console.log(error))
            .finally(() => {
                console.log('Done')
                setIsLoading(false)
            })
    }, [])

    return (
        <>
            <h1>Todos here</h1>
            {isLoading && <p>Loading...</p>}
            {!isLoading && todos.length > 0 && todos.map(el => <Todo todo={el} key={el['id']} />)}
        </>
    )
}
import styles from './Todo.module.css';
import { Todo as TodoInterface } from '../../interfaces/todo'
import { useEffect, useState } from 'react';
import { todosService } from '../../services/todo';

interface TodoProps {
    todo: TodoInterface
}


export function Todo(props: TodoProps) {

    const [status, setStatus] = useState(false)
    const [item, setItem] = useState()

    // const changeStatus = () => {
    //     setStatus(true)
    // }

    useEffect(() => {
        todosService.getTodoById(props.todo.id)
            .then(result => setItem(result))
    }, [])


    return (
        <div className={`${styles.todoClass} ${styles.test}`}>
            <h2 className={status ? styles.completed : ''} onClick={() => setStatus(!status)}>Title: {props.todo.title}</h2>
            {/* <p>Status: {status ? 'Completed' : 'Not completed'}</p> */}
            {/* <button onClick={() => setStatus(!status)}>Toggle todo status</button> */}
            {/* <button onClick={() => setStatus(false)}>Set todo as not completed</button> */}
        </div>
    )
}
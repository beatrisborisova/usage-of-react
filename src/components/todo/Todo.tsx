import styles from './Todo.module.css';
import { Todo as TodoInterface } from '../../interfaces/todo'
import { useEffect, useState } from 'react';
import { todosService } from '../../services/todo';
import { useNavigate } from 'react-router-dom';

interface TodoProps {
    todo: TodoInterface
}


export function Todo(props: TodoProps) {

    const [status, setStatus] = useState(false)
    const [item, setItem] = useState()
    const navigate = useNavigate()

    // const changeStatus = () => {
    //     setStatus(true)
    // }

    useEffect(() => {
        todosService.getTodoById(props.todo.id)
            .then(result => setItem(result))
    }, [])


    const redirectToLogin = () => {
        navigate('/login', {
            state: status
        })
    }

    return (
        <div className={`${styles.todoClass} ${styles.test}`}>
            <h2 className={status ? styles.completed : ''} onClick={() => setStatus(!status)}>Title: {props.todo.title}</h2>
            {/* <p>Status: {status ? 'Completed' : 'Not completed'}</p> */}
            {/* <button onClick={() => setStatus(!status)}>Toggle todo status</button> */}
            {/* <button onClick={() => setStatus(false)}>Set todo as not completed</button> */}
            <button onClick={redirectToLogin}>Show details</button>
        </div>
    )
}
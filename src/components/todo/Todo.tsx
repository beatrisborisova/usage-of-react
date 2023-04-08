import styles from './Todo.module.css';

export function Todo(props: any) {

    return (
        <div className={`${styles.todoClass} ${styles.test}`}>
            <h2 className={styles.test}>Title: {props.todo.title}</h2>
        </div>
    )
}
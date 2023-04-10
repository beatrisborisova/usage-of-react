import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export function Navigation() {
    return (
        <nav className={styles.navigation}>
            {/* <a href="/">Home</a> */}
            {/* <a href="/movies">Movies</a> */}

            <Link to='/'>Home</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/todos'>Todos</Link>
        </nav>
    )
}
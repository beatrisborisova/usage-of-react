import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import styles from './Navigation.module.css';

export function Navigation() {

    const { hasUser, setHasUser } = useContext(AuthContext);
    
    return (
        <nav className={styles.navigation}>
            {/* <a href="/">Home</a> */}
            {/* <a href="/movies">Movies</a> */}

            <Link to='/'>Home</Link>
            <Link to='/todos'>Todos</Link>
            {!hasUser &&
                <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </>
            }
            {hasUser &&
                <>
                    <Link to='/movies'>Movies</Link>
                    <Link to='/profile'>Profile</Link>
                    <Link to='/' onClick={() => {
                        setHasUser(false)
                        sessionStorage.removeItem('token')
                        sessionStorage.removeItem('username')
                    }}>Logout</Link>
                </>
            }
        </nav>
    )
}
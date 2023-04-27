import { FormEvent, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import { RootState } from '../../interfaces/auth';
import { setHasUser as setHasUserReducer } from '../../redux/auth';

export function Login() {

    const location = useLocation();
    const navigate = useNavigate();
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    // const [hasUser, setHasUser] = useState(false);

    const { hasUser, setHasUser } = useContext(AuthContext);
    const dispatch = useDispatch();
    const authState = useSelector((states: RootState) => states.auth.value.payload)
    console.log('authState', authState);
    // useEffect(() => {
    //     if (hasUser) {
    //         navigate('/', {
    //             state: hasUser
    //         })
    //     }
    // }, [hasUser])

    const onLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const username = String(formData.get('username'));
        const password = String(formData.get('password'));
        const repass = String(formData.get('repass'));

        if (username.length < 3) {
            return setUsernameError('Username must be at least 3 characters long')
        } else {
            setUsernameError('')
        }

        if (password.length < 5) {
            return setPasswordError('Password must be at least 5 characters long')
        } else if (password.includes('&')) {
            return setPasswordError('Password cannot contain special characters')
        } else {
            setPasswordError('')
        }

        setHasUser(true)
        e.currentTarget.reset()

        sessionStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpyHI')
        sessionStorage.setItem('username', username)

        localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpyHI')
        dispatch(setHasUserReducer({ payload: { hasUser: true }, type: 'SET HAS USER' }))
    }

    return (
        <>
            <h1>Login here</h1>
            {location.state && <p>This To Do is COMPLETED, you can Sign in</p>}
            {!location.state && <p>This To Do is not Finished yet, please <Link to='/register'>Register</Link></p>}


            {hasUser && <h1>User is logged in</h1>}

            <form onSubmit={onLogin}>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' name='username' />
                </div>
                <div>
                    {usernameError.length > 0 && <p>{usernameError}</p>}
                </div>
                <div>
                    <label htmlFor='password'>Passsword:</label>
                    <input type='password' id='password' name='password' />
                </div>
                <div>
                    {passwordError.length > 0 && <p>{passwordError}</p>}
                </div>
                <div>
                    <label htmlFor='repass'>Repeat password:</label>
                    <input type='password' id='repass' name='repass' />
                </div>
                <input type='submit' value='Login' />
            </form>
        </>
    )
}
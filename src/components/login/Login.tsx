import { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

export function Login() {

    const location = useLocation();
    const navigate = useNavigate();
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasUser, setHasUser] = useState(false);

    useEffect(() => {
        if (hasUser) {
            navigate('/', {
                state: hasUser
            })
        }
    }, [hasUser])

    const onLogin = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);

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
        e.target.reset()
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
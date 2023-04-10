import { useLocation, Link } from 'react-router-dom';

export function Login() {

    const location = useLocation()

    return (
        <>
            <h1>Login here</h1>
            {location.state && <p>This To Do is COMPLETED, you can Sign in</p>}
            {!location.state && <p>This To Do is not Finished yet, please <Link to='/register'>Register</Link></p>}
        </>
    )
}
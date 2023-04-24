import { useState } from "react";
import styles from './Register.module.css';

export function Register() {

    const [registerFormState, setRegisterFormState] = useState({
        'username': '',
        'password': '',
        repass: '',
        gender: 'male',
        bio: '',
        citizenship: 'eu',
        robot: false
    })

    const [registerFormErrors, setRegisterFormErrors] = useState({
        username: {
            minlength: false,
            specialCharacters: false
        },
        password: false,
        repass: false,
        bio: false,
        robot: false,
        passwords: false
    })

    const onRegister = (e: any) => {
        e.preventDefault();
        console.log('register');
        console.log(registerFormState);

    }

    const changeField = (e: any) => {

        if (e.target.type === 'checkbox') {
            return setRegisterFormState(oldState => ({ ...oldState, [e.target.name]: e.target.checked }))
        }

        setRegisterFormState(oldState => ({ ...oldState, [e.target.name]: e.target.value }))
    }

    console.log(registerFormErrors.username);
    

    const validateField = (e: any) => {
        
        if (e.target.name === 'username') {
            if (e.target.value.length < 3) {
                setRegisterFormErrors(oldState => ({ ...oldState, [e.target.name]: { minlength: true, specialCharacters: false } }))
            } else if (e.target.value.includes('%')) {
                setRegisterFormErrors(oldState => ({ ...oldState, [e.target.name]: { minlength: false, specialCharacters: true } }))
            } else {
                setRegisterFormErrors(oldState => ({ ...oldState, [e.target.name]: { minlength: false, specialCharacters: false } }))
            }
        } else if (e.target.name === 'password') {
            if (e.target.value.length < 5) {
                setRegisterFormErrors(oldState => ({ ...oldState, [e.target.name]: true }))
            } else {
                setRegisterFormErrors(oldState => ({ ...oldState, [e.target.name]: false }))
            }
        } else if (e.target.name === 'bio') {
            if (e.target.value.length < 10) {
                setRegisterFormErrors(oldState => ({ ...oldState, [e.target.name]: true }))
            } else {
                setRegisterFormErrors(oldState => ({ ...oldState, [e.target.name]: false }))
            }
        } else if (e.target.name === 'robot') {
            if (e.target.checked) {
                setRegisterFormErrors(oldState => ({ ...oldState, [e.target.name]: true }))
            } else {
                setRegisterFormErrors(oldState => ({ ...oldState, [e.target.name]: false }))
            }

        }

        if (registerFormState.repass.length > 0 && registerFormState.password != registerFormState.repass) {
            setRegisterFormErrors(oldState => ({ ...oldState, passwords: true }))
        } else {
            setRegisterFormErrors(oldState => ({ ...oldState, passwords: false }))
        }
    }

    console.log(registerFormErrors);


    return (
        <>
            <h3>Register form</h3>
            <form onSubmit={onRegister}>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' name='username' value={registerFormState.username} onChange={changeField} onBlur={validateField} />
                </div>
                <div>
                    {registerFormErrors.username.minlength && <p className={styles.error}>Username must be at least 3 characters long</p>}
                    {registerFormErrors.username.specialCharacters && <p className={styles.error}>Username cannot contain special characters</p>}
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' name='password' value={registerFormState.password} onChange={changeField} onBlur={validateField} />
                </div>
                <div>
                    {registerFormErrors.password && <p className={styles.error}>Password must be at least 5 characters long</p>}
                </div>
                <div>
                    <label htmlFor='repass'>Repeat password:</label>
                    <input type='password' id='repass' name='repass' value={registerFormState.repass} onChange={changeField} onBlur={validateField} />
                </div>
                <div>
                    {registerFormErrors.passwords && <p className={styles.error}>Passwords don't match</p>}
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <input type='radio' id="gender" name="gender" value='male' checked={registerFormState.gender === 'male'} onChange={changeField} /> Male
                    <input type='radio' id="gender" name="gender" value='female' checked={registerFormState.gender === 'female'} onChange={changeField} /> Female
                </div>
                <div>
                    <label htmlFor="bio">Bio:</label>
                    <textarea id='bio' name='bio' value={registerFormState.bio} onChange={changeField} onBlur={validateField}></textarea>
                </div>
                <div>
                    {registerFormErrors.bio && <p className={styles.error}>Bio must be at least 10 characters long</p>}
                </div>
                <div>
                    <label>Citizenship</label>
                    <select id="citizenship" name="citizenship" value={registerFormState.citizenship} onChange={changeField}>
                        <option value="eu">EU</option>
                        <option value="noneu">Non EU</option>
                    </select>
                </div>
                <div>
                    <label>Confirm you're not a robot</label>
                    {/* <input type='checkbox' id="robot" name="robot" checked={robot} onChange={(e) => setRobot(e.target.checked)} /> */}
                    <input type='checkbox' id="robot" name="robot" checked={registerFormState.robot} onChange={changeField} onFocus={validateField} />
                </div>
                <div>
                    {registerFormErrors.robot && <p className={styles.error}>Prove you're not a robot</p>}
                </div>
                <input type='submit' value='Register' />
            </form>
        </>
    )
}
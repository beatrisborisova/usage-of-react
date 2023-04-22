import { useState } from "react";

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

    const onRegister = (e: any) => {
        e.preventDefault();
        console.log('register');
    }

    const changeField = (e: any) => {
        setRegisterFormState(oldState => ({ ...oldState, [e.target.name]: e.target.value }))
    }

    const changeRobot = (e: any) => {
        setRegisterFormState(oldState => ({ ...oldState, [e.target.name]: e.target.checked }))
    }

    return (
        <>
            <h3>Register form</h3>
            <form onSubmit={onRegister}>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' name='username' value={registerFormState.username} onChange={changeField} />
                </div>
                <div>
                    <label htmlFor='password'>Passsword:</label>
                    <input type='password' id='password' name='password' value={registerFormState.password} onChange={changeField} />
                </div>
                <div>
                    <label htmlFor='repass'>Repeat password:</label>
                    <input type='password' id='repass' name='repass' value={registerFormState.repass} onChange={changeField} />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <input type='radio' id="gender" name="gender" value='male' checked={registerFormState.gender === 'male'} onChange={changeField} /> Male
                    <input type='radio' id="gender" name="gender" value='female' checked={registerFormState.gender === 'female'} onChange={changeField} /> Female
                </div>
                <div>
                    <label htmlFor="bio">Bio:</label>
                    <textarea id='bio' name='bio' value={registerFormState.bio} onChange={changeField}></textarea>
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
                    <input type='checkbox' id="robot" name="robot" checked={registerFormState.robot} onChange={changeRobot} />
                </div>
                <input type='submit' value='Register' />
            </form>
        </>
    )
}
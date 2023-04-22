import { useState } from "react";

export function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');
    const [gender, setGender] = useState('male');
    const [bio, setBio] = useState('');
    const [citizenship, setCitizenship] = useState('eu');
    const [robot, setRobot] = useState(false);

    const onRegister = (e: any) => {
        e.preventDefault();
        console.log('register');
    }

    const changeUsername = (e: any) => {
        setUsername(e.target.value)
    }

    const changePassword = (e: any) => {
        setPassword(e.target.value)
    }

    const changeRepass = (e: any) => {
        setRepass(e.target.value)
    }

    const changeGender = (e: any) => {
        setGender(e.target.value)
    }

    const changeBio = (e: any) => {
        setBio(e.target.value)
    }

    const changeCitizenship = (e: any) => {
        setCitizenship(e.target.value)
    }

    const changeRobot = (e: any) => {
        setRobot(oldState => !Boolean(oldState))
    }

    return (
        <>
            <h3>Register form</h3>
            <form onSubmit={onRegister}>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' name='username' value={username} onChange={changeUsername} />
                </div>
                <div>
                    <label htmlFor='password'>Passsword:</label>
                    <input type='password' id='password' name='password' value={password} onChange={changePassword} />
                </div>
                <div>
                    <label htmlFor='repass'>Repeat password:</label>
                    <input type='password' id='repass' name='repass' value={repass} onChange={changeRepass} />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <input type='radio' id="gender" name="gender" value='male' checked={gender === 'male'} onChange={changeGender} /> Male
                    <input type='radio' id="gender" name="gender" value='female' checked={gender === 'female'} onChange={changeGender} /> Female
                </div>
                <div>
                    <label htmlFor="bio">Bio:</label>
                    <textarea id='bio' name='bio' value={bio} onChange={changeBio}></textarea>
                </div>
                <div>
                    <label>Citizenship</label>
                    <select id="citizenship" name="citizenship" value={citizenship} onChange={changeCitizenship}>
                        <option value="eu">EU</option>
                        <option value="noneu">Non EU</option>
                    </select>
                </div>
                <div>
                    <label>Confirm you're not a robot</label>
                    <input type='checkbox' id="robot" name="robot" checked={robot} onChange={changeRobot} />
                </div>
                <input type='submit' value='Register' />
            </form>
        </>
    )
}
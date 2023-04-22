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

    return (
        <>
            <h3>Register form</h3>
            <form onSubmit={onRegister}>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='password'>Passsword:</label>
                    <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='repass'>Repeat password:</label>
                    <input type='password' id='repass' name='repass' value={repass} onChange={(e) => setRepass(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <input type='radio' id="gender" name="gender" value='male' checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} /> Male
                    <input type='radio' id="gender" name="gender" value='female' checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} /> Female
                </div>
                <div>
                    <label htmlFor="bio">Bio:</label>
                    <textarea id='bio' name='bio' value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                </div>
                <div>
                    <label>Citizenship</label>
                    <select id="citizenship" name="citizenship" value={citizenship} onChange={(e) => setCitizenship(e.target.value)}>
                        <option value="eu">EU</option>
                        <option value="noneu">Non EU</option>
                    </select>
                </div>
                <div>
                    <label>Confirm you're not a robot</label>
                    {/* <input type='checkbox' id="robot" name="robot" checked={robot} onChange={(e) => setRobot(e.target.checked)} /> */}
                    <input type='checkbox' id="robot" name="robot" checked={robot} onChange={() => setRobot(oldState => !Boolean(oldState))} />
                </div>
                <input type='submit' value='Register' />
            </form>
        </>
    )
}
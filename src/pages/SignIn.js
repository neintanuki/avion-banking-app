import { useState } from 'react';
import './styles/SignIn.css';

export default function SignIn({ setIsSignedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        username: null,
        password: null
    });
    
    function userSignIn(event) {
        event.preventDefault();
        const usersDB = JSON.parse(localStorage.getItem("avion-banking-app"));
        const errorsInstance = {...errors}

        // check if users is not null
        if (usersDB) {
            const { users } = usersDB;
            // loop through users and check if username matches
            users.forEach((user, index) => {
                if (user.username === username) {
                    if (user.password === password) {
                        alert("success")
                        setIsSignedIn(true);
                    } else if (index === (users.length - 1)) {
                        alert("password not found")
                        errorsInstance.password = "Invalid Password"
                    }
                } else if (index === (users.length - 1)) {
                    alert("username not found");
                    errorsInstance.username = "Invalid Username";
                }
            })
        } else {
            alert("DB not found")
        }

        setErrors(errorsInstance);
    }

    function test() {
        localStorage.setItem("avion-banking-app", JSON.stringify({
            users: [
                {username: "admin", password: "123456"}
            ],
            isSignedIn: false
        }))
    }


    return (
        <div className="sign-in">
            <div className="left-side">

            </div>
            <div className="right-side">
                <button onClick={test}>Click me</button>
                <form action="" className="sign-in-form" onSubmit={userSignIn}>
                    <h1 className="title">Sign In</h1>
                    <p className="subtitle">Sign in to continue</p>

                    <div className="form-control">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" name="username" className="form-input" value={username} onChange={e => setUsername(e.target.value)} required />
                        {errors.username}
                    </div>

                    <div className="form-control">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" className="form-input" value={password} onChange={e => setPassword(e.target.value)}/>
                        {errors.password}
                    </div>

                    <button className="btn-submit">Sign In</button>

                </form>
            </div>
        </div>
    )
}
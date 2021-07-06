import React, { useState } from "react";
import style from "./Login.module.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("username: ", username);
        console.log("password: ", password);
    }

    return (
        <div className={style.loginPageHolder}>
            <div className={style.loginPopup}>
                <form className={style.loginForm}>
                    <label>username</label>
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={style.usernameInput}
                    />
                    <br />
                    <label>password</label>
                    <input 
                        type="text"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={style.passwordInput}
                    />
                    <button onClick={handleSubmit}>login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
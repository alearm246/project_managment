import React, { useState } from "react";
import style from "./Login.module.css";
import axios from "axios";

import { UserContext } from "../../../context/UserContext";
import { Link, useHistory } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const login = async () => {
        try {
            const res = await axios.post("http://localhost:3000/auth/login", {
                username,
                password
            }, {
                withCredentials: true
            });
            if(res.status === 200) history.push("/user-profile");
        } catch(err) {
            console.error(err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
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
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={style.passwordInput}
                    />
                    <button onClick={handleSubmit}>login</button>
                    <Link to="/signup">don't have an account? sign up!</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;
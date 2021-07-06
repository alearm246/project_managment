import React, { useState } from "react";
import style from "./SignUp.module.css";
import axios from "axios";

import { Link, useHistory } from "react-router-dom";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const signup = async () => {
        try {
            const res = await axios.post("http://localhost:3000/auth/signup", {
                username,
                password
            }, {
                withCredentials: true
            });

            if(res.status === 201) history.push("/");
        } catch(err) {
            console.error(err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signup()
    }

    return (
        <div className={style.signUpPageHolder}>
            <div className={style.signUpPopup}>
                <form className={style.signUpForm}>
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
                    <button onClick={handleSubmit}>signup</button>
                    <Link to="/">don't have an account? login up!</Link>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
import React, { useContext, useEffect } from "react";
import style from "./UserProfile.module.css";
import axios from "axios";

import { UserContext } from "../../../context/UserContext";

function UserProfile() {
    const { user, setUser } = useContext(UserContext);

    const getCurrentUser = async () => {
        try {
            const res = await axios.get("http://localhost:3000/users/current", { withCredentials: true });
            const { id, username } = res.data;
            console.log(username);
            setUser({
                id,
                username
            })
        } catch(err) {
            console.error(err);
            setUser({
                id: null,
                username: ''
            })
        }
    }

    useEffect(() => {
        console.log("HEYYYYY");
        getCurrentUser();
    }, [])

    return (
        <div className={style.userProfileHolder}>
            <h1>{user.username}</h1>
        </div>
    )
}


export default UserProfile
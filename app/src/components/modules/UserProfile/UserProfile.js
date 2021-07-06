import React, { useContext } from "react";
import style from "./UserProfile.module.css";
import { UserContext } from "../../../context/UserContext";

function UserProfile() {
    const { user, setUser } = useContext(UserContext);

    return (
        <div className={style.userProfileHolder}>
            <h1>{user.username}</h1>
        </div>
    )
}


export default UserProfile
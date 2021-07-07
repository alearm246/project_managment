import React, { useState, useEffect, useRef } from "react";
import style from "./AccountDropdown.module.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const profilePic = "data:image/jpeg;base64,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"

function AccountDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const node = useRef();
    const history = useHistory();

    const handleOutsideClick = e => {
        if(node.current.contains(e.target)) return;
        setIsOpen(false);
    }

    useEffect(() => {
        if(isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
    }, [isOpen])

    const logOut = async () => {
        try {
            const res = await axios.get("http://localhost:3000/auth/logout", { withCredentials: true });
            history.push("/");
            console.log(res);
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div ref={node} className={style.accountDropdownHolder}>
            <div onClick={() => setIsOpen(!isOpen)} className={style.profilePicHolder}>
                <img className={style.profilePic} src={profilePic} alt="profile picture" />
            </div>
            { isOpen ? <div className={style.dropDownHolder}>
                <div className={style.dropDownItem}>
                    <Link className={style.dropDownItemLink} to="/user-profile">
                        view profile
                    </Link>
                </div>
                <div onClick={logOut} className={style.dropDownItem}>
                    log out
                </div>
            </div> : ""}
        </div>
    )
}

export default AccountDropdown;
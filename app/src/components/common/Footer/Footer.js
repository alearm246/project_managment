import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div className={style.footerHolder}>
          <p>Project Management by Alejandro</p>
        </div>
    )
}

export default Footer;
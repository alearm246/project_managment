import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

import AccountDropdown from "./AccountDropdown/AccountDropdown";


function Header() {
    return (
        <div className={style.headerHolder}>
          <div className={style.logoHolder}>
              <h2>clan management</h2>
          </div>
          <div className={style.navLinksHolder}>
              <Link to="#">home</Link>
              <Link to="#">home</Link>
              <Link to="#">home</Link>
          </div>
          <AccountDropdown />
        </div>
    )
}

export default Header;
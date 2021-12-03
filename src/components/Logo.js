import React from "react";
import logo from "../assets/bnmlogo.svg";

import style from './styles/Logo.modular.css';

function Logo() {
    return <div>
        <img className={style.bnmLogo} src={logo} alt="bnm logo" />
    </div>
}


export default Logo;
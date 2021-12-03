import React from "react";
import style from './styles/Footer.module.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer className={style.footer}><p>Aguirre / Romero Copyright © {currentYear}</p></footer>
}

export default Footer;
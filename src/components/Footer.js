import React from "react";
import style from './styles/Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer className={style.footer}><p>Aguirre / Romero Copyright © {currentYear}</p></footer>
}

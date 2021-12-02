import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer className="footer"><p>Aguirre / Romero | Copyright © {currentYear}</p></footer>
}

import logo from "../assets/bnmlogo.svg";

import style from './styles/NavBar.module.css';

import { NavLink } from 'react-router-dom';
import { Nav } from "react-bootstrap";

export default function NavBar({ setIsSignedIn, setAccountSignedIn }) {
    function logout() {
        setIsSignedIn(false);
        setAccountSignedIn("");
    }

    return (
        <div className={style.navbar}>
            <div className={style.innerNavbar}>
                <img className="bnm-logo" src={logo} alt="bnm logo" /><span className="bnm-wordmark">BNM</span>
            </div>
            
            <div className={style.navMenu}>
                <Nav>
                    <NavLink className={style.navLink} to="/">Dashboard</NavLink>
                    <NavLink className={style.navLink} to="/client">Client</NavLink>
                    <NavLink className={style.navLink} to="/new-client">New Client</NavLink>
                    <NavLink className={style.navLink} to="/transact">Transact</NavLink>
                    <NavLink className={style.navLink} to="/transaction-history">Transaction History</NavLink>
                </Nav>
            </div>

            <div className={style.signIn}>
                <NavLink className={style.navLink} to="/signin" onClick={logout}>Log Out</NavLink>
            </div>
      </div>
    )
}

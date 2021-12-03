import logo from "../assets/bnmlogo.svg";

import { NavLink } from 'react-router-dom';
import { Nav } from "react-bootstrap";

function NavBar() {
    return (
        <div className="navbar">
            <div className="innver-navbar">
                <img className="bnm-logo" src={logo} alt="bnm logo" /><span className="bnm-wordmark">BNM</span>
            </div>
            
            <div className="navmenu">
                <Nav>
                    <NavLink className="navlink" to="/dashboard">Dashboard</NavLink>
                    <NavLink className="navlink" to="/client">Client</NavLink>
                    <NavLink className="navlink" to="/new-client">New Client</NavLink>
                    <NavLink className="navlink" to="/transact">Transact</NavLink>
                    <NavLink className="navlink" to="/transaction-history">Transaction History</NavLink>
                </Nav>
            </div>

            <div className="sign-in">
                <NavLink className="navlink" to="/SignIn">Log Out</NavLink>
            </div>
      </div>
    )
}

export default NavBar;
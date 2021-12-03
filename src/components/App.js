import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

import logo from "../assets/bnmlogo.svg";

import Dashboard from "./Dashboard";
import Client from "./Client";
import NewClient from "./NewClient";
import Transact from "./Transact";
import TransactionHistory from "./TransactionHistory";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="innver-navbar">
          <img className="bnm-logo" src={logo} alt="bnm logo" /><span className="bnm-wordmark">BNM</span>
        </div>
        <div className="navmenu">
          <Nav>
              <NavLink className="navlink" to="/">Dashboard</NavLink>
              <NavLink className="navlink" to="/Client">Client</NavLink>
              <NavLink className="navlink" to="/NewClient">New Client</NavLink>
              <NavLink className="navlink" to="/Transact">Transact</NavLink>
              <NavLink className="navlink" to="/TransactionHistory">Transaction History</NavLink>
          </Nav>
        </div>
        <div className="sign-in">
          <NavLink className="navlink" to="/SignIn">Log Out</NavLink>
        </div>
      </div>
        
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="client" element={<Client />} />
        <Route path="newclient" element={<NewClient />} />
        <Route path="transact" element={<Transact />} />
        <Route path="transactionhistory" element={<TransactionHistory />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>

      <Dashboard />
      <Client />
      <NewClient />
      <Transact />
      <TransactionHistory />
      <Footer />
    </div>
  );
}

// SIGN IN / LOG OUT
function SignIn() {
  return (
    <div>
      <div className="signin">
        <h2>Have a great day!</h2>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;

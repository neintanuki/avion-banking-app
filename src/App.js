import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

import logo from "./assets/bnmlogo.svg";

import Dashboard from "./components/Dashboard";
import Client from "./components/Client";
import NewClient from "./components/NewClient";
import Transact from "./components/Transact";
import TransactionHistory from "./components/TransactionHistory";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="inner-navbar">
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
      <SignIn />
      <Footer />
    </div>
  );
}

export default App;

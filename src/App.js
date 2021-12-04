import React, { useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import PrivateRoutes from "./components/PrivateRoutes";

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Dashboard from "./pages/Dashboard";
import Client from "./pages/Client";
import NewClient from "./pages/NewClient";
import Transact from "./pages/Transact";
import TransactionHistory from "./pages/TransactionHistory";
import NotFound from "./pages/NotFound"

import { useState } from 'react';


function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [usersDB, setUsersDB] = useState([]);

  useEffect(() => {
    if (usersDB.length) {
      // if usersDB is not an empty array
      localStorage.setItem('avion-banking-app', JSON.stringify({
        isSignedIn,
        users: usersDB
      }))
    } else {
      const result = JSON.parse(localStorage.getItem("avion-banking-app"));

      if (result && result.users) {
        setUsersDB(result.users);
      }
    }
  }, [usersDB])

  return (
    <div className="app">

      <PrivateRoutes isSignedIn={isSignedIn} userShouldSignIn={true}>
        <NavBar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/client" element={<Client />} />
          <Route path="/new-client" element={<NewClient isSignedIn={isSignedIn} usersDB={usersDB} />} />
          <Route path="/transact" element={<Transact />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
        </Routes>

        <Footer />
      </PrivateRoutes>
      
      <PrivateRoutes isSignedIn={isSignedIn} userShouldSignIn={false}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setIsSignedIn={setIsSignedIn} />} />
        </Routes>
      </PrivateRoutes>

      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
          
    </div>
  );
}

export default App;

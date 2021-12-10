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
import Transfer from "./pages/Transfer";
import TransactionHistory from "./pages/TransactionHistory";
import NotFound from "./pages/NotFound"

import { useState } from 'react';
import CardSelection from "./components/FCardSelection";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [accountSignedIn, setAccountSignedIn] = useState('');
  const [usersDB, setUsersDB] = useState([]);

  useEffect(() => {
    if (usersDB.length) {
      // if usersDB is not an empty array
      localStorage.setItem('avion-banking-app', JSON.stringify({
        accountSignedIn,
        isSignedIn,
        users: usersDB
      }));
    } else {
      const result = JSON.parse(localStorage.getItem("avion-banking-app"));

      if (result && result.users) {
        setUsersDB(result.users);
      }

      if (result && result.isSignedIn) {
        setIsSignedIn(result.isSignedIn);
      }

      if (result && result.accountSignedIn) {
        setAccountSignedIn(result.accountSignedIn);
      }
    }


  }, [usersDB, isSignedIn]);


  return (
    <div className="app">

      <PrivateRoutes isSignedIn={isSignedIn} userShouldSignIn={true} isAdmin={true} accountSignedIn={accountSignedIn} users={usersDB}>
        <NavBar setIsSignedIn={setIsSignedIn} setAccountSignedIn={setAccountSignedIn} isAdmin={true} />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/client" element={<Client users={usersDB} />} />
          <Route path="/new-client" element={<NewClient isSignedIn={isSignedIn} users={usersDB} onUsers={setUsersDB} />} />
          <Route path="/transact" element={<Transact users={usersDB} onUsers={setUsersDB} account={accountSignedIn} />} />
          <Route path="/transaction-history" element={<TransactionHistory account={accountSignedIn} users={usersDB} />} />
        </Routes>

        <Footer />
      </PrivateRoutes>

      <PrivateRoutes isSignedIn={isSignedIn} userShouldSignIn={true} isAdmin={false} accountSignedIn={accountSignedIn} users={usersDB}>
        <NavBar setIsSignedIn={setIsSignedIn} setAccountSignedIn={setAccountSignedIn} isAdmin={false}/>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transfer" element={<Transfer users={usersDB} account={accountSignedIn} onUsers={setUsersDB} />} />
          <Route path="/transact" element={<Transact users={usersDB} onUsers={setUsersDB} account={accountSignedIn} />} />
          <Route path="/transaction-history" element={<TransactionHistory account={accountSignedIn} users={usersDB} />} />
        </Routes>

        <Footer />

      </PrivateRoutes>
      
      <PrivateRoutes isSignedIn={isSignedIn} userShouldSignIn={false} isPublic={true} >
        <Routes>
          <Route path="/" element={<Home />} />
          { !isSignedIn && <Route path="/signin" element={<SignIn setIsSignedIn={setIsSignedIn} onAccountSignedIn={setAccountSignedIn}/>} />}
          <Route path="/cardselection" element={<CardSelection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PrivateRoutes>
          
    </div>
  );
}

export default App;

import React from "react";
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

  return (
    <div className="app">

      <PrivateRoutes isSignedIn={isSignedIn} userShouldSignIn={true}>
        <NavBar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/client" element={<Client />} />
          <Route path="/new-client" element={<NewClient />} />
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

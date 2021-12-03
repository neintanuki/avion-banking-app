import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Client from "./pages/Client";
import NewClient from "./pages/NewClient";
import Transact from "./pages/Transact";
import TransactionHistory from "./pages/TransactionHistory";
import NavBar from './components/NavBar';
import Footer from "./components/Footer";

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { useState } from 'react';


function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <NavBar />
          
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/client" element={<Client />} />
        <Route path="/new-client" element={<NewClient />} />
        <Route path="/transact" element={<Transact />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
        <Route path="/signin" element={<SignIn setIsSignedIn={setIsSignedIn} />} />
      </Routes>

      
      {/* <Dashboard />
      <Client />
      <NewClient />
      <Transact />
      <TransactionHistory /> */}

      <Footer />
    </>
  );
}

// SIGN IN / LOG OUT
// function SignIn() {
//   return (
//     <div>
//       <div className="signin">
//         <h2>Have a great day!</h2>
//       </div>
//       <div>
        
//       </div>
//     </div>
//   );
// }

export default App;

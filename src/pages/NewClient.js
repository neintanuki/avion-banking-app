import React, { useEffect, useState } from "react";

// NEW CLIENT
export default function NewClient({ isSignedIn, usersDB }) {
  const [initialBalance, setInitialBalance] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function createUserAccount(e) {
    e.preventDefault();

    if (isSignedIn) {
      const users = [...usersDB];
      users.push({
        initialBalance,
        firstName,
        lastName,
        email,
        password
      })

      localStorage.setItem('avion-banking-app', JSON.stringify({
        isSignedIn,
        users
      }))
    }

  }

  return (
    <div className="component-wrapper">
      <div className="newclient">
        <h2>New Client</h2>
        <form action="#">
          <div className="form-control">
            <label className="form-label">Initial Balance:</label>
            <input type="number" className="form-input" onChange={e => {setInitialBalance(e.target.value)}}/>
          </div>
          <div className="form-control">
            <label className="form-label">First Name:</label>
            <input type="text" className="form-input" onChange={e => {setFirstName(e.target.value)}}/>
          </div>
          <div className="form-control">
            <label className="form-label">Last Name:</label>
            <input type="text" className="form-input" onChange={e => {setLastName(e.target.value)}}/>
          </div>
          <div className="form-control">
            <label className="form-label">Email:</label>
            <input type="email" className="form-input" onChange={e => {setEmail(e.target.value)}}/>
          </div>
          <div className="form-control">
            <label className="form-label">Password:</label>
            <input type="password" className="form-input" onChange={e => {setPassword(e.target.value)}}/>
          </div>

          <button className="btn-submit" onClick={createUserAccount}>Create User Account</button>
        </form>
      </div>
      
    </div>
  );
}

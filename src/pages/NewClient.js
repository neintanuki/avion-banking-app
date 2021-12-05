import React, { useState } from "react";

// NEW CLIENT
export default function NewClient({ isSignedIn, users, onUsers }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [initialBalance, setInitialBalance] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function clearStates() {
    setInitialBalance(0);
    setFirstName('');
    setLastName('');
    setUsername('');
    setPassword('');
  }

  function validateInput(val, type, setState) {
    switch (type) {
      case "text":
        if (val.length) {
          // if val is not an empty String
          val = val.toLowerCase();
        }

        if (!val.match(/[\s]/g)) {
          setState(val);
        }
        break;
      case "name":
        if (!val.match(/[0-9|\W]/g)) {
          val = val.replace(/\s{2}/g, " ").toLowerCase().split(" ");

          for (let i = 0; i < val.length; i++) {
            val[i] = val[i].charAt(0).toUpperCase() + val[i].substring(1)
          }

          setState(val.join(" "))

        }
        break;
      case "num":
        const min = 0;
        const max = 1000000;
        
        if (val.match(/[^A-Z|^a-z]/g) || !val.length) {
          val = Number(val);
          if (val >= min && val <= max) {
            setState(val);
          }
        }
        break;
      default:
        setState(val);
    }
  }

  function createUserAccount(e) {
    e.preventDefault();

    if (isSignedIn) {
      if (isAdmin) {
        onUsers([...users, {
          username,
          password,
          isAdmin
        }])
      } else {
        onUsers([...users, {
          initialBalance,
          firstName,
          lastName,
          username,
          password,
          isAdmin
        }])
      }

      localStorage.setItem('avion-banking-app', JSON.stringify({
        isSignedIn,
        users
      }))
    }

    clearStates();
  }

  function toggleRole(e) {
    setIsAdmin(JSON.parse(e.target.value));

    clearStates()
  }

  return (
    <div className="component-wrapper">
      <div className="newclient">
        <h2>New Client</h2>
        <form action="#" onSubmit={createUserAccount}>
          <div className="form-control">
            <label className="form-label">Role:</label>
            <div className="radio">
              <label>
                <input type="radio" name="role" value="true" checked={true === isAdmin} onChange={toggleRole} />
                Admin
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="role" value="false" checked={false === isAdmin} onChange={toggleRole}/>
                User
              </label>

            </div>
          </div>

          { !isAdmin &&
            <> 
            <div className="form-control">
              <label className="form-label">Initial Balance:</label>
              <input type="text" className="form-input" value={initialBalance} min="0" max="1000000" onChange={e => {validateInput(e.target.value, "num", setInitialBalance)}} required/>
            </div>
            <div className="form-control">
              <label className="form-label">First Name:</label>
              <input type="text" className="form-input" value={firstName} onChange={e => {validateInput(e.target.value, "name", setFirstName)}} required/>
            </div>
            <div className="form-control">
              <label className="form-label">Last Name:</label>
              <input type="text" className="form-input" value={lastName} onChange={e => {validateInput(e.target.value, "name", setLastName)}} required/>
            </div>
            </>
          }
          <div className="form-control">
            <label className="form-label">Username:</label>
            <input type="text" className="form-input" value={username} onChange={e => {validateInput(e.target.value, "text", setUsername)}} required/>
          </div>
          <div className="form-control">
            <label className="form-label">Password:</label>
            <input type="password" className="form-input" value={password} onChange={e => {setPassword(e.target.value)}} required/>
          </div>

          <button className="btn-submit">Create Account</button>
        </form>
      </div>
      
    </div>
  );
}

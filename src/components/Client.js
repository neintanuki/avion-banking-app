import React from "react";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// Client
export default function Client() {
  // const [state, setState] = useState([]);

  // useEffect(() => {
  //   userDB();
  // }, []);

  // const userDB = JSON.parse(localStorage.getItem("avion-banking-app"));

  return (
    <div className="client" css={CSS}>
      <h2>Client Database</h2>
      <div className="table">
        <table>
          <thead>
            <tr key={"id-1"}>
              <td>UID</td>
              <td>Name</td>
              <td>Account Number</td>
              <td>Current Balance</td>
              <td><ion-icon name="cash-outline"></ion-icon></td>
            </tr>
          </thead>
          <tbody>
            {/* {state.map((obj, i) => (
              <tr key={`id${i}`} className={i%2===0 ? "" : "light"}>
                <td>{i+1}</td>
                <td>{obj.data.name}</td>
                <td>{obj.data.accountNo}</td>
                <td>{obj.data.balance}</td>
                <td><Link to="/transfer">Transfer Money</Link></td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

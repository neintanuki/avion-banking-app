import React from "react";
// import { Link } from "react-router-dom";


// Client
export default function Client() {



  return (
    <div className="client">
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
                <td><Link to="/transact">Transact</Link></td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

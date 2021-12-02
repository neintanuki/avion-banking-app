import React from "react";
import { useState, useEffect } from "react";

// TRANSACTION HISTORY
export default function TransactionHistory() {
// eslint-disable-next-line
  const [state, setState] = useState([]);

  useEffect(() => {
    
  }, [])

  return (
    <div className="transactionhistory">
      <h2>Transactions History</h2>
      <div className="table">
        <table>
          <thead>
            <tr key={"id-1"}>
              <td>UID</td>
              <td>Payer</td>
              <td>Receiver</td>
              <td>Amount</td>
              <td>Created At</td>
            </tr>
          </thead>
          <tbody>
            {state.map((obj, i) => (
              <tr key={`id${i}`} className={i % 2 === 0 ? "" : "light"}>
                <td>{i+1}</td>
                <td>{obj.data.to}</td>
                <td>{obj.data.from}</td>
                <td>{obj.data.amount}</td>
                <td>{`${obj.data.createdAt?.toDate().toDateString() ? obj.data.createdAt?.toDate().toDateString() : "Not"} ${obj.data.createdAt?.toDate().toLocaleTimeString('en-US') ? obj.data.createdAt?.toDate().toLocaleTimeString('en-US') : "Available"}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

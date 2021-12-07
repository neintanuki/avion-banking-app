import React, { useState } from "react";

// TRANSACT
export default function Transact({ users }) {
  const [transactionType, seTransactionType] = useState("withdraw");
  const [selectedUser, setSelectedUser] = useState('');

  return (
    <div>
      <form className="transact">
        <h2>Transact</h2>

        <h3>Transaction Type:</h3>
        <select id="transaction-type" value={transactionType} onChange={e => {seTransactionType(e.target.value)}}>
          <option value="withdraw">Withdrawal</option>
          <option value="deposit">Deposit</option>
        </select>

        <h3>Select User:</h3>
        <select id="select-user">
          {
            users.map((user, index) => {
              return (
                <option value={index}>{`${user.username} ${user.isAdmin}`}</option>
              )
            })
          }
        </select>

        <button className="btn-submit">{transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}</button>


      </form>
    </div>
  );
}

import React, { useEffect, useState } from "react";

// TRANSACT
export default function Transact({ users }) {
  const [transactionType, seTransactionType] = useState("withdraw");
  const [selectedUser, setSelectedUser] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (users.length) {
      setFilteredUsers(
        users.filter(user => {
          return !user.isAdmin
        })
      )
    }
  }, [users])

  function transact(e) {
    e.preventDefault();

    switch (transactionType) {
      case "withdraw":

        break;
      case "deposit":
        break;
      default:
        alert("type invalid");
    }
  }

  return (
    <div>
      <form className="transact" onSubmit={transact}>
        <h2>Transact</h2>

        <div className="form-control">
          <h3>Transaction Type:</h3>
          <select id="transaction-type" value={transactionType} onChange={e => {seTransactionType(e.target.value)}}>
            <option value="withdraw">Withdrawal</option>
            <option value="deposit">Deposit</option>
          </select>
        </div>

        <div className="form-control">
          <h3>Select User:</h3>
          {
            filteredUsers.length ?
            <select id="select-user">
              {
                filteredUsers.map((user, index) => {
                  return (
                    <option value={index}>{`${user.username} ${user.isAdmin}`}</option>
                  )
                })
              }
            </select> :
            "No Users Found"
          }
        </div>

        <div className="form-control">
          <h3>Enter Amount:</h3>
          <input type="number" className="form-input" />
        </div>

        <button className="btn-submit">{transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}</button>

      </form>
    </div>
  );
}

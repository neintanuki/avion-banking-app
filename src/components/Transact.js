import { useState, useEffect } from 'react';

function Transact({ users, onUsers }) {
    const [transactionType, setTransactionType] = useState("withdraw");
    const [selectedUser, setSelectedUser] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        if (users.length) {
          setFilteredUsers(
            users.filter(user => {
              return !user.isAdmin;
            })
          )
        }

        if (filteredUsers.length) {
          setSelectedUser(filteredUsers[0].accountNumber);
        }
      }, [users])

      function transact(e) {
        e.preventDefault();

        onUsers(
          users.map(user => {
            if (user.accountNumber === selectedUser && !user.isAdmin) {
  
              switch (transactionType) {
                case "withdraw":
                  if (user.initialBalance > amount) {
                    user.initialBalance -= amount;
                  } else {
                    alert("Insufficient Amount");
                  }
                  break;
                case "deposit":
                  user.initialBalance += amount;
                  break;
                default:
                  alert("type invalid");
              }
            }

            return user;
          })

        )
        

      }

      return (
        <div className="component-wrapper">
          <form className="transact" onSubmit={transact}>
            <h2>Transact</h2>
    
            <div className="form-control">
              <h3>Transaction Type:</h3>
              <select id="transaction-type" value={transactionType} onChange={e => {setTransactionType(e.target.value)}}>
                <option value="withdraw">Withdrawal</option>
                <option value="deposit">Deposit</option>
              </select>
            </div>
    
            <div className="form-control">
              <h3>Select User:</h3>
              {
                filteredUsers.length ?
                <select id="select-user" value={selectedUser} onChange={e => setSelectedUser(e.target.value)}>
                  {
                    filteredUsers.map(user => {
                      return (
                        <option key={user.accountNumber} value={user.accountNumber}>{`${user.username} ${user.accountNumber}`}</option>
                      )
                    })
                  }
                </select> :
                "No Users Found"
              }
            </div>
    
            <div className="form-control">
              <h3>Enter Amount:</h3>
              <input type="text" className="form-input" value={amount} onChange={e => setAmount(Number(e.target.value))} />
            </div>
    
            <button className="btn-submit">{transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}</button>
    
          </form>
        </div>
      );
}

export default Transact;
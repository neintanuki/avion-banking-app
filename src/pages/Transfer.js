import { useEffect, useState } from "react";

function Transfer({ users, account, onUsers }) {
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [amount, setAmount] = useState();

    useEffect(() => {
        const clientUsers = users.filter(user => {
            return user.accountNumber !== account && !user.isAdmin
        })
        setFilteredUsers(clientUsers);
        setSelectedUser(clientUsers[0]);
    }, [users, account]);

    function transfer(e) {
        e.preventDefault();

        onUsers(
            users.map(user => {
                if (user.accountNumber === account && user.initialBalance > amount) {
                    user.initialBalance -= amount
                } else if (user.accountNumber === account) {
                    alert("Insufficient Balance")
                }
                
                if (user.accountNumber === selectedUser.accountNumber) {
                    user.initialBalance += amount;
                }

                return user;
            })
        )
    }


    return (
        <div className="component-wrapper">
            <form className="transfer" onSubmit={transfer}>
                <h2>Transfer Funds</h2>
                <div className="form-control">
                    <label className="form-label">Transfer To:</label>
                    <select value={JSON.stringify(selectedUser)} onChange={e => setSelectedUser(JSON.parse(e.target.value))}>
                        {
                            filteredUsers.map((user, index) => {
                                return (
                                    <option value={JSON.stringify(user)} key={index}>{`${user.username} ${user.accountNumber}`}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-control">
                    <label className="form-control">User balance:</label>
                    <input type="number" className="form-input" value={selectedUser.initialBalance} disabled/>
                </div>
                <div className="form-control">
                    <label className="form-control">Amount:</label>
                    <input type="number" className="form-input" value={amount} onChange={e => setAmount(Number(e.target.value))}/>
                </div>

                <button className="btn-submit">Transfer</button>
            </form>
        </div>
    )
}

export default Transfer;
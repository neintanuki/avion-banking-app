import { useState, useEffect } from "react";

function AccountInfo({ users, account }) {
    const [accountNumber, setAccountNumber] = useState('');
    const [initialBalance, setInitialBalance] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    
    useEffect(() => {
        users.forEach(user => {
            if (user.accountNumber === account) {
                setAccountNumber(user.accountNumber);
                setInitialBalance(user.initialBalance);
                setFirstName(user.firstName);
                setLastName(user.lastName);
                setUsername(user.username);
            }
        })
    }, [account])

    return (
        <div className="component-wrapper">
            <div className="account-info">
                <h3>Account Information</h3>
                <div className="form-control">
                    <label className="form-label">Account Number</label>
                    <input type="text" className="form-input" value={accountNumber} disabled/>
                </div>
                <div className="form-control">
                    <label className="form-label">Balance</label>
                    <input type="text" className="form-input" value={initialBalance} disabled/>
                </div>
                <div className="form-control">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-input" value={username} disabled/>
                </div>
                <div className="form-control">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-input" value={firstName} disabled/>
                </div>
                <div className="form-control">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-input" value={lastName} disabled/>
                </div>
            </div>
        </div>
    )
}

export default AccountInfo;
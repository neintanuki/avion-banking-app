import React from "react";

// Client
export default function Client({ users }) {
  return (
    <div className="component-wrapper">
      <div className="client">
        <h2>Client Database</h2>
        <div className="client">
        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Initial Balance</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
          {
            users.map((user, index) => {
              return(
              <tr key={index}>
                <td>{index}</td>
                <td>{user.firstName ? user.firstName : "N/A"}</td>
                <td>{user.lastName ? user.lastName : "N/A"}</td>
                <td>{user.initialBalance === 0 ? user.initialBalance : "N/A"}</td>
                <td>{user.isAdmin ? "Admin" : "User"}</td>
              </tr>
              )
            })
          }
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
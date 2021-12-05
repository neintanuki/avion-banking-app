import React from "react";

// Client
export default function Client({ users }) {
  return (
    <div>
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
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.initialBalance}</td>
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
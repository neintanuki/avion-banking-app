import React from "react";

// NEW CLIENT
function NewClient() {
  return (
    <div>
      <div className="newclient">
        <h2>New Client</h2>
      </div>
      
      <form action="#">
        <div className="form-control">
          <label htmlFor="firstName" className="form-label">First Name:</label>
          <input type="text" className="form-input" />
        </div>
      </form>
    </div>
  );
}

export default NewClient;
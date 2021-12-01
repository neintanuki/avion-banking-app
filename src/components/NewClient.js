import React from "react";
import { useState, addUser } from "react";


// NEW CLIENT
export default function NewClient() {
  const [state, setState] = useState({
    name: "",
    accountNo: "",
    balance: "",
    db: {},
  });

  const submitHandler = (event) => {
    event.preventDefault();
    state.db[state.accountNo] = [state.name, state.accountNo, state.balance]
    addUser(state.db[state.accountNo])
    setState({...state, name: "", accountNo: "", balance: ""})
  }

  return (
    <div className="newclient" css={CSS}>
      <h2>New Client</h2>
      <form onSubmit={submitHandler} className="form">
        <div className="form-item">
          <label className="label" htmlFor="name">
            Enter Full Name:
          </label>
          <input
            type="text"
            name="name"
            className="input"
            value={state.name}
            placeholder="Full Name"
            onChange={(event) =>
              setState({ ...state, name: event.target.value })
            }
          />
        </div>
        <div className="form-item">
          <label htmlFor="account-no" className="label">
            Enter Account Number:
          </label>
          <input
            type="number"
            name="account-no"
            className="input"
            min={100000}
            max={999999}
            value={state.accountNo}
            placeholder="6-digit Account Number"
            onChange={(event) =>
              setState({ ...state, accountNo: event.target.value })
            }
          />
        </div>
        <div className="form-item">
          <label htmlFor="balance" className="label">
            Enter Balance:
          </label>
          <input
            type="number"
            name="balance"
            className="input"
            min={0}
            value={state.balance}
            placeholder="Enter Balance"
            onChange={(event) =>
              setState({ ...state, balance: event.target.value })
            }
          />
        </div>
        <div className="form-item">
          <button className="btn-nc" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
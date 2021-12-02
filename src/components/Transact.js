import React from "react";


// TRANSACT
export default function Transact() {
  return (
    <div className="transact">
      <h2>Transact</h2>
      <form className="form">
      {/* onSubmit={handleSubmit} */}
        <div className="form-item">
          <label htmlFor="from" className="label">
            Transfer from:
          </label>
          <input
            type="number"
            min={100000}
            max={999999}
            name="from"
            className="input"
            placeholder="Account Number"
            // value={state.to}
            // onChange={(e) => setState({ ...state, to: e.target.value })}
          />
        </div>
        <div className="form-item">
          <label htmlFor="from" className="label">
            Transfer to:
          </label>
          <input
            type="number"
            min={100000}
            max={999999}
            name="from"
            className="input"
            placeholder="Account Number"
            // value={state.from}
            // onChange={(e) => setState({ ...state, from: e.target.value })}
          />
        </div>
        <div className="form-item">
          <label htmlFor="from" className="label">
            Enter Amount:
          </label>
          <input
            type="number"
            min={1}
            name="from"
            className="input"
            placeholder="Amount"
            // value={state.amount}
            // onChange={(e) => setState({ ...state, amount: e.target.value })}
          />
        </div>
        <div className="form-item">
          <button type="submit" className="btn-nc">
            Transfer
          </button>
        </div>
      </form>
    </div>
  );
}

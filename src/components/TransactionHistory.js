import React from "react";

// TRANSACTION HISTORY
function TransactionHistory({ transactionHistory }) {
  return (
    <div className="component-wrapper">
      <div className="transactionhistory">
        <h2>Transaction History</h2>
        <div className="history">
            {
                transactionHistory.map((history, index) => {
                  return (
                    <div className="history-entry" key={index}>
                        <h3>{`You made a ${history.action} to your account`}</h3>
                        {history.transferTo && <p>Transferred To: {history.transferTo}</p>}
                        <p>{`Transaction made on: ${history.date}`}</p>
                        <p>{`Amount: ${history.amount}`}</p>
                    </div>
                  )
                })
            }
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory;
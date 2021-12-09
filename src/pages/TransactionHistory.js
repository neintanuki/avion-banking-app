import React, { useState, useEffect } from "react";
import TransactionHistoryComponent from '../components/TransactionHistory';

// TRANSACTION HISTORY
function TransactionHistory({ account, users }) {
  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    if (account) {
      users.forEach(user => {
        if(user.accountNumber === account) {
          setTransactionHistory(user.transactionHistory);
        }
      })
    }
  }, [account, users])

  return <TransactionHistoryComponent  transactionHistory={transactionHistory} />
}

export default TransactionHistory;
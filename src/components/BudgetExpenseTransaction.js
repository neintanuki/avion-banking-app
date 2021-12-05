import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const BudgetExpenseTransaction = ({expenseTransactions}) => {
    const {deleteBudgetTransaction} = useContext(GlobalContext)
    return (
        <li className="transaction">
            <span className="transaction-text">{expenseTransactions.expenseText}</span>
            <span className="transaction-amount">Php{expenseTransactions.expenseAmount}</span>
            <button className="delete-btn" onClick={() => deleteBudgetTransaction(expenseTransactions.id)}>
                <i className="fas fa-trash fa-xs"></i>
            </button>
        </li>
    )
}

export default BudgetExpenseTransaction

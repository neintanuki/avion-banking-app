import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const BudgetIncomeTransaction = ({incomeTransactions}) => {
    const {deleteBudgetTransaction} = useContext(GlobalContext)
    return (
        <li className="transaction">
            <span className="transaction-text">{incomeTransactions.incomeText}</span>
            <span className="transaction-amount">Php{incomeTransactions.incomeAmount}</span>
            <button className="delete-btn" onClick={() => deleteBudgetTransaction(incomeTransactions.id)}>
                <i className="fas fa-trash fa-xs"></i>
            </button>
        </li>
    )
}

export default BudgetIncomeTransaction

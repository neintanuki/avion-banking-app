import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import BudgetExpenseTransaction from './BudgetExpenseTransaction'
 

const BudgetExpenseList = () => {
    const{expenseTransactions} = useContext(GlobalContext)
    console.log(expenseTransactions);
    return (
        <div className="transactions transactions-expense">
            <h2>Expense History</h2>
            <ul className="transaction-list">
            {expenseTransactions.map(expenseTransactions =>(
                <BudgetExpenseTransaction key={expenseTransactions.id} expenseTransactions={expenseTransactions} />
            ))}
            </ul>
        </div>
    )
}

export default BudgetExpenseList

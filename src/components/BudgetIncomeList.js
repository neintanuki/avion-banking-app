import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import BudgetIncomeTransaction from './BudgetIncomeTransaction'

const BudgetIncomeList = () => {
    const{incomeTransactions} = useContext(GlobalContext)
    console.log(incomeTransactions);
    return (
        <div className="transactions transactions-income">
            <h2>Income History</h2>
            <ul className="transaction-list">
            {incomeTransactions.map(incomeTransactions =>(
                <BudgetIncomeTransaction key={incomeTransactions.id} incomeTransactions={incomeTransactions} />
            ))}
            </ul>
        </div>
    )
}

export default BudgetIncomeList

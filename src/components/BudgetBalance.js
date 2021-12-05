import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const BudgetBalance = () => {
    const {incomeTransactions, expenseTransactions} = useContext(GlobalContext)

    const incomeAmounts = incomeTransactions.map(
        incomeTransactions => incomeTransactions.incomeAmount
        
    );
    const expenseAmounts = expenseTransactions.map(
        expenseTransactions => expenseTransactions.expenseAmount
    );

    const totalIncome = incomeAmounts
    .reduce((acc, incomeAmounts) => (acc += incomeAmounts), 0)
    .toFixed(2);

  const totalExpense = expenseAmounts
    .reduce((acc, expenseAmounts) => (acc += expenseAmounts), 0)
    .toFixed(2);

    return (
        <div className="balance">
            <h2>Current Balance</h2>
            <h3>Php{(totalIncome - totalExpense).toFixed(2)}</h3>
            <div className="income-expense">
                <div className="plus">
                    <h3>Income</h3>
                    <p>+Php{totalIncome}</p>
                </div>
                <div className="minus">
                    <h3>Expense</h3>
                    <p>-Php{totalExpense}</p>
                </div>
            </div>
        </div>
    )
}

export default BudgetBalance

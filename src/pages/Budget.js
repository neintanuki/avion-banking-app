import React from 'react'
import './styles/Budget.css'

import Balance from '../components/Balance'
import BudgetAddTransact from '../components/BudgetAddTransact'
import BudgetIncomeList from '../components/BudgetIncomeList'
import BudgetExpenseList from '../components/BudgetExpenseList'


const Budget = () => {
    return (
        <div className="container">
            <div className="app-wrapper">
                <div className="header">
                    <h1>Budget</h1>
                </div>
                <Balance />
                <BudgetAddTransact />
                <BudgetIncomeList />
                <BudgetExpenseList />
            </div>
        </div>
    )
}

export default Budget;

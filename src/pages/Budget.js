import React from 'react'
import './styles/Budget.css'

import BudgetBalance from '../components/BudgetBalance'
import BudgetAddTransact from '../components/BudgetAddTransact'
import BudgetIncomeList from '../components/BudgetIncomeList'
import BudgetExpenseList from '../components/BudgetExpenseList'
import { GlobalContextProvider } from '../context/GlobalState'

const Budget = () => {
    return (
        <GlobalContextProvider>
        <div className="container">
            <div className="app-wrapper">
                <div className="header">
                    <h1>Budget</h1>
                </div>
                <BudgetBalance />
                <BudgetAddTransact />
                <BudgetIncomeList />
                <BudgetExpenseList />
            </div>
        </div>
        </GlobalContextProvider>
    )
}

export default Budget;

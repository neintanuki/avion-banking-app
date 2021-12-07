import React from 'react'
import './styles/Budget.css'

import Balance from '../components/Balance'
import AddTransact from '../components/AddTransact'
import IncomeList from '../components/IncomeList'
import ExpenseList from '../components/ExpenseList'
import { GlobalContextProvider } from '../context/GlobalState'

const Budget = () => {
    return (
        <GlobalContextProvider>
        <div className="container">
            <div className="app-wrapper">
                <div className="header">
                    <h1>Budget</h1>
                </div>
                <Balance />
                <AddTransact />
                <IncomeList />
                <ExpenseList />
            </div>
        </div>
        </GlobalContextProvider>
    )
}

export default Budget;

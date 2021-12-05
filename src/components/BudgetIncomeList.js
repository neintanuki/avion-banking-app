import React from 'react'

const BudgetIncomeList = () => {
    return (
        <div className="transactions transactions-income">
            <h2>Income History</h2>
            <ul className="transaction-list">
                <li className="transaction">
                    <span className="transaction-text">Salary</span>
                    <span className="transaction-amount">Php5000</span>
                    <button className="delete-btn">
                        <i className="fas fa-trash fa-xs"></i>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default BudgetIncomeList

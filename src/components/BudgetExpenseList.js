import React from 'react'

const BudgetExpenseList = () => {
    return (
        <div className="transactions transactions-expense">
            <h2>Expense History</h2>
            <ul className="transaction-list">
                <li className="transaction">
                    <span className="transaction-text">Rent</span>
                    <span className="transaction-amount">Php500</span>
                    <button className="delete-btn">
                    <i className="fas fa-trash fa-xs"></i>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default BudgetExpenseList

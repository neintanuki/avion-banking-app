import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    incomeTransactions: [ // JSON.parse(localStorage.getItem("incomeTransactions")) ||
        {id: 1, incomeText: "Car sold", incomeAmount: 15000},
        {id: 2, incomeText: "Salary", incomeAmount: 5000},
        {id: 3, incomeText: "Bonus", incomeAmount: 13000}
    ],
    expenseTransactions: [ // JSON.parse(localStorage.getItem("expenseTransactions")) ||
        {id: 4, expenseText: "Rent", expenseAmount: 1000},
        {id: 5, expenseText: "Bank", expenseAmount: 2000},
        {id: 6, expenseText: "Clothes", expenseAmount: 500}
    ]
}

export const GlobalContext = createContext(initialState)

export const GlobalContextProvider = ({children}) => {
    const[state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem("incomeTransactions", JSON.stringify(state.incomeTransactions))
        localStorage.setItem("expenseTransactions", JSON.stringify(state.expenseTransactions))
    })

    const deleteBudgetTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id,
        });
    };

    const addIncome = incomeTransactions => {
        dispatch({
            type: 'ADD_INCOME',
            payload: incomeTransactions,
        });
    };

    const addExpense = expenseTransactions => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expenseTransactions,
        });
    };

    return (
        <GlobalContext.Provider value={{
            incomeTransactions: state.incomeTransactions,
            expenseTransactions: state.expenseTransactions,
            deleteBudgetTransaction,
            addIncome,
            addExpense
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
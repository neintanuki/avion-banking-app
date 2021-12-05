import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { GlobalContext } from '../context/GlobalState';

const BudgetAddTransact = () => {
    const {addIncome, addExpense} = useContext(GlobalContext);

    // INCOME
    const[budgetIncome, setBudgetIncome] = useState({
        incomeText: "",
        incomeAmount: 0,
    });

    // const { incomeText, incomeAmount } = income;

    const onChangeBudgetIncome = (e) => {
        setBudgetIncome({...budgetIncome, [e.target.name]: e.target.value});
    };

    const onSubmitBudgetIncome = (e) => {
        e.preventDefault();

        if(budgetIncome !== "") {
            const newIncomeTransaction = {
                id: uuidv4(),
                incomeText: budgetIncome.incomeText,
                incomeAmount: budgetIncome.incomeAmount,
            };
            console.log(newIncomeTransaction);
            addIncome(newIncomeTransaction);
            setBudgetIncome({
                incomeText: "",
                incomeAmount: 0,
            });
        }
    };

    // EXPENSE
    const[budgetExpense, setBudgetExpense] = useState({
        expenseText: "",
        expenseAmount: 0,
    });

    const onChangeBudgetExpense = (e) => {
        setBudgetExpense({...budgetExpense, [e.target.name]: e.target.value});
    };

    const onSubmitBudgetExpense = (e) => {
        e.preventDefault();

        if(budgetExpense !== "") {
            const newExpenseTransaction = {
                id: uuidv4(),
                expenseText: budgetExpense.expenseText,
                expenseAmount: budgetExpense.expenseAmount,
            };
            console.log(newExpenseTransaction);
            addExpense(newExpenseTransaction);
            setBudgetExpense({
                expenseText: "",
                expenseAmount: 0,
            });
        }
 
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmitBudgetIncome}>
                <div className="input-group income">
                    <input type="text" name="incomeText" value={budgetIncome.incomeText} placeholder="Add Income..." autoComplete="off" onChange={onChangeBudgetIncome}/>
                    <input type="number" name="incomeAmount" value={budgetIncome.incomeAmount} placeholder="Amount" autoComplete="off" onChange={onChangeBudgetIncome}/>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            <form onSubmit={onSubmitBudgetExpense}>
                <div className="input-group expense">
                    <input type="text" name="expenseText" value={budgetExpense.expenseText} placeholder="Add Expense..." autoComplete="off" onChange={onChangeBudgetExpense}/>
                    <input type="number" name="expenseAmount" value={budgetExpense.expenseAmount} placeholder="Amount" autoComplete="off" onChange={onChangeBudgetExpense}/>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default BudgetAddTransact

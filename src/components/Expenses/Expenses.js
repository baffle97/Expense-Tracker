import React, { useState } from "react";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const yearHandler = (selectedYear) => {
    console.log("in expenses js");
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };
  const filteredList = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeYear={yearHandler} />
        <ExpensesChart expenses={filteredList} />
        <ExpensesList items={filteredList} />
      </Card>
    </div>
  );
};

export default Expenses;

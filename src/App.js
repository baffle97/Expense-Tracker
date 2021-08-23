import react, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  { id: "1", title: "Car Insurance", price: 294, date: new Date() },
  { id: "2", title: "Home Insurance", price: 700, date: new Date() },
  { id: "3", title: "Personal Insurance", price: 500, date: new Date() },
  { id: "4", title: "Health Insurance", price: 300, date: new Date() },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

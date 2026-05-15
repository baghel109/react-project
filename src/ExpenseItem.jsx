import React from "react";

function ExpenseItem({ item, onDelete }) {
  console.log(item);
  return (
    <>
      <div className="expenseList">
        <div className="expenseItem" key={item.id}>
          <span>{item.title}</span>

          <div className="right">
            <span>₹{item.amount.toFixed(2)}</span>

            <button
              className="deleteBtn"
              onClick={() => deleteExpense(item.id)}
            >
              ❌
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;

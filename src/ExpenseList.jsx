import React from 'react'
import ExpenseItem from './ExpenseItem'

function ExpenseList({expenses, onDelete}) {
  console.log(expenses.length)
  if(expenses.length === 0){
    return (
    <div className='container mb-5'>
      <div className='card'>
        <div className='header'></div>
        <div className='body'></div>
    <h1>No Expense Record</h1>
     </div>

      </div> 
    )
  }

  console.log(expenses)
  expenses.map((expense)=>{
      console.log(expense.amount)
  })
  return (
    <>
      <h1>Expense List:</h1>
      <div className='container'>
      <div className='card'>
        <div className='header'></div>
        <div className='body'></div>
      {expenses.map((item)=> (
          <ExpenseItem key={item.id} item={item} onDelete={onDelete}/> 
      ))}

         </div>

      </div> 

    
    </>
  )
}

export default ExpenseList
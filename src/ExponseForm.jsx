import React, { useState, useRef } from 'react'

function ExponseForm({onAddExpense}) {
    const [title, setTitle]= useState("")
    const [amount, setAmount] = useState("")
    const titleRef = useRef()

    function addExpenseSubmit(e){
        e.preventDefault()

        console.log(title, amount)

        if(!title || !amount) return alert('Please fill all fields')
        
        const newExpense = {
            id: Date.now(),
            title,
            amount: parseFloat(amount)
        } 

        onAddExpense(newExpense)
        setTitle("")
        setAmount("")
        titleRef.current.focus() 
    }



  return (
    <>

            <div className='container'>   
            <div className="expenseForm">
                <h1>Expense Form</h1>
                <form onSubmit={addExpenseSubmit}>
                        Title 😁: <input type="text" placeholder="Expense Title" value={title} onChange={ (e) => setTitle(e.target.value)} ref={titleRef}/> &nbsp;&nbsp;
                        Amount 💰: <input type="number" placeholder="Expense Amount" value={amount} onChange={ (e) => setAmount(e.target.value) }/> &nbsp;&nbsp;
                        <button type="submit">Add Expense</button>
                </form>
            </div>
            </div>
        
    </>
    
  )
}

export default ExponseForm
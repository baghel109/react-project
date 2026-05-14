import { useState } from 'react'

function Todo(){
    const [newTodo, setNewTodo] = useState('')
    // const [todos, setTodos] = useState([
    // { text: "HTML", completed: false },
    // { text: "CSS", completed: false }])

    const [todos, setTodos]  = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(newTodo){
            setTodos([... todos, {text:newTodo.toUpperCase(), completed: false}])
            setNewTodo('')
        }
    }

    const handleComplete = (index) => {
    //     const updatedTodos = todos.filter(
    //     (todo, index) => index !== deleteIndex
    // )

    // setTodos(updatedTodos)

        const updatedTodos = [...todos]

        updatedTodos[index].completed =
            !updatedTodos[index].completed

        setTodos(updatedTodos)
        
    }

    //  const handleDelete = (index) => {
    //     const updatedTodos = [...todos]
    //     const updatedTodos = updatedTodos.filter(
    //     (todo, index) => index !== index
    // )
    //  console.log('dletel');
    // console.log(todos, updatedTodos);

    //     setTodos(updatedTodos)
        
    // }


    return (
        <>
            <h1>Todo - ReactJS Todos App Project Tutorial in Hindi / Urdu</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Add New Todo" value={newTodo} onChange={(e)=> setNewTodo(e.target.value)}/>
                    <input type="submit" value="save"/>
                </div>
            </form>


            <ul>
                {todos.map((todo, index)=>(
                        <li key={index}>
                           <span style={{ textDecoration: todo.completed ? 'line-through' : 'none',  textDecorationColor: todo.completed ? 'red' : 'blue',

      color: 'yellow', display: 'flex',
                alignItems: 'center',
                gap: '10px'}}><h1 style={{color: 'black'}}> {todo.text}</h1>
                           <button onClick={()=> handleComplete(index)} style={{textDecorationColor:'none'}}>Complete</button>
                           {/* <button onClick={()=> handleDelete(index)} style={{textDecorationColor:'none'}}>Del</button> */}
                           </span>
                        </li>
                        
                ))}
            </ul>
        </>
    )
}

export default Todo
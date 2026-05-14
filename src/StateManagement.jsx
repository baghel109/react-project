import { useState } from "react"

function StateManagement(){
    const [count, setCount]= useState(0)

    const increase = () => {
        setCount(count + 1)
    }

    const decrease= () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }


    
    return (
        <>
        Count: {count}

            <button onClick={increase}>Increase 👍</button>
            <br></br>

            <button onClick={decrease}>Decrease 👎</button>
        </>
    )
    
}

export default StateManagement
import {useState, useEffect} from 'react'

function First(){
    const [count, setCount] = useState(0)
    const [name, setName] = useState('sonu')
    const [user, setUser] = useState([])

    useEffect( () => {
        document.title= `Count : ${count}`

    const interval = setInterval(()=> {
        setCount(count + 1)
    },2000)
        // setCount(count + 1)
        console.log('use effect calling')



        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setUsers(data)
            })






    },[name, count])

    return (
        clearInterval(interval)
    )







    return (
        <>
         
         <div style={{display:'flex', gap: '10px', margin: '10px'}}>
            
               <h1> {count} - use effect check </h1>
            <button onClick={()=> setCount(count + 1)}>Increase</button>
            <button onClick={ ()=> count  > 0 ? setCount(count - 1) : 0}> Decrease</button>

            <input type="text" value={name} onChange={() => setName('arjun')}/>


            
       </div>
       
        </>
    )
}

export default First
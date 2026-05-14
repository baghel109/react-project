import { useEffect, useState } from "react"


function ApiCallTask () {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
    , []})

    return (
        <>
            Api call page:

            <h1>user list:</h1>
            <ul>
                {users.map((u) => (
                    <li>{u.id} - {u.name} - {u.email}</li>

                ))}
            </ul>
            
        </>
    )
}


export default ApiCallTask
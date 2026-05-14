

function PropsWorld(props){
    console.log(props)

    // destructuring

    const {name="test", age=18, email="test@email.com", color="skyblue", fruits=[]} = props

    console.log(fruits)

    return (
        <>
        <div className="propsworld" style={{ backgroundColor: color }} >
            {/* <h2>Name: {props.name} and Age: {props.age}</h2> */}
            <h1>Name: {name}</h1>
            <h1>Email: {email}</h1>
            <h1>Age: {age}</h1>
        <ul>
            {fruits.map((val, index)=> (
                <li>{val}</li>
            ))} 
        
        </ul>


        </div>



        </>
    )
     
    
}

export default PropsWorld
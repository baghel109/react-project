import React, {useRef, useState} from 'react'

function SimpleForm() {
    const [name, setName] = useState("Ts")
    const [email, setEmail] = useState("Ts@yahoo.com")

    

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('handlesubmit function call')
        console.log("name:", name)
        console.log("email", email)
    }

  return (
    <>
        <div>SimpleForm</div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    placeholder='Enter Name' 
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />

                {/* <input type="text" placeholder='Enter Name' ref={nameRef}/> */}
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    placeholder='Enter Email' 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />

                {/* <input type="text" placeholder='Enter Email' ref={emailRef}/> */}
            </div>
            <div>
                <input type="submit" value="save" className='text-xl md:text-5xl'/>
            </div>
        </form>
    </>
  )
}

export default SimpleForm
function Test() {

    function getName(){
        return "getName function() call"
    }

    function getYourName(name='test'){
        return name;
    }

    const getEmail = (email) => {
        return email
    }

    const alertShow = () => {
        alert('hello')
    }

    const handleInput= (event) => {
        console.log('hit handleinput function')
        console.log(event.target.value)
    }

    const handleMouseOver = () => {
        console.log('on mouseover')
    }

    const handleDoubleClick = () => {
        console.log('double click')
    }

    return (
        <> 

            <h2>Test function call</h2>
            <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dicta iste illo tempore facere nostrum neque voluptas doloribus quasi ad, reprehenderit omnis provident atque culpa sunt incidunt magnam soluta accusamus.</p>
            <h1>{getName()} here........</h1>        
            <h3>{getYourName('world')}</h3>
            <h5>{getEmail('abc@gmail.com')}</h5>
            <button onClick={alertShow}>Hit Button</button>
            <button onClick={()=>alert('hello it is a inline function.')}>Inline Btn</button>
            <input type="text" onChange={handleInput}/>
        
        </>
    )
    
    
    
    
}

export default Test
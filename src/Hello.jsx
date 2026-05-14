import './App.css'
 
 function Hello() {
    const name=' and learn React';
    const heading = {
        color:"red",
        fontSize: 30,
        fontFamily: "'Courier New', Courier, monospace"
    }

    return <h3 style={heading}>hello world {name}</h3>
}

export default Hello
function Button(props){
    const {label, clickMethod}= props
    return (
        <>
            <button onClick={clickMethod}>{label}</button>
        </>
    )
}

export default Button
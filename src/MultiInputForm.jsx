import React, {useState} from 'react'

function MultiInputForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        gender: "",
        agree: false

    })

    function handleFormData(e){
         e.preventDefault()
        console.log('handleMultipleFormData clicked')
        console.log(formData)
    }

    // function handleChange(e){
    //     e.preventDefault()
    //     console.log('handleChange')
    //     const { name, value } = e.target

    // }

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData((prev)=> ({
            ...prev,
            [name]: value 
        }))
    }

  return (
    <>
        <div>MultiInputForm</div>

        <form onSubmit={handleFormData}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            </div>

            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}/>
            </div>

            <div>
                <label>Age:</label>
                <input type="number" name="age" value={formData.age} onChange={handleChange}/>
            </div>

            <div>
                <label>Gender:</label>
                Male: <input type="radio" name="gender" onChange={handleChange}/>
                Female: <input type="radio" name="gender" onChange={handleChange}/>
            </div>

            <div>
                <input type="checkbox" name="isagree" value={formData.isagree} onChange={handleChange}/>
                <label>Agree:</label>
            </div>

            <div>
                <input type="submit" />
            </div>

        </form>
    </>
  )
}

export default MultiInputForm
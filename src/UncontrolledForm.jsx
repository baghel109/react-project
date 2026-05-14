import {useRef} from 'react'

function UncontrolledForm() {

    // const nameRef = useRef()
    // const emailRef = useRef()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log('handlesubmitform')
    //     console.log(nameRef.current.value)
    //     console.log(emailRef.current.value)
    // }

    const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const ageRef = useRef();
  const genderRef = useRef();
  const fileRef = useRef();
  const colorRef = useRef();
  const dateRef = useRef();
  const rangeRef = useRef();
  const messageRef = useRef();

  // checkbox refs
  const htmlRef = useRef();
  const cssRef = useRef();
  const jsRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // checkbox values
    let skills = [];

    if (htmlRef.current.checked) {
      skills.push("HTML");
    }

    if (cssRef.current.checked) {
      skills.push("CSS");
    }

    if (jsRef.current.checked) {
      skills.push("JavaScript");
    }


     // Name Validation
    if (name === "") {
      alert("Name is required");
      return;
    }

    // Email Validation
    if (email === "") {
      alert("Email is required");
      return;
    }

    // Email Pattern Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Invalid Email");
      return;
    }

    // Password Validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    alert("Form Submitted Successfully");

    // all form data
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      age: ageRef.current.value,
      gender: genderRef.current.value,
      skills: skills,
      file: fileRef.current.files[0]?.name,
      favoriteColor: colorRef.current.value,
      birthDate: dateRef.current.value,
      range: rangeRef.current.value,
      message: messageRef.current.value,
    };

    console.log(formData);
    alert("Form Submitted Successfully");
  };

    return (
        <>
            <h1>uncontrolled form</h1>
            {/* <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" ref={nameRef} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" ref={emailRef} />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form> */}
            <div>
              <form onSubmit={handleSubmit}>

        {/* text */}
        <label>Name:</label>
        <br />
        <input type="text" ref={nameRef} placeholder="Enter Name" />
        <br /><br />

        {/* email */}
        <label>Email:</label>
        <br />
        <input type="email" ref={emailRef} placeholder="Enter Email" />
        <br /><br />

        {/* password */}
        <label>Password:</label>
        <br />
        <input type="password" ref={passwordRef} />
        <br /><br />

        {/* number */}
        <label>Age:</label>
        <br />
        <input type="number" ref={ageRef} />
        <br /><br />

        {/* radio */}
        <label>Gender:</label>
        <br />
        <input type="radio" name="gender" value="Male" ref={genderRef} defaultChecked />
        Male

        <input type="radio" name="gender" value="Female" />
        Female
        <br /><br />

        {/* checkbox */}
        <label>Skills:</label>
        <br />

        <input type="checkbox" ref={htmlRef} />
        HTML

        <input type="checkbox" ref={cssRef} />
        CSS

        <input type="checkbox" ref={jsRef} />
        JavaScript
        <br /><br />

        {/* file */}
        <label>Upload File:</label>
        <br />
        <input type="file" ref={fileRef} />
        <br /><br />

        {/* color */}
        <label>Favorite Color:</label>
        <br />
        <input type="color" ref={colorRef} />
        <br /><br />

        {/* date */}
        <label>Date of Birth:</label>
        <br />
        <input type="date" ref={dateRef} />
        <br /><br />

        {/* range */}
        <label>Range:</label>
        <br />
        <input type="range" min="0" max="100" ref={rangeRef} />
        <br /><br />

        {/* textarea */}
        <label>Message:</label>
        <br />
        <textarea ref={messageRef}></textarea>
        <br /><br />

        {/* select */}
        <label>City:</label>
        <br />
        <select>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Jaipur</option>
        </select>
        <br /><br />

        {/* submit */}
        <button type="submit">Submit</button>

      </form>
    </div>
        </>
    )
    
}

export default UncontrolledForm
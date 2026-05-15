import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function AboutUs(params) {

  const {id} = useParams()
  const navigate = useNavigate()
  const goToBack = () => {       
       navigate('/home/'+ id)
  }
 
  return (
    <>
      <div>AboutUs</div>
      <button onClick={goToBack}>Back</button>
    </>
  )
}

export default AboutUs
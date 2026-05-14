import React from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import AboutUs from './AboutUs'

function Home(param) {
  const {id} = useParams()

  const navigate = useNavigate()

  const goToAbout = () => {
    navigate('/about-us ')
  }
  return (
    <>
      <div>Home User profile for id: - {id}</div>
      <button onClick={goToAbout} style={{ display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px auto",
    padding: "12px 24px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>About Us</button>
    </>
  )
}

export default Home
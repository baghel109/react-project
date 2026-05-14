import React from 'react'
import {useParams } from 'react-router-dom'

function Home(param) {
  const {id} = useParams()
  return (
    <div>Home User profile for id: - {id}</div>
  )
}

export default Home
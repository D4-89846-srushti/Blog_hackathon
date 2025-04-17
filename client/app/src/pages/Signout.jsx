import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Signout() {

  const navigate = useNavigate()
  function onCancel (){
   navigate('/home/allblogs')
  }

  function onSignout(){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('name')
    navigate('/')
  }

  return (
    <div>
      <h3>Are sure you want to signout ?</h3>
      <button className="btn btn-success mybtn" onClick={onCancel} >Cancel</button>
      <button className="btn btn-danger mybtn" onClick={onSignout} >signout</button>
    </div>
  )
}

export default Signout

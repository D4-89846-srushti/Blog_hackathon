import React from 'react'
import { Routes , Route, Outlet} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default Home

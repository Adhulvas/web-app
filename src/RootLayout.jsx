import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import './RootLayout.css'
import Footer from './components/Footer/Footer'


function RootLayout() {
  return (
    <div className='main-container'>
      <NavBar />
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default RootLayout
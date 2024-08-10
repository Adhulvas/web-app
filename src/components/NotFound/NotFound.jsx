import React from 'react'
import { Link } from 'react-router-dom'
import error from '../../assets/404_page-not-found.png'
import './NotFound.css'

function NotFound() {
  return (
    <div className='error-container'>
      <div className='image-container'>
        <img src={error} className='error-code'/>
        <Link to={'/home'} className='d-flex justify-content-center text-decoration-none'>Go back to Home</Link>
      </div>
    </div>
  )
}

export default NotFound
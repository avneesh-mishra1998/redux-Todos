import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav-div'>
        <Link to="/" className='nav-link'>Todos </Link>
        <Link to="/about" className='nav-link'>About </Link>
    </div>
  )
}

export default Navbar
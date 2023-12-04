import React from 'react'
import { GiKnifeFork } from 'react-icons/gi'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
    <div className='logo'>
        <Link to="/" className='flex'>
            <GiKnifeFork />
            <p>deliciousss</p>
        </Link>
        
    </div>
    </nav>
  )
}

export default Navbar
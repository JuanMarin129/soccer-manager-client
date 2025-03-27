import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    
    <div id="navbar">
             <Link to="/signup"><button>Sign In</button></Link>
             <Link to="/login"><button>Log In</button></Link>   
    </div>

  )
}

export default Navbar

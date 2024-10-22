import React from 'react'
import './navy.css'
import Link from 'next/link'

const Navy = () => {
  return (
    <div className="main">
      <div className="Navbar">
        <span className="nav-logo">
            Pillarfin Solutions
        </span>
        <div className="nav-items">
            <Link href="/services">Services</Link>
            <Link href="/about">About Us</Link>
            <Link href="/story">Our Story</Link>    
        </div>
        <div className="buttonContainer">
            
        </div>
      </div>
    </div>
  )
}

export default Navy
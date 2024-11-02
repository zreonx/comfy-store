import React from 'react'
import Logo from './Logo'
import LinksDropdown from './LinksDropdown'
import NavLinks from './NavLinks'

function Navbar() {
  return (
    <nav className='bg-muted py-4'>
      <div className='align-element flex justify-between items-center'>
        <Logo />
        <LinksDropdown />
        <NavLinks />
        
      </div>
    </nav>
  )
}

export default Navbar

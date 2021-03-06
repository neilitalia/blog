import React from 'react'
import { Link } from 'gatsby'

const NavBar: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full fixed top-0 left-0 right-0 backdrop-blur backdrop-brightness-75 backdrop-saturate-150">
      <a href="https://neilitalia.dev" className="p-4 text-amber-400 underline decoration-amber-400 decoration-wavy underline-offset-4">neilitalia.dev</a>
      <div>
        <Link to="/" className="p-4">Blog</Link>
        <Link to="/about" className="p-4">About</Link>
        <a href="https://neilitalia.dev/#contact" className="p-4">Contact</a>
      </div>
    </div>
  )
}

export default NavBar

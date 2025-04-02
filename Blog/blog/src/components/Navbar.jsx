import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="bg-black p-8 flex justify-between items-center">
  <h1 className="text-yellow-400 font-bold text-2xl">IMDB Blog</h1>
  <ul className="flex space-x-6 text-white text-center">
  <li className="relative group">
  <Link to="/" className="px-3 hover:text-yellow-400 text-center">
    Home
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>
</li>
<li className="relative group">
  <Link to="/blogsummary" className="px-3 hover:text-yellow-400 text-center">
    Blog Summary
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>
</li>

  </ul>
</nav>
    </div>
  )
}

export default Navbar

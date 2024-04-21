// Navbar.tsx
import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
const user = true

  return (
    <div className='flex w-full p-4 bg-green-900 bg-opacity-35'>
      <nav className='flex w-full relative justify-around'>
        {user ? (
          <Link to="/login" className='text-2xl text-white font-semibold'>Логин</Link>
        ) : (
          <Link to="/chat" className='text-2xl text-white font-semibold'>Чат</Link>
        )}
        <button className='text-2xl text-white font-semibold'>
          {user ? "Выйти" : "Login"}
        </button>
      </nav>
    </div>
  )
}

export default Navbar

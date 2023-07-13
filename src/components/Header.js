import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='flex flex-row justify-between my-10'>
        <p className='text-3xl font-bold'>#VANLIFE</p>
        <nav className='flex gap-11'>
            <NavLink to='host' className='font-normal text-lg hover:text-gray-500 hover:text-xl ease-in-out delay-75'>Host</NavLink>
            <NavLink to='about' className='font-normal text-lg hover:text-gray-500 hover:text-xl ease-in-out delay-75'>About</NavLink>
            <NavLink to='vans' className='font-normal text-lg hover:text-gray-500 hover:text-xl ease-in-out delay-75'>Vans</NavLink>
            <NavLink to='login' className='font-normal text-lg hover:text-gray-500 hover:text-xl ease-in-out delay-75'>Login</NavLink>
        </nav>
    </div>
  )
}

export default Header
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {

    const activeStyle = {
    fontWeight: 'bold',
    //  
    color: '#FFE082',
    fontSize: '20px',
  }

  return (
    <div className='flex flex-row justify-between my-10'>
        <Link  to='/' className='text-3xl font-extrabold'><span className='text-amber-200'>#CAR</span>LIFE</Link>
        <nav className='flex gap-11'>
            <NavLink to='.' style={({isActive}) => isActive ? activeStyle : null } className='font-normal text-lg  hover:text-gray-500 hover:text-xl ease-in delay-75'>Home</NavLink>
            <NavLink to='host' style={({isActive}) => isActive ? activeStyle : null } className='font-normal text-lg  hover:text-gray-500 hover:text-xl ease-in delay-75'>Host</NavLink>
            <NavLink to='about' style={({isActive}) => isActive ? activeStyle : null } className='font-normal text-lg  hover:text-gray-500 hover:text-xl ease-in delay-75'>About</NavLink>
            <NavLink to='vans' style={({isActive}) => isActive ? activeStyle : null } className='font-normal text-lg  hover:text-gray-500 hover:text-xl ease-in delay-75'>Vans</NavLink>
            <NavLink to='login' style={({isActive}) => isActive ? activeStyle : null } className='font-normal text-lg  hover:text-gray-500 hover:text-xl ease-in delay-75'>Login</NavLink>
        </nav>
    </div>
  )
}

export default Header
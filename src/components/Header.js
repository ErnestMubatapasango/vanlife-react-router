import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {

  const [mobileMenu, setMobileMenu] = React.useState(false)

    const activeStyle = {
    fontWeight: 'bold',
    //  
    color: '#FFD54F',
    fontSize: '20px',
  }

  return (
    <div className='flex flex-row justify-between mt-10 relative'>
        <Link  to='/' className='text-3xl font-extrabold'><span className='text-amber-300'>#CAR</span>LIFE</Link>
        <nav className='md:flex gap-11 hidden '>
            <NavLink to='.' style={({isActive}) => isActive ? activeStyle : null } className='font-normal text-lg  hover:text-gray-500 hover:text-xl ease-in delay-75'>Home</NavLink>
            <NavLink to='host' style={({isActive}) => isActive ? activeStyle : null } className='font-normal text-lg  hover:text-gray-500 hover:text-xl ease-in delay-75'>Host</NavLink>
            <NavLink to='about' style={({isActive}) => isActive ? activeStyle : null } className='font-normal text-lg  hover:text-gray-500 hover:text-xl ease-in delay-75'>About</NavLink>
            <NavLink to='vans' style={({isActive}) => isActive ? activeStyle : null } className='font-normal text-lg  hover:text-gray-500 hover:text-xl ease-in delay-75'>Cars</NavLink>
            <NavLink to='login' style={({isActive}) => isActive ? activeStyle : null } className='font-normal text-lg  hover:text-gray-500 hover:text-xl ease-in delay-75'>Login</NavLink>
        </nav>
        <div className='flex md:hidden'>
          <button onClick={() => setMobileMenu(!mobileMenu)} className={` ${mobileMenu ? 'text-amber-300': null} font-bold text-2xl`}>{mobileMenu ? "Close" : "Menu"  }</button>
        </div>

        { mobileMenu ? (
          
            <nav className='bg-gray-400 flex flex-col items-center gap-5 py-3 shadow-2xl backdrop-filter bg-opacity-10 backdrop-blur-sm absolute top-20 w-full rounded-2xl z-50'>
              <NavLink 
              to='.' 
              className="font-bold text-xl text-center  rounded-full hover:bg-amber-300 w-full" >
                Home
              </NavLink>
              <NavLink 
              to='host' 
              className="font-bold text-xl text-center  rounded-full hover:bg-amber-300 w-full" >
                Host
              </NavLink>
              <NavLink 
              to='about' 
              className="font-bold text-xl text-center  rounded-full hover:bg-amber-300 w-full" >
                About
              </NavLink>
              <NavLink 
              to='vans' 
              className="font-bold text-xl text-center  rounded-full hover:bg-amber-300 w-full" >
                Cars
              </NavLink>
              <NavLink 
              to='login' 
              className="font-bold text-xl text-center  rounded-full hover:bg-amber-300 w-full" >
                Login
              </NavLink>
            </nav>
         
        ) : null
            
        }

    </div>
  )
}

export default Header
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {MdOutlineClose} from 'react-icons/md'
import {BiMenuAltRight} from  'react-icons/bi'
function Header() {

  const [mobileMenu, setMobileMenu] = React.useState(false)

    const activeStyle = {
    fontWeight: 'bold',
    color: '#FFD54F',
    fontSize: '20px',
  }

  const handleNavLinkReset = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className='flex flex-row justify-between mt-10 sticky z-50 top-5 bg-white backdrop-filter backdrop-blur-md bg-opacity-50 rounded-xl w-auto py-5 px-2'>
        <NavLink onClick={handleNavLinkReset}  to='/' className=' text-xl md:text-2xl lg:text-3xl font-extrabold'><span className='text-amber-300'>#CAR</span>LIFE</NavLink>
        <nav className='md:flex gap-11 hidden '>
            <NavLink onClick={handleNavLinkReset} to='.' style={({isActive}) => isActive ? activeStyle : null } className='font-normal text-lg  hover:text-gray-500 hover:text-xl ease-in delay-75'>Home</NavLink>
            <NavLink onClick={handleNavLinkReset} to='host' style={({isActive}) => isActive ? activeStyle : null } className='font-normal text-lg  hover:text-gray-500 hover:text-xl ease-in delay-75'>Host</NavLink>
            <NavLink onClick={handleNavLinkReset} to='about' style={({isActive}) => isActive ? activeStyle : null } className='font-normal text-lg  hover:text-gray-500 hover:text-xl ease-in delay-75'>About</NavLink>
            <NavLink onClick={handleNavLinkReset} to='vans' style={({isActive}) => isActive ? activeStyle : null } className='font-normal text-lg  hover:text-gray-500 hover:text-xl ease-in delay-75'>Cars</NavLink>
            <NavLink onClick={handleNavLinkReset} to='login' style={({isActive}) => isActive ? activeStyle : null } className='font-normal text-lg  hover:text-gray-500 hover:text-xl ease-in delay-75'>Login</NavLink>
        </nav>
        <div className='flex md:hidden cursor-pointer'>
          <button onClick={() => setMobileMenu(!mobileMenu)} className={` ${mobileMenu ? 'text-amber-300': null} font-bold text-2xl`}>{mobileMenu ? <MdOutlineClose/> : <BiMenuAltRight />   }</button>
        </div>

        { mobileMenu ? (
          
            <nav className='bg-white flex flex-col items-center gap-5 py-3 shadow-2xl backdrop-filter bg-opacity-90 backdrop-blur-xl absolute top-20 right-0.5 w-full rounded-2xl z-50'>
              <NavLink 
              to='.' 
              className="font-bold text-xl text-center  rounded-full hover:bg-amber-300 w-full"
              onClick={() => {
                setMobileMenu(false); 
                handleNavLinkReset()
              }}
              >
                Home
              </NavLink>
              <NavLink 
              to='host' 
              className="font-bold text-xl text-center  rounded-full hover:bg-amber-300 w-full"
              onClick={() => {
                setMobileMenu(false); 
                handleNavLinkReset()
              }}
              >
                Host
              </NavLink>
              <NavLink 
              to='about' 
              className="font-bold text-xl text-center  rounded-full hover:bg-amber-300 w-full"
              onClick={() => {
                setMobileMenu(false); 
                handleNavLinkReset()
              }}
              >
                About
              </NavLink>
              <NavLink 
              to='vans' 
              className="font-bold text-xl text-center  rounded-full hover:bg-amber-300 w-full"
              onClick={() => {
                setMobileMenu(false); 
                handleNavLinkReset()
              }}
              >
                Cars
              </NavLink>
              <NavLink 
              to='login' 
              className="font-bold text-xl text-center  rounded-full hover:bg-amber-300 w-full" 
              onClick={() => {
                setMobileMenu(false); 
                handleNavLinkReset()
              }}
              >
                Login
              </NavLink>
            </nav>
         
        ) : null
            
        }

    </div>
  )
}

export default Header
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function HostLayout() {

  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: 'rgb(107 114 128)'
  }
  
  return (
    <div>
        <nav className='flex gap-11 mb-10'>
            <NavLink style={({isActive}) => isActive ? activeStyle : null} className='text-lg font-medium text-slate-500' to='.'>Dashboard</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyle : null} className='text-lg font-medium text-slate-500' to='income'>Income</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyle : null} className='text-lg font-medium text-slate-500' to='vans'>Vans</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyle : null} className='text-lg font-medium text-slate-500' to='reviews'>Reviews</NavLink>
        </nav>
       <Outlet />
    </div>
  )
}

export default HostLayout
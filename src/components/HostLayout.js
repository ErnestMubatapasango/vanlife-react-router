import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function HostLayout() {
  return (
    <div>
        <nav className='flex gap-11 mb-10'>
            <NavLink className='text-lg font-medium text-slate-500' to='.'>Dashboard</NavLink>
            <NavLink className='text-lg font-medium text-slate-500' to='income'>Income</NavLink>
            <NavLink className='text-lg font-medium text-slate-500' to='vans'>Vans</NavLink>
            <NavLink className='text-lg font-medium text-slate-500' to='reviews'>Reviews</NavLink>
        </nav>
       <Outlet />
    </div>
  )
}

export default HostLayout
import React from 'react'
import { Link, NavLink, Outlet, useLoaderData} from 'react-router-dom'
import { getVan } from '../../api'

export function loader({params}){
    return getVan(params.id)
}

function HostVanDetail() {
    const hostVan = useLoaderData()
   
    const activeStyle = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: 'rgb(107 114 128)'
      }
      
  return (
    <div className='space-y-8 bg-amber-100 p-8 rounded-2xl cursor-pointer '>
        <Link to=".." relative='path' className='text-xl text-slate-500 underline font-medium'> &larr; Back to all Vans</Link>
      
        <div className='flex flex-row gap-8 items-center'>
            <img className='w-80 h-[18rem] rounded-xl' src={hostVan.imageUrl} alt='hostVan' />
            <div className='space-y-3'>
                <p className='px-3 py-2 bg-gray-500 text-slate-300 text-center text-lg rounded-full font-semibold'>{hostVan.type}</p>
                <h2 className='text-2xl font-medium'>{hostVan.title}</h2>
                {/* <p className='text-lg italic leading-tight'>{hostVan.description}</p> */}
                <h3 className='text-xl text-slate-600'>${hostVan.price}/day</h3>
            </div>
        </div>

        <div>
            <nav className='flex gap-8'>
                <NavLink className={`text-xl font-medium text-slate-500 hover:text-black`} to='.'>Details</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyle: null } className={`text-xl font-medium text-slate-500 hover:text-black`} to='pricing'>Pricing</NavLink>
                <NavLink style={({isActive}) => isActive ? activeStyle: null } className={`text-xl font-medium text-slate-500 hover:text-black`} to='photos'>Photos</NavLink>
            </nav>
            <Outlet />
        </div>
        

    </div>
  )
}

export default HostVanDetail
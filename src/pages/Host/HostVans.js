import React from 'react'
import { getHostVans } from '../../api'
import { Link, useLoaderData } from 'react-router-dom'
import { requireAuth } from '../../utils'

export async function loader(){
  await requireAuth()
  return getHostVans()
}

function HostVans() {

  const hostVans = useLoaderData()

  const hostVanElements = hostVans.map(hostVan => {
    return(
      <Link to={hostVan.id} className='flex flex-row gap-5 bg-amber-100 p-8 rounded-2xl cursor-pointer'>
        <img className='w-80 h-[18rem] rounded-xl' src={hostVan.imageUrl} alt='hostVan' />
        <div className='space-y-3'>
          <h2 className='text-2xl font-medium'>{hostVan.title}</h2>
          {/* <p className='text-lg italic leading-tight'>{hostVan.description}</p> */}
          <h3 className='text-xl text-slate-600'>${hostVan.price}/day</h3>
        </div>
      </Link>
   )})

  return ( 
    <div className='flex flex-col gap-10'>
      {hostVanElements}
    </div>
  )
}

export default HostVans
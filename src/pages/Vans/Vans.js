import React from 'react'
import { getVans } from '../../api'
import { useLoaderData } from 'react-router-dom'

export function loader(){
  return getVans()
}
function Vans() {
  const vans = useLoaderData()

  const vanElements = vans.map(van => {
    return(
      <div key={van.id} className='cursor-pointer space-y-2 flex flex-col items-start'>
          <img className='w-80 h-[18rem] rounded-xl' src={van.imageUrl} alt='van' />
          <h2 className='text-2xl font-medium'>{van.title}</h2>
          <h3 className='text-xl text-slate-600'>${van.price}/day</h3>
          <p className='px-3 py-1 bg-slate-400 rounded-xl font-medium'>{van.type}</p>
      </div>
    )
  })
  return (
    <div className='space-y-5'>
      <h2 className='text-4xl font-semibold'>Explore our vans options</h2>
      <div className='flex gap-11'>
        <button className='bg-gray-400 px-3 py-2 rounded-full font-medium text-slate-800 hover:bg-slate-300'>Simple</button>
        <button className='bg-gray-400 px-3 py-2 rounded-full font-medium text-slate-800 hover:bg-slate-300'>Luxury</button>
        <button className='bg-gray-400 px-3 py-2 rounded-full font-medium text-slate-800 hover:bg-slate-300'>Rugged</button>
      </div>

      <div className='flex flex-wrap gap-11 justify-between'>{vanElements}</div>
    </div>
  )
}

export default Vans
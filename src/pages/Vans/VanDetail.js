import React from 'react'
import { getVan } from '../../api'
import { Link, useLoaderData, useLocation } from 'react-router-dom'

export function loader({params}){
  return getVan(params.id)
}

function VanDetail() {
  const van = useLoaderData()
  const location = useLocation()
  //console.log(location)
  //optional chaining - is the concept we are using here to check if the location.state is a thing
  const type = location.state?.search || ""
  //const filterValue = location.state?.type || "all"

  function filterValue(){
    let typeFilterValue;

    if(type === "type=simple"){
      return typeFilterValue = "simple"
    }
    else if(type === "type=luxury"){
      return typeFilterValue = "luxury"
    }
    else if(type === "type=rugged"){
      return typeFilterValue = "rugged"
    }
    else{
      return typeFilterValue = "all"
    }
  }
  return (
    <div className='space-y-8'>
      <Link 
        to={`..?${type}`}
        relative='path'
        className='text-xl underline text-slate-500'
      >
          &larr; Back to {filterValue()} vans
      </Link>
      <div className='flex gap-11 items-center'>
      
      <img className='w-96 h-96 rounded-3xl' src={van.imageUrl} alt='van' />
      <div className='flex flex-col items-start gap-8'>
        <p className='px-3 py-2 bg-gray-500 text-slate-300 rounded-full font-semibold'>{van.type}</p>
        <h2 className='text-3xl font-medium italic'>{van.title}</h2>
        <h3 className='text-2xl text-slate-500'>$<span className='font-bold text-gray-500'>{van.price}</span>/day</h3>
        <p className='text-lg italic leading-tight'>{van.description}</p>
        <button 
          className='px-3 py-2 bg-slate-300 text-gray-500 rounded-full font-medium hover:bg-gray-500 hover:text-slate-300 delay-75 ease-in-out'
        >
          Rent this Van
        </button>
      </div>
     
    </div>
    </div>
   
  )
}

export default VanDetail
import React from 'react'
import { getVan } from '../../api'
import { Link, useLoaderData, useLocation, defer, Await } from 'react-router-dom'

export function loader({params}){
  return defer({vanPromise:getVan(params.id)})
}

function VanDetail() {
  const van = useLoaderData()
  const location = useLocation()
  //console.log(location)
  //optional chaining - is the concept we are using here to check if the location.state is a thing
  const type = location.state?.search || ""
  //const filterValue = location.state?.type || "all"
  const filterValue = location.state?.type || "all"
  // function filterValue(){
  //   let typeFilterValue;

  //   if(type === "type=simple"){
  //     return typeFilterValue = "simple"
  //   }
  //   else if(type === "type=luxury"){
  //     return typeFilterValue = "luxury"
  //   }
  //   else if(type === "type=rugged"){
  //     return typeFilterValue = "rugged"
  //   }
  //   else{
  //     return "all"
  //   }
  // }

   function renderVanElements(van){
    return(
      <div className='flex flex-col md:flex-row gap-0 md:gap-11 mb-10 items-center'>
        
      <img className='w-96 h-96 rounded-3xl object-contain' src={van.imageUrl} alt='van' />
      <div className='flex flex-col items-start gap-8'>
        <p className='px-3 py-2 bg-amber-300 text-black rounded-full font-semibold'>{van.type}</p>
        <h2 className='text-3xl font-semibold'>{van.title}</h2>
        <h3 className='text-2xl text-amber-300'>$<span className='font-bold text-amber-400'>{van.price}</span>/day</h3>
        <p className='text-md leading-tight'>{van.description}</p>
        <button 
          className='px-3 py-2 bg-amber-300 text-black rounded-full font-medium hover:bg-amber-400 hover:text-slate-400 delay-75 ease-in-out'
        >
          Rent this Van
        </button>
      </div>     
    </div>
    )
   }
  return (
    <div className='md:space-y-8 mt-5 md:mt-0'>
      <Link 
        to={`..?${type}`}
        relative='path'
        className='text-xl underline text-slate-400 uppercase'
      >
         &larr; Back to <span className={`${filterValue === 'minibus'? '': 'font-bold' }`}>{filterValue}</span>{filterValue === 'minibus'? "es" : " vehicles"}
      </Link>

      <React.Suspense fallback={
        <div className="grid place-items-center pt-10">
          <div 
            className="animate-spin w-10 h-10 border-[3px] border-current border-t-transparent text-slate-600 rounded-full" 
            role="status" 
            aria-label="loading"
            >          
          </div>
        </div>
      }>
        <Await resolve={van.vanPromise}>
            {renderVanElements}
        </Await>
      </React.Suspense>
    </div>
   
  )
}

export default VanDetail
import React from 'react'
import { getVans } from '../../api'
import { Link, useLoaderData, useSearchParams, defer, Await } from 'react-router-dom'

export function loader(){
  return defer({vansPromise: getVans()})
}
function Vans() {
  const vans = useLoaderData()
  const [searchParams, setSearchParams]= useSearchParams()
  const typeFilter = searchParams.get('type')

 
  function handleParams(key, value) {
    setSearchParams(prevParams => {
      if(prevParams === null){
        prevParams.delete(key);
      }
      else{
        prevParams.set(key, value);
      }
      return prevParams;
    })
  }

  function renderVansElements(vans){

    const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans
    const vanElements = displayedVans.map(van => {
      return(
        <Link key={van.id} to={van.id} state={{search: searchParams.toString()}}>
  
          <div  className='cursor-pointer gap-2 flex flex-col w-80 h-80 items-center shadow-2xl px-3 py-4 rounded-2xl'>
              <img className='w-[14rem] h-[15rem] rounded-xl object-contain' src={van.imageUrl} alt='van' />
              <h2 className='text-2xl items-start font-medium'>{van.title}</h2>
              <h3 className='text-xl text-left text-amber-400'>${van.price}/day</h3>
              <p className='px-3 py-1 bg-amber-400 rounded-xl font-medium'>{van.type}</p>
          </div>
  
        </Link>
      )
    })

    return (
      <div className=' pt-11 flex flex-wrap gap-x-3 gap-y-20 justify-center'>
        {vanElements}
      </div>  
    )
  }
  return (
    <div className='space-y-5'>
      <h2 className='text-4xl font-semibold'>Explore our vans options</h2>
      <div className='flex gap-5 items-center'>
        <button onClick={() => handleParams("type","hatchback")} className='bg-amber-300 px-3 py-2 rounded-full font-medium text-slate-800 hover:bg-slate-300'>Hatchback</button>
        <button onClick={() => handleParams("type","luxury")} className='bg-amber-300 px-3 py-2 rounded-full font-medium text-slate-800 hover:bg-slate-300'>Luxury</button>
        <button onClick={() => handleParams("type","suv")} className='bg-amber-300 px-3 py-2 rounded-full font-medium text-slate-800 hover:bg-slate-300'>SUV</button>
        <button onClick={() => handleParams("type","truck")} className='bg-amber-300 px-3 py-2 rounded-full font-medium text-slate-800 hover:bg-slate-300'>Truck</button>
        <button onClick={() => handleParams("type","minibus")} className='bg-amber-300 px-3 py-2 rounded-full font-medium text-slate-800 hover:bg-slate-300'>Mini Bus</button>
        <button onClick={() => handleParams("type","sedan")} className='bg-amber-300 px-3 py-2 rounded-full font-medium text-slate-800 hover:bg-slate-300'>Sedan</button>
        {typeFilter && <Link to='.' className='underline text-slate-800 hover:bg-slate-300 rounded-full px-3 py-2 font-medium'>Clear filters</Link> }
      </div>
      
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
        <Await resolve={vans.vansPromise}>  
            {renderVansElements}  
        </Await>
      </React.Suspense>
    </div>
  )
}

export default Vans
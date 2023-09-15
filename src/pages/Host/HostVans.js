import React from 'react'
import { getHostVans } from '../../api'
import { Await, Link, defer, useLoaderData } from 'react-router-dom'
import { requireAuth } from '../../utils'

export async function loader({request}){
  await requireAuth(request)
  return defer({hostVansPromise: getHostVans()})
}

function HostVans() {

  const hostVans = useLoaderData()

  function renderVanElements(hostVans){
    const hostVanElements = hostVans.map(hostVan => {
      return(
        <Link to={hostVan.id} className='flex flex-row gap-5 bg-amber-100 p-8 rounded-2xl cursor-pointer'>
          <img className='w-80 h-[18rem] rounded-xl object-contain' src={hostVan.imageUrl} alt='hostVan' />
          <div className='space-y-3'>
            <h2 className='text-2xl font-medium'>{hostVan.title}</h2>
            {/* <p className='text-lg italic leading-tight'>{hostVan.description}</p> */}
            <h3 className='text-xl text-slate-600'>${hostVan.price}/day</h3>
          </div>
        </Link>
     )})

     return(
      <div className='flex flex-col gap-10'>
      {hostVanElements}
    </div>
     )
  }



  return ( 
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
    <Await resolve={hostVans.hostVansPromise}>
      {renderVanElements}
    </Await>
   </React.Suspense>
  )
}

export default HostVans
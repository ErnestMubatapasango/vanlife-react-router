import React from 'react'
import { getVan } from '../../api'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { requireAuth } from '../../utils'

export async function loader({params, request}){
  await requireAuth(request)
  return defer({hostVanPhotosPromise: getVan(params.id) })
}

function HostVanPhotos() {

  const hostVan = useLoaderData()
  
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
      <Await resolve={hostVan.hostVanPhotosPromise}>
        {(hostVan) => (
          <div className='py-5'>
            <img className='w-[6rem] h-[6rem] rounded-xl' src={hostVan.imageUrl} alt='host van' />
          </div>
        )}
      </Await>
    </React.Suspense>
    
  )
}

export default HostVanPhotos
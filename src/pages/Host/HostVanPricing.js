import React from 'react'
import { getVan } from '../../api'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { requireAuth } from '../../utils'

export async function loader({params, request}){
  await requireAuth(request)
  return defer({hostVanPricePromise: getVan(params.id)})
}
function HostVanPricing() {

  const hostVanPrice = useLoaderData()

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
      <Await resolve={hostVanPrice.hostVanPricePromise}>
        {(hostVanPrice) => (
          <div className='py-5'>
            <p><span className='font-medium text-[30px]'>${hostVanPrice.price}</span>/day</p>
          </div>
        )}
      </Await>
    </React.Suspense>
    
  )
}

export default HostVanPricing
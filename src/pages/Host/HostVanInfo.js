import React from 'react'
import { getVan} from '../../api'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { requireAuth } from '../../utils'

export async function loader({params, request}){
    await requireAuth(request)
    return defer({hostVanInfoPromise: getVan(params.id)}) 
}
function HostVanInfo() {
    const hostVanInfo = useLoaderData()

  function renderVanElements(hostVanInfo){
    return(
      <div className='py-5 space-y-5'>
        <h1 className='text-[18px]'><span className='font-bold'>Name:</span> {hostVanInfo.title}</h1>
        <h1 className='text-[18px]'><span className='font-bold'>Category:</span> {hostVanInfo.type}</h1>
        <h1 className='text-[18px]'><span className='font-bold'>Description:</span> {hostVanInfo.description}</h1>
        <h1 className='text-[18px]'><span className='font-bold'>Visibility:</span> Public</h1>
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
    <Await resolve={hostVanInfo.hostVanInfoPromise}>
      {renderVanElements}
    </Await>
   </React.Suspense>
  )
}

export default HostVanInfo
import React from 'react'
import { getVan} from '../../api'
import { useLoaderData } from 'react-router-dom'

export function loader({params}){
    return getVan(params.id)
}
function HostVanInfo() {
    const hostVanInfo = useLoaderData()

  return (
    <div className='py-5 space-y-5'>
        <h1 className='text-[18px]'><span className='font-bold'>Name:</span> {hostVanInfo.title}</h1>
        <h1 className='text-[18px]'><span className='font-bold'>Category:</span> {hostVanInfo.type}</h1>
        <h1 className='text-[18px]'><span className='font-bold'>Description:</span> {hostVanInfo.description}</h1>
        <h1 className='text-[18px]'><span className='font-bold'>Visibility:</span> Public</h1>
    </div>
  )
}

export default HostVanInfo
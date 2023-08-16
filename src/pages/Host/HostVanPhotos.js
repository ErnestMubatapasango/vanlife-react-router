import React from 'react'
import { getVan } from '../../api'
import { useLoaderData } from 'react-router-dom'

export function loader({params}){
  return getVan(params.id)
}

function HostVanPhotos() {

  const hostVan = useLoaderData()

  return (

    <div className='py-5'>
      <img className='w-[6rem] h-[6rem] rounded-xl' src={hostVan.imageUrl} alt='host van' />
    </div>
  )
}

export default HostVanPhotos
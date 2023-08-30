import React from 'react'
import { getVan } from '../../api'
import { useLoaderData } from 'react-router-dom'
import { requireAuth } from '../../utils'

export async function loader({params, request}){
  await requireAuth(request)
  return getVan(params.id)
}
function HostVanPricing() {

  const hostVanPrice = useLoaderData()

  return (
    <div className='py-5'>
      <p><span className='font-medium text-[30px]'>${hostVanPrice.price}</span>/day</p>
    </div>
  )
}

export default HostVanPricing
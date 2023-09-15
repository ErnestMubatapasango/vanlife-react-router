import React from 'react'
import { Await, Link, NavLink, Outlet, defer, useLoaderData} from 'react-router-dom'
import { getVan } from '../../api'
import { requireAuth } from '../../utils'

export async function loader({params, request}){
    await requireAuth(request)
    return defer({hostVanPromise: getVan(params.id)})
}

function HostVanDetail() {
    const hostVan = useLoaderData()
   
    const activeStyle = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: 'rgb(107 114 128)'
      }
    
      function renderVanElements(hostVan){
        return(
            <div className='space-y-8 bg-amber-100 p-8 rounded-2xl cursor-pointer '>
                <Link to=".." relative='path' className='text-xl text-slate-500 underline font-medium'> &larr; Back to all Vans</Link>
                
                <div className='flex flex-row gap-8 items-center'>
                    <img className='w-80 h-[18rem] rounded-xl object-contain' src={hostVan.imageUrl} alt='hostVan' />
                    <div className='space-y-3'>
                        <p className='px-3 py-2 bg-gray-500 text-slate-300 text-center text-lg rounded-full font-semibold'>{hostVan.type}</p>
                        <h2 className='text-2xl font-medium'>{hostVan.title}</h2>
                        {/* <p className='text-lg italic leading-tight'>{hostVan.description}</p> */}
                        <h3 className='text-xl text-slate-600'>${hostVan.price}/day</h3>
                    </div>
                </div>
        
                <div>
                    <nav className='flex gap-8'>
                        <NavLink className={`text-xl font-medium text-slate-500 hover:text-black`} to='.'>Details</NavLink>
                        <NavLink style={({isActive}) => isActive ? activeStyle: null } className={`text-xl font-medium text-slate-500 hover:text-black`} to='pricing'>Pricing</NavLink>
                        <NavLink style={({isActive}) => isActive ? activeStyle: null } className={`text-xl font-medium text-slate-500 hover:text-black`} to='photos'>Photos</NavLink>
                    </nav>
                    <Outlet />
                </div>
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
    <Await resolve={hostVan.hostVanPromise}>
        {renderVanElements}
    </Await>
   </React.Suspense>
  )
}

export default HostVanDetail
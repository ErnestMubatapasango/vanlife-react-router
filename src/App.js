import React from 'react'
import Layout from './components/Layout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Vans, {loader as vanLoader} from './pages/Vans/Vans'
import VanDetail, {loader as VanDetailLoader} from './pages/Vans/VanDetail'
import About from './pages/About'
import Login, { LoginLoader, LoginAction } from './pages/Login'
import Dashboard from './pages/Host/Dashboard'
import HostVans, {loader as hostVansLoader} from './pages/Host/HostVans'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/HostLayout'
import HostVanDetail, {loader as hostVanDetailLoader} from './pages/Host/HostVanDetail'
import HostVanInfo, {loader as hostvanInfoLoader} from './pages/Host/HostVanInfo'
import HostVanPricing, {loader as hostVanPriceLoader} from './pages/Host/HostVanPricing'
import HostVanPhotos, {loader as hostVanPhotoLoader} from './pages/Host/HostVanPhotos'
import NotFound from './components/NotFound'
import Error from './components/Error'
import { requireAuth } from './utils'
localStorage.removeItem("loggedIn")

function App() {   

  const createRouter = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      
      <Route path='about' element={<About />} />
      <Route path='vans' loader={vanLoader} errorElement={<Error />} element={<Vans />} />
      <Route path='vans/:id' loader={VanDetailLoader} errorElement={<Error />} element={<VanDetail />} />

      <Route path='login' loader={LoginLoader} action={LoginAction} element={<Login />} />

      <Route path='host' element={<HostLayout />} >
        <Route 
          index 
          element={<Dashboard />}
          loader= {async({request}) => await requireAuth(request)}
        />
        <Route  
          path='income'
          element={<Income />}
          loader= {async({request}) => await requireAuth(request)}  
        />

        <Route 
          path='vans' 
          loader={hostVansLoader} 
          errorElement={<Error />} 
          element={<HostVans />}
        />

        <Route 
          path='vans/:id' 
          loader={hostVanDetailLoader} 
          errorElement={<Error />} 
          element={<HostVanDetail />} 
        >
          <Route 
            index 
            loader={hostvanInfoLoader} 
            errorElement={<Error />} 
            element={<HostVanInfo />} 
          />
          <Route 
            path='pricing' 
            loader={hostVanPriceLoader} 
            errorElement={<Error />} 
            element={<HostVanPricing />} 
          />
          <Route 
            path='photos' 
            loader={hostVanPhotoLoader} 
            errorElement={<Error />} 
            element={<HostVanPhotos />} 
          />
        </Route>

        <Route 
          path='reviews' 
          element={<Reviews />}
          loader= {async({request}) => await requireAuth(request)}
        />

      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  ))
  return (
    <div className=''>
      <RouterProvider router={createRouter} />
    </div>
  )
}

export default App
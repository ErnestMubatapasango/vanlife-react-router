import React from 'react'
import Layout from './components/Layout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Vans, {loader as vanLoader} from './pages/Vans/Vans'
import VanDetail, {loader as VanDetailLoader} from './pages/Vans/VanDetail'
import About from './pages/About'
import Login from './pages/Login'
import Dashboard from './pages/Host/Dashboard'
import HostVans from './pages/Host/HostVans'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/HostLayout'


function App() {

  const createRouter = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='about' element={<About />} />
      <Route path='vans' loader={vanLoader} element={<Vans />} />
      <Route path='vans/:id' loader={VanDetailLoader} element={<VanDetail />} />
      <Route path='login' element={<Login />} />

      <Route path='host' element={<HostLayout />} >
        <Route index element={<Dashboard />}/>
        <Route path='income' element={<Income />}/>
        <Route path='vans' element={<HostVans />}/>
        <Route path='reviews' element={<Reviews />}/>
      </Route>
      
    </Route>
  ))
  return (
    <div className=''>
      <RouterProvider router={createRouter} />
    </div>
  )
}

export default App
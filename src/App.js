import React from 'react'
import Layout from './components/Layout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Host from './pages/Host'
import Vans from './pages/Vans'
import About from './pages/About'
import Login from './pages/Login'


function App() {

  const createRouter = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='host' element={<Host />} />
      <Route path='about' element={<About />} />
      <Route path='vans' element={<Vans />} />
      <Route path='login' element={<Login />} />
    </Route>
  ))
  return (
    <div className=''>
      <RouterProvider router={createRouter} />
    </div>
  )
}

export default App
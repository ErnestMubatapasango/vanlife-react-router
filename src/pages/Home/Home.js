import React from 'react'
import Hero from "./Hero"
import Inventory from './Inventory'
import Services from './Services'
import Catalogue from './Catalogue'
import Reviews from './Reviews'


function Home() {
  return (
    <div className='-space-y-10'>
        <Hero />
        <Inventory />
        <Services />
        <Catalogue />
        <Reviews />
    </div>
  )
}

export default Home
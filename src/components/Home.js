import React from 'react'
import Section from './Section'
import Card from './Card'
import Service from './Service'
import Popular from './Popular'
import Tasty from './Tasty'
import SlidersTest from './SlidersTest'

function Home() {
  return (
    <div>
        <Section/>
        <Card/>
        <Service/>
        <Popular/>
        <Tasty/>
        <SlidersTest/>
    </div>
  )
}

export default Home
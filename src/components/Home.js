import React from 'react'
import Section from './Section'
import Card from './Card'
import Service from './Service'
import Popular from './Popular'
import Tasty from './Tasty'
import Testimonials from './Testimonials'

function Home() {
  return (
    <div>
        <Section/>
        <Card/>
        <Service/>
        <Popular/>
        <Tasty/>
        <Testimonials/>
    </div>
  )
}

export default Home
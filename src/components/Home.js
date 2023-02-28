import React from 'react'
import Header from './Header'
import Section from './Section'
import Card from './Card'
import Service from './Service'
import Popular from './Popular'
import Tasty from './Tasty'

function Home() {
  return (
    <div>
        <Section/>
        <Card/>
        <Service/>
        <Popular/>
        <Tasty/>
    </div>
  )
}

export default Home
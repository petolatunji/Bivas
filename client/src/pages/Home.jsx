import React from 'react'
import Firm from '../components/Firm'
import Globe from '../components/Globe'
import Latest from '../components/Latest'
import Offer from '../components/Offer'
import Talk from '../components/Talk'
const Home = () => {
  return (
    <div>
      <Offer />
      <Globe />
      <Firm />
      <Latest />
      <Talk />
    </div>
  )
}

export default Home

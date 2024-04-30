import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className="home flex-row">
      <Navbar />
      <div className='h2'>Welcome!</div>
    </div>
  )
}

export default Home
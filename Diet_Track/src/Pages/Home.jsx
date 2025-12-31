import React from 'react'
import Header from '../Components/Home/Header'
import Hero from '../Components/Home/Hero'
import Services from '../Components/Home/Services'
import Testimonials from '../Components/Home/Testimonials'
import Footer from '../Components/Home/Footer'

function Home() {
  return (
    <div className='min-h-screen bg-gray-200 flex flex-col'>
      <Header/>
      <Hero/>
      <Services/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home

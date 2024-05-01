import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import ClientReviews from './components/ClientReviews'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen text-black bg-zinc-200'>
      <Navbar/>
      <Landingpage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <ClientReviews/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
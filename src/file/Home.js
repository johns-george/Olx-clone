import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner';
import Posts from '../components/Posts';
import Footer from '../components/Footer';
function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Posts/>
      <Footer/>
    </div>
  )
}

export default Home

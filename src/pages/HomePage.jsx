import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home/Home';
import MainTeam from '../components/Home/Team/MainTeam';
import About from '../components/Home/AboutUs';
import Footer from '../components/Footer';
import Services from '../components/Home/Services';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <MainTeam />
      <Footer />
    </div>
  )
}

export default HomePage

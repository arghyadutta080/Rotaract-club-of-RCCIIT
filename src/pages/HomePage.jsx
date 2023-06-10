import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home/Home';
import About from '../components/Home/AboutUs';
import Footer from '../components/Footer';
import Services from '../components/Home/Services';
import LeaderList from '../components/Home/Team/LeaderList';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <LeaderList/>
      <Footer />
    </div>
  )
}

export default HomePage

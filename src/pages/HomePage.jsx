import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home/Home';
import About from '../components/Home/AboutUs';
import Footer from '../components/Footer';
import Services from '../components/Home/Services';
import LeaderList from '../components/Home/Team/LeaderList';
import Achievement from '../components/Home/Achievement';

import { Toaster } from 'react-hot-toast';
import Bulletin from '../components/Home/Bulletin';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Achievement />
      <LeaderList />
      <Bulletin />
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  )
}

export default HomePage

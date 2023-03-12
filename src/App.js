import './App.css';
import Footer from './components/Footer';
// import Home from './components/Home/Home';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
// import { MyClass } from './components/Home/About';
import About from './components/Home/About';
import MainTeam from './components/Team/MainTeam';
import Fund from './components/Home/Fund';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Fund/> */}
      <Home/>
      <MainTeam/>
      {/* <About/> */}
      {/* <Home1/> */}
      <Footer/>
    </div>
  );
}

export default App;

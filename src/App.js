import './App.css';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import MainTeam from './components/Team/MainTeam';
import About from './components/Home/AboutUs';

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <Navbar />
      <Home />
      <About />
      <MainTeam />
      <Footer />
    </div>
  );
}

export default App;

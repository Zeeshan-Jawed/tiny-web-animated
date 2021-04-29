import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Service from './components/Services/Service';

function App() {
  return (
     <div>
        <NavBar />
        <Service />
        <About />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;

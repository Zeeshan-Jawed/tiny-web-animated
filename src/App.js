import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Review from './components/Review/Review';
import Service from './components/Services/Service';

function App() {
  return (
     <div>
        <NavBar />
        <Feature />
        <Service />
        <About />
        <Review />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;

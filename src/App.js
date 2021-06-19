import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import AboutPizza from './components/AboutPizza/AboutPizza';
import PizzaTypes from './components/PizzaTypes/PizzaTypes';
import Footer from './components/Footer/Footer';
import logo from './logo.svg';

function App() {
  return (
    <>
     <Navbar title="Pizza site" />
     <Carousel />
     <AboutPizza />
     <PizzaTypes />
     <Footer />
    </>
  );
}

export default App;

import Nav from './components/Nav';
import Slider from './components/Slider';
import Content from './components/Content';
import Promo from './components/Promo';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Delivery from './components/Delivery';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';




function App() {
  
  return (
   
    <>
      <Nav />
      <Slider />
      <Promo/>
      <Content/>
      <Menu /> 
      <Footer />
    </>
   
  );
}

export default App;

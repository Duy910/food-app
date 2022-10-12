import Nav from '../components/Nav';
import Slider from '../components/Slider';
import Content from '../components/Content';
import Promo from '../components/Promo';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Delivery from '../components/Delivery';



function Default() {
   

    return (
        <div>
            <Nav />
            <Slider />
            <Promo />
            <Content />
            <Menu />
            <Delivery />
            <Footer />
        </div>
    );
}

export default Default;
import Nav from '../components/Nav';
import Slider from '../components/Slider';
import Content from '../components/Content';
import Promo from '../components/Promo';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Delivery from '../components/Delivery';
import { actionType, initState } from './store/reducer'
import reducer from '../store/reducer'
import { useContext } from 'react'
import Context from '../store/Context'
import { useEffect } from 'react'
import { getAllProducts } from '../utils/firebase'


function Default() {
    const [{ foodItems }, dispatch] = useContext(Context)
  
    const fetchData = async () => {
    await getAllProducts().then((products) => {
        console.log(products);
        dispatch({
            type: actionType.SET_FOOD_ITEMS,
            foodItems: products
        })
    })
}
useEffect(() => {
    fetchData()
  }, [])

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
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Delivery from '../components/Delivery'
import MenuMain from '../components/MenuMain';
import { actionType, initState } from '../store/reducer'
import reducer from '../store/reducer'
import { useContext } from 'react'
import Context from '../store/Context'
import { useEffect } from 'react'
import { getAllProducts } from '../utils/firebase'

function MenuDetail() {
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
            <MenuMain />
            <Delivery />
            <Footer />
        </div>
     );
}

export default MenuDetail;
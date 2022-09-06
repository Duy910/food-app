import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Delivery from '../components/Delivery'
import shape10 from '../img/shape_10.png'
import shape12 from '../img/shape_12.png'
import shape13 from '../img/shape_13.png'
import shape14 from '../img/shape_14.png'

function MenuDetail() {
    return ( 
        <div>
            <Nav />
            <div className='text-center p-[200px] bg-[#fff8ef] relative'>
                <div>
                    <h1>Food Menu</h1>
                </div>
                <div>
                    <h1>Home  Menu</h1>
                </div>

            </div>
        </div>
     );
}

export default MenuDetail;
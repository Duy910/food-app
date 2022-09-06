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
            <img src={shape10} className='absolute left-0 top-[13%]' />
            <img src={shape12} className='absolute top-[82%]' />
            <img src={shape13} className='absolute top-[40%] right-[46%]' />
            <img src={shape14} className='absolute top-[6%] right-[10%]'/>
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
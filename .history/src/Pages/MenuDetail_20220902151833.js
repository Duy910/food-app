import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Delivery from '../components/Delivery'
import shape10 from '../img/shape_10.png'
import shape12 from '../img/shape_12.png'

import shape14 from '../img/shape_14.png'

function MenuDetail() {
    return ( 
        <div>
            <Nav />
            <div className='text-center p-[200px] bg-[#fff8ef] relative'>
            <img src={shape10} className='absolute left-0 top-[13%]' />
            <img src={shape12} className='absolute left-0 top-[73%]' />
            
            <img src={shape14} className='absolute top-[20%] right-[10%]'/>
                <div>
                    <h1 className='text-40'>Food Menu</h1>
                </div>
                <div>
                    <h1>Home  Menu</h1>
                </div>

            </div>
            <div>

            </div>
            <Delivery />
            <Footer />
        </div>
     );
}

export default MenuDetail;
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Delivery from '../components/Delivery'
import shape10 from '../img/shape_10.png'
import shape12 from '../img/shape_12.png'
import shape14 from '../img/shape_14.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function MenuDetail() {
    return ( 
        <div>
            <Nav />
            <div className='text-center p-[200px] bg-[#fff8ef] relative'>
            <img src={shape10} className='absolute left-0 top-[13%]' />
            <img src={shape12} className='absolute left-0 top-[73%]' />
            
            <img src={shape14} className='absolute top-[20%] right-[10%]'/>
                <div>
                    <h1 className='text-[40px] font-delius font-semibold text-primary'>Food Menu</h1>
                </div>
                <div className='font-semibold font-delius italic'>
                    <h1 className='text-[20px] '>Home <FontAwesomeIcon icon={faArrowRight} className='mx-2 text-primary '/> Menu</h1>
                </div>

            </div>
            <div className='bg-menudetail '>
                <div className='max-w-[1200px] my-0 mx-auto'>
                    <div>
                        <ul>
                            <li className='py-10'>
                                <a className='bg-red-300 px-6 py-4 rounded-[40%]'>ALL</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div>
                        <div>
                             
                        </div>
                        <div>
                            
                        </div>
                    </div>

                </div>
            </div>
            <Delivery />
            <Footer />
        </div>
     );
}

export default MenuDetail;
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Delivery from '../components/Delivery'
import shape10 from '../img/shape_10.png'
import shape12 from '../img/shape_12.png'
import shape14 from '../img/shape_14.png'
import pizza1 from '../img/pizza_slide_1.png'

import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../css/menudetail.css'
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
                    <div className='p-20 '>
                        <ul className='flex bg-[#ebebeb]  py-4 rounded-[40px] justify-between'>
                        <li className=''>
                                <a className=' activeMenu font-bold font-delius text-[20px] rounded-[40px] px-6 py-4 '>ALL</a>
                            </li>
                            <li className=''>
                                <a className=' font-bold font-delius text-[20px] rounded-[40px]  px-6 py-4'>PIZZAS</a>
                            </li>
                            <li className=''>
                                <a className=' font-bold font-delius text-[20px] rounded-[40px] px-6 py-4 '>DRINKS</a>
                            </li>
                            <li className=''>
                                <a className=' font-bold font-delius text-[20px] rounded-[40px] px-6 py-4 '>SALADS</a>
                            </li>
                            <li className=''>
                                <a className=' font-bold font-delius text-[20px] rounded-[40px] px-6 py-4 '>PASTA</a>
                            </li>
                            <li className=''>
                                <a className=' font-bold font-delius text-[20px] rounded-[40px] px-6 py-4 '>BURGER</a>
                            </li>
                            <li className=''>
                                <a className=' font-bold font-delius text-[20px] rounded-[40px] px-6 py-4 '>DESERTS</a>
                            </li>
                            
                            
                        </ul>
                    </div>
                    <div className=''>
                        <div>   
                            <div className='flex'>
                                <div className='max-w-[90px] mr-3'>
                                    <img src={pizza1} />
                                </div>
                                <div className=''>
                                    <div className='flex text-[25px] font-delius font-semibold'>
                                        <h1 className=' '>Santa Fe Pizza</h1>
                                        <h1>      <FontAwesomeIcon icon={faEuroSign} />24.4</h1>

                                    </div>
                                    <h1 className='italic text-[#666] font-rubik font-semiblod'>Chicken breast, cheddar wrapped in a crispy</h1>
                                </div>
                            </div>
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
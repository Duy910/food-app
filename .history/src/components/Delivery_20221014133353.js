import shape10 from '../img/shape_10.png'
import shape12 from '../img/shape_12.png'
import shape13 from '../img/shape_13.png'
import shape14 from '../img/shape_14.png'
import shape15 from '../img/shape_15.png'
import shape16 from '../img/shape_16.png'
import biker from '../img/delivery_bike.png'
import phone from '../img/telephone.svg'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Routes, Route, Link, Outlet, BrowserRouter as Router } from 'react-router-dom'

function Delivery() {
    return ( 
        <div className="h-[700px] bg-[#fff8ef] relative">
             <img src={shape10} className='absolute' />
            <img src={shape12} className='absolute top-[82%]' />
            <img src={shape13} className='absolute top-[40%] right-[46%]' />
            <img src={shape14} className='absolute top-[6%] right-[10%]'/>
            <img src={shape15} className='absolute top-[82%] right-[20%]'/>
            <img src={shape16} className='absolute right-[6%] top-[40%]'/>
            <div className='max-w-[1200px] my-0 mx-auto h-full grid grid-cols-2 '>
                <div className='col-span-1 mr-10 relative'>
                    <img src={biker} className='z-20 absolute top-[18%] left-0'/>
                </div>
                <div className='col-span-1'>
                    <div className='content'>
                        <div>
                            <h1 className='font-delius text-primary md:text-[30px] phone:[10px] mt-20'>FREE DELIVERY</h1>
                        </div>
                        <div>
                            <h1 className='font-rubik font-semibold md:text-[50px] leading-none my-6'>Delivered On Right Time And Place</h1>
                        </div>
                        <div>
                            <p>perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa</p>
                        </div>
                        <div className='lg:flex md:block  mt-10'>
                            <div className='flex '>
                                <div>
                                    <img src={phone} className='w-[60px] '/>
                                </div>
                                <div className='ml-2'>   
                                    <h1>Delivery order number.</h1>
                                    <h1>123-456789</h1>
                                </div>
                            </div>
                            <div className=''>
                                <Link to='/menu' className='font-semibold hover:text-black  px-[15px] py-[10px] rounded-[30px]    bg-orange-300 absolute text-[20px] text-white'> 
                                <FontAwesomeIcon className='mr-[10px]' icon={faShoppingCart}/>Order Now</Link>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
            
        </div>

     );
}

export default Delivery;
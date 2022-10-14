import '../css/slider.css'
import shape1 from '../img/hero_shape_1.png'
import shape2 from '../img/hero_shape_2.png'
import shape3 from '../img/hero_shape_3.png'
import shape4 from '../img/hero_shape_4.png'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Routes, Route, Link, Outlet, BrowserRouter as Router } from 'react-router-dom'
function Slider() {
    return ( 
        <div className='h-[800px] bg-slider bg-black bg-cover ' >
            <div className='max-w-[1200px] my-0 mx-auto h-full relative  '>
                <div className=' bg-sliderPizza bg-no-repeat h-[580px] w-[620px] right-0 absolute top-[94px] phone:hidden tablet:block '>

                </div>
                <div>
                    <h1 id='slider' className="text-white phone:text-[40px]  md:text-[80px] font-black absolute top-[238px]">Enjoy Your Pizza</h1>
                    <span id='slider' className="text-white phone:text-[40px]  md:text-[80px] font-black absolute top-[330px]">In Town</span>
                    {/* <img src={shape1}/> */}
                    <img className='absolute right-[42%] top-[10%]' src={shape2}/>
                    <img className='tablet:absolute phone:hidden lg:block right-[40%] top-[46%]' src={shape3}/>
                    <img className='absolute  tablet:block phone:hidden right-[75%] top-[6%]' src={shape3}/>

                    
                </div >
                <div className=''>
                    <Link to='/menu' className=' top-[57%] px-[20px] py-[15px] rounded-[30px]  bg-orange-300 absolute text-[20px] text-white font-semibold hover:text-black'> 
                    <FontAwesomeIcon className='mr-[10px]' icon={faShoppingCart}/>Order Now</Link>
                </div>

            </div>
            
        </div>  
        
     );
}

export default Slider;
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Routes, Route, Link, Outlet, BrowserRouter as Router } from 'react-router-dom'
import promo from '../img/promo_leaf_bg.png'
import '../css/promo.css'
function Promo() {
    return ( 
        <div className=" h-[500px] relative">
             <img src={promo} className='absolute w-[20%] top-[57%] right-[41%] overflow-hidden'/>
            <div className="max-w-[1200px] h-full my-0 mx-auto grid grid-cols-2 ">
               
                <div className=" col-span-1 h-[50%] mr-5 mt-[125px]  promo1 bg-cover bg-center bg-no-repeat rounded-[20px] relative ">
                    <div className='text-white text-[30px] promo-font absolute top-[5%] right-[20%]'>
                        <h1>MEXICAN</h1>
                        <h1>GREEN</h1>
                        <h1>WAVE</h1>
                    </div>
                    <div className=''>
                    <Link to='/food-app' className='font-semibold hover:text-black top-[64%] right-[20%] px-[15px] py-[10px] rounded-[30px]  bg-orange-300 absolute text-[20px] text-white'> 
                    <FontAwesomeIcon className='mr-[10px]' icon={faShoppingCart}/>Order Now</Link>
                </div>
                </div>
                <div className=" col-span-1 h-[50%] ml-5 mt-[125px] promo2 bg-cover bg-center bg-no-repeat  rounded-[20px] relative">
                    <div className='text-white text-[30px] promo-font absolute top-[5%] right-[20%]'>
                            <h1>MEXICAN</h1>
                            <h1>GREEN</h1>
                            <h1>WAVE</h1>
                        </div>
                        <Link to='/food-app' className='font-semibold hover:text-black top-[64%] right-[20%] px-[15px] py-[10px] rounded-[30px]  bg-orange-300 absolute text-[20px] text-white'> 
                        <FontAwesomeIcon className='mr-[10px]' icon={faShoppingCart}/>Order Now</Link>
                    </div>
            </div>
        </div>
     );
}

export default Promo;
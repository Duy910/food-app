import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping, faUser, faImage, faBasketShopping, faUserCircle, faPlus, faRightFromBracket, faEuroSign, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react'
import Context from '../store/Context';
import { actionType, userInfo } from '../store/reducer';
import Avatar from '../img/avatar.png'
import loginIcon from '../img/login.png'
import emptyCart from '../img/emptyCart.svg'
import { Routes, Route, Link, Outlet, BrowserRouter as Router } from 'react-router-dom';

function CartItems() {
    const [{cartItems}, dispatch] = useContext(Context)
    const [items, setItems] = useState([])
    const [quantity, setQuantity] = useState(1)
    const handlePlus = (action, id) => {
        if(action == 'add') {
            setQuantity(quantity + 1)
            cartItems.map(item => {
                if(item.id === id) {
                    item.qty += 1
                }
            })
        }
    }
    return ( 
        <div className='w-[400px]  z-20  absolute top-[42px] right-[-160px] listProduct  bg-white   '>
                                        {cartItems && cartItems.length > 0 ? (<div>
                                            <div>
                                                <img className='mx-auto h-[70px] ' src={loginIcon} />
                                            </div>
                                            <ul className='h-[400px] overflow-y-scroll listProductUl rounded-[10px] '>
                                                {cartItems && cartItems.map((cartitem) => {
                                                    return (<li key={cartitem?.id} className=' flex bg-[#fff8ef] justify-around relative '>
                                                        <div className='flex py-2 items-center'>
                                                            <div className='bg-[#fef0de] rounded-[4px]'>
                                                                <img className='w-[100px] h-[100px] ' src={cartitem?.imgURL} />
                                                            </div>
                                                            <div className='ml-2'>
                                                                <h1 className='text-primary font-delius italic text-[18px] my-2'>{cartitem?.name}</h1>
                                                                <h1 className='text-black font-bold font-delius italic text-[18px] my-2'><FontAwesomeIcon icon={faEuroSign} />{cartitem?.price}</h1>

                                                            </div>
                                                        </div>
                                                        <div className='flex items-center'>
                                                            <div className=" flex bg-primary   rounded-[20px] text-[16px] ">
                                                                <button className=" px-2 py-1 text-white hover:text-black  ">
                                                                    <FontAwesomeIcon icon={faMinus} />
                                                                </button>
                                                                <p className="py-1 px-2 text-white">{cartitem?.qty}</p>
                                                                <button 
                                                                onClick={() => handlePlus('add', cartitem.id)}
                                                                className="px-2 py-1 text-white hover:text-black ">
                                                                    <FontAwesomeIcon icon={faPlus} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className='absolute right-[16px]'>
                                                            <FontAwesomeIcon className='text-primary hover:text-black' icon={faXmark} />
                                                        </div>
                                                    </li>)
                                                })}




                                            </ul>

                                            <div className=' bg-[#fff8ef]  h-[100px] mt-[24%] rounded-t-[20px] flex items-center justify-around'>
                                                <div className='flex font-delius italic font-bold items-center '>
                                                    <h1 className='text-primary  text-[20px]  '>Sub-total:
                                                    </h1>
                                                    <h1 className=' text-black text-[18px] ml-2'> <FontAwesomeIcon icon={faEuroSign} />23.3</h1>
                                                </div>
                                                <div>
                                                    <Link to='/cart' className='text-black text-[18px] font-bold items-center italic bg-primary p-2 rounded-[10px] listProductCheckOut'
                                                    >Check out</Link>
                                                </div>
                                            </div>
                                        </div>) : (<div className='w-[100%] h-[100%] flex items-center justify-center'>
                                            <h1 className='text-[20px] font-delius font-bold text-primary'>There's nothing here.</h1>
                                        </div>)}

                                    </div>

     );
}

export default CartItems;
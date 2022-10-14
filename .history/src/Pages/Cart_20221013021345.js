import Nav from "../components/Nav";
import Delivery from "../components/Delivery";
import Footer from "../components/Footer";
import shape10 from '../img/shape_10.png'
import shape12 from '../img/shape_12.png'
import shape14 from '../img/shape_14.png'
import pizza1 from '../img/pizza_slide_1.png'

import { faEuroSign } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react'
import { actionType } from "../store/reducer";
import Context from '../store/Context';
import reducer from "../store/reducer";

function Cart() {
    const [{ cartItems, user }, dispatch] = useContext(Context)
    const [subtotal, setSubTotal] = useState(0)
    const total = cartItems.reduce((acc, cur) => {
        return acc + cur.qty * cur.price
    }, 0)


    return (
        <div>
            <Nav />
            <div className='text-center p-[200px] bg-[#fff8ef] relative'>
                <img src={shape10} className='absolute left-0 top-[13%]' />
                <img src={shape12} className='absolute left-0 top-[73%]' />

                <img src={shape14} className='absolute top-[20%] right-[10%]' />
                <div>
                    <h1 className='text-[40px] font-delius font-semibold text-primary'>Cart Page</h1>
                </div>
                <div className='font-semibold font-delius italic'>
                    <h1 className='text-[20px] '>Home <FontAwesomeIcon icon={faArrowRight} className='mx-2 text-primary ' /> Cart</h1>
                </div>


            </div>
            <div className=" ">
                <div className="max-w-[1200px] my-0 mx-auto">
                    <div className="grid grid-cols-3 gap-10 ">
                        <div className="col-span-2 pb-40 ">
                            <div className=" ">
                                <h1 className="pt-20 pb-10 text-[30px] font-delius italic font-semibold text-primary">Shopping Cart</h1>
                                <div className="p-4 bg-[#fff8ef] rounded-[20px]">
                                    {cartItems && cartItems.length > 0 ? (<table className="w-[100%] ">
                                        <thead className=" ">
                                            <tr className=" relative text-center  ">
                                                <th className=" ">
                                                    Preview
                                                </th>
                                                <th className="">
                                                    Product
                                                </th>
                                                <th className="">
                                                    Price
                                                </th>
                                                <th className="">
                                                    Quantity
                                                </th>
                                                <th className="">
                                                    Total
                                                </th>
                                                
                                            </tr>
                                        </thead>
                                        {cartItems?.map(cartitem => (<tbody key={cartitem.id} className="">
                                            <tr  className="border-t-[1px] border-[#ccc] relative  ">
                                                <td className="w-[20%]">
                                                    <img className="w-[120px] h-[120px] bg-[#fef0de] rounded-[4px]  " src={cartitem.imgURL} />
                                                </td>
                                                <td className="font-semibold font-delius text-primary text-[18px] w-[50%]">
                                                    {cartitem.name}
                                                </td>
                                                <td className="w-[10%]">
                                                    <div className="flex justify-left align-center text-[18px] ">
                                                        <p className=""><FontAwesomeIcon icon={faEuroSign} className='' /></p>
                                                        <p className="">{cartitem.price}
                                                        </p>

                                                    </div>
                                                </td >
                                                <td className="w-[10%]">
                                                    <div className="flex bg-primary justify-around  rounded-[40px] ">
                                                        
                                                        <p className="">{cartitem.qty}</p>
                                                       
                                                    </div>
                                                </td>
                                                <td className="w-[10%]">
                                                    <div className="flex justify-left align-center text-[18px]">
                                                        <p><FontAwesomeIcon icon={faEuroSign} className='' /></p>
                                                        <p className="">{ cartitem.qty * cartitem.price}
                                                        </p>

                                                    </div>
                                                </td>
                                               
                                            </tr>

                                        </tbody>))}
                                    </table>) : (<h1 className="font-delius text-[20px] text-primary font-bold italic">No food in your cart.</h1>)}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="">
                                <h1 className="pt-20 pb-10 text-[30px] font-delius italic font-semibold text-primary">Order Summury</h1>
                                <div className="px-4 py-10 bg-[#fff8ef] rounded-[20px]">
                                    <table className="w-[100%]">
                                        <tbody className="text-[18px] font-delius font-semibold italic">
                                            <tr className=" w-[100%]">
                                                <td className="">Cart total</td>
                                                <td className=""><FontAwesomeIcon icon={faEuroSign} />{total}</td>
                                            </tr>
                                            <tr className="border-t-[1px] border-[#ccc]">
                                                <td>Shipping and Handling</td>
                                                <td><FontAwesomeIcon icon={faEuroSign} />5.2</td>
                                            </tr>
                                            <tr className="border-t-[1px] border-[#ccc]">
                                                <td>Order Total</td>
                                                <td><FontAwesomeIcon icon={faEuroSign} />{total + 5.2}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    {user && user ? (<button className="float-right py-2 px-4 bg-primary rounded-[20px] font-semibold font-delius text-[18px] hover:cursor-pointer mt-10 hover:shadow-2xl hover:text-white">
                                        Order Now</button>) : (<button className="float-right py-2 px-4 bg-primary rounded-[20px] font-semibold font-delius text-[18px] hover:cursor-pointer mt-10 hover:shadow-2xl hover:text-white">
                                            Login to order</button>)}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Delivery />
            <Footer />
        </div>
    );
}

export default Cart;
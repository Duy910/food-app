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
function Cart() {
    return ( 
        <div>
            <Nav />
            <div className='text-center p-[200px] bg-[#fff8ef] relative'>
                <img src={shape10} className='absolute left-0 top-[13%]' />
                <img src={shape12} className='absolute left-0 top-[73%]' />
                
                <img src={shape14} className='absolute top-[20%] right-[10%]'/>
                <div>
                    <h1 className='text-[40px] font-delius font-semibold text-primary'>Cart Page</h1>
                </div>
                <div className='font-semibold font-delius italic'>
                    <h1 className='text-[20px] '>Home <FontAwesomeIcon icon={faArrowRight} className='mx-2 text-primary '/> Cart</h1>
                </div>


            </div>
            <div className=" ">
                <div className="max-w-[1200px] my-0 mx-auto">
                    <div className="grid grid-cols-3 gap-10 ">
                        <div className="col-span-2 py-40 ">
                            <div className=" ">
                                <div className="p-4 bg-[#fff8ef] rounded-[10px]">
                                    <table className=" ">
                                        <thead className=" "> 
                                            <tr className=" relative ">
                                                <th className=" ">
                                                    Preview
                                                </th>
                                                <th className="pr-40">
                                                    Product
                                                </th>
                                                <th className="pr-10">
                                                    Price
                                                </th>
                                                <th>
                                                    Quantity
                                                </th>
                                                <th>
                                                    Total
                                                </th>
                                                <th className="">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="">
                                            <tr className="border-t-2 border-primary">
                                                <td className="">
                                                    <img className="max-w-[120px] bg-[#fef0de] rounded-[4px]" src={pizza1} />
                                                </td>
                                                <td className="">
                                                    Paneek Makhani Pizza
                                                </td>
                                                <td className="float-left">
                                                    <div className="flex justify-center align-center text-[18px]">
                                                        <p><FontAwesomeIcon icon={faEuroSign} className=''/></p>
                                                        <p className="">24.4
                                                        </p>
                                                       
                                                    </div>
                                                </td >
                                                <td className="">
                                                    <div className="flex bg-primary justify-around  rounded-[20px] ">
                                                        <button className=" px-2 py-1 hover:text-white ">
                                                           <FontAwesomeIcon icon={faMinus}/>
                                                        </button>
                                                        <p className="py-1 px-2">1</p>
                                                        <button className="px-2 py-1 hover:text-white">
                                                            <FontAwesomeIcon icon={faPlus}/>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="">
                                                <div className="flex justify-center align-center text-[18px]">
                                                        <p><FontAwesomeIcon icon={faEuroSign} className=''/></p>
                                                        <p className="">24.4
                                                        </p>
                                                       
                                                    </div>
                                                </td>
                                                <td className="">
                                                    <button className="py-2 px-4 bg-[#fff8ef] border-2 rounded-[4px] hover:bg-primary">
                                                        <FontAwesomeIcon icon={faXmark} className='text-[20px] '/>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 bg-yellow-300">
                            
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
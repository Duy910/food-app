import Nav from "../components/Nav";
import Delivery from "../components/Delivery";
import Footer from "../components/Footer";
import shape10 from '../img/shape_10.png'
import shape12 from '../img/shape_12.png'
import shape14 from '../img/shape_14.png'
import pizza1 from '../img/pizza_slide_1.png'

import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
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
                                        <thead className=" border-b-2 border-primary"> 
                                            <tr className=" ">
                                                <th className="py-4">
                                                    Preview
                                                </th>
                                                <th>
                                                    Product
                                                </th>
                                                <th>
                                                    Price
                                                </th>
                                                <th>
                                                    Quantity
                                                </th>
                                                <th>
                                                    Total
                                                </th>
                                                <th>
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="">
                                            <tr className="">
                                                <td className="p-2">
                                                    <img className="max-w-[120px] bg-[#fef0de] rounded-[4px]" src={pizza1} />
                                                </td>
                                                <td className="p-2">
                                                    Paneek Makhani Pizza
                                                </td>
                                                <td className="p-2">
                                                    <div className="flex ">
                                                    <h1 className="">24.4
                                                    </h1>
                                                    <FontAwesomeIcon icon={faEuroSign} />
                                                    </div>
                                                </td >
                                                <td className="p-2">
                                                    
                                                </td>
                                                <td className="p-2">
                                                   
                                                </td>
                                                <td className="p-2">
                                                    
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
import '../css/menu.css'
import pizza1 from'../img/pizza_slide_1.png'
import section from '../img/section_delimiter.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
function Menu() {
    return ( 
        <div className="max-w-[1200px] my-0 mx-auto">
            <div className='text-center py-20'>
                <h1 className='font-delius text-[30px] text-[#fdba74] font-semibold  '>FRESH QUALITY</h1>
                <h1 className='font-dirt text-[60px] font-semibold m-10 tracking-tight'>The Best Selling</h1>
                <img src={section} className='mx-auto   '/>
            </div>
            <div>
                <div className='grid grid-cols-4'>
                    <div className=' col-span-1 '>
                        <div className='text-center font-semibold p-10 border-2 rounded-[10px] hover:cursor-pointer hover:bg-[#fffbf1] hover:shadow-2xl mb-20'>
                            <div>
                                <img src={pizza1} className='mx-auto'/>
                            </div>
                            <div className=''>
                                <h1 className='font-dirt text-[40px] text-primary'>Pizza</h1>
                            </div>
                            <div>
                                <h1 className='text-[#555]'>Gourmet burger with arugula, feta cheese, quail eggs and...</h1>
                            </div>
                            <div>
                                 <p className='font-dirt text-primary' > <FontAwesomeIcon icon={faEuroSign}/> 24.4</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Menu;
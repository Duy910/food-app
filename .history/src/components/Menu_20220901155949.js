import '../css/menu.css'
import pizza1 from'../img/pizza_slide_1.png'
import section from '../img/section_delimiter.png'
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
                        <div className=''>
                            <div>
                                <img src={pizza1} className='mx-auto'/>
                            </div>
                            <div className='text-center'>
                                <h1 className='font-dirt text-[40px]'>Pizza</h1>
                            </div>
                            <div>
                                <h1>Gourmet burger with arugula, feta cheese, quail eggs and...</h1>
                            </div>
                            <div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Menu;
import shape10 from '../img/shape_10.png'
import shape12 from '../img/shape_12.png'
import shape13 from '../img/shape_13.png'
import shape14 from '../img/shape_14.png'
import shape15 from '../img/shape_15.png'
import shape16 from '../img/shape_16.png'
import biker from '../img/delivery_bike.png'

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
                    <img src={biker} className='z-20 absolute top-[18%]'/>
                </div>
                <div className='col-span-1'>
                    <div className='content'>
                        <h1 className='text-[50px]'>THE BEST</h1>
                        <h1 className='text-[120px] font-extrabold text-[#fdba74]'>PIZZA</h1>
                        <h1 className='text-[50px] ml-20'>ARROUND</h1>
                        
                    </div>

                </div>
            </div>
            
        </div>

     );
}

export default Delivery;
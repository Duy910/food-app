import '../css/slider.css'
import shape1 from '../img/hero_shape_1.png'
import shape2 from '../img/hero_shape_2.png'
import shape3 from '../img/hero_shape_3.png'
import shape4 from '../img/hero_shape_4.png'
function Slider() {
    return ( 
        <div className='h-[800px] bg-slider bg-black bg-cover ' >
            <div className='max-w-[1200px] my-0 mx-auto h-full relative  '>
                <div className=' bg-sliderPizza bg-no-repeat h-[580px] w-[620px] right-0 absolute top-[94px]'>

                </div>
                <div>
                    <h1 id='slider' className="text-white  text-[80px] font-black absolute top-[238px]">Enjoy Your Pizza</h1>
                    <span id='slider' className="text-white  text-[80px] font-black absolute top-[330px]">In Town</span>
                    {/* <img src={shape1}/> */}
                    <img className='absolute right-[10%] top-[42%]' src={shape2}/>
                    <img className='absolute right-[40%] top-[46%]' src={shape3}/>
                    <img className='absolute right-[75%] top-[6%]' src={shape3}/>

                    
                </div >
                <div className=''>
                    <h1 className='  bg-orange-300 absolute text-[40px] text-white'>Order Now</h1>
                </div>

            </div>
            
        </div>  
        
     );
}

export default Slider;
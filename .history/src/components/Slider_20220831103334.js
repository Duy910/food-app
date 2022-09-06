import '../css/slider.css'
import shape1 from '../img/hero_shape_1.png'
function Slider() {
    return ( 
        <div className='h-[800px] bg-slider bg-black bg-cover ' >
            <div className='max-w-[1200px] my-0 mx-auto h-full relative  '>
                <div className=' bg-sliderPizza bg-no-repeat h-[580px] w-[620px] right-0 absolute top-[94px]'>

                </div>
                <div>
                    <h1 id='slider' className="text-white  text-[80px] font-black absolute top-[238px]">Enjoy Your Pizza</h1>
                    <span id='slider' className="text-white  text-[80px] font-black absolute top-[330px]">In Town</span>
                    <img src='../img/hero_shape_4.png'/>
                    <img />
                    <img />
                    <img />
                    
                </div>

            </div>
            
        </div>  
        
     );
}

export default Slider;
import '../css/slider.css'
function Slider() {
    return ( 
        <div className='h-[800px] bg-slider bg-black bg-cover ' >
            <div className='max-w-[1200px] my-0 mx-auto h-full relative  '>
                <div className=' bg-sliderPizza bg-no-repeat h-[580px] w-[620px] right-0 absolute top-[94px]'>

                </div>
                <div>
                    <span id='slider' className="text-white  text-[80px] font-black ">Enjoy Your Pizza <br>In Town</br>  </span>
                    
                </div>

            </div>
            
        </div>  
        
     );
}

export default Slider;
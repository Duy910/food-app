import '../css/slider.css'
function Slider() {
    return ( 
        <div className='h-[800px] bg-slider bg-black bg-cover ' >
            <div className='max-w-screen-lg relative '>
                <div className='my-0 mx-auto bg-sliderPizza bg-no-repeat z-10 h-[580px] absolute '></div>

            </div>
            
        </div>
        
     );
}

export default Slider;
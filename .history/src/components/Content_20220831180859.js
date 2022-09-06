import shape10 from '../img/shape_10.png'
import shape12 from '../img/shape_12.png'
import shape13 from '../img/shape_13.png'
import shape14 from '../img/shape_14.png'
import shape15 from '../img/shape_15.png'
import shape16 from '../img/shape_16.png'
import shape17 from '../img/shape_17.png'
function Content() {
    return ( 
        <div className="h-[700px] bg-[#fff8ef] relative">
            <img src={shape10} className='absolute' />
            <img src={shape12} className='absolute top-[82%]' />
            <img src={shape13} className='absolute top-[40%] right-[46%]' />
            <img src={shape14} className='absolute top-[6%] right-[10%]'/>
            <img src={shape15} className='absolute top-[82%] right-[20%]'/>
            <img src={shape16} className='absolute right-[6%] top-[40%]'/>
            <img src={shape17} className='absolute'/>
            <div className='max-w-[1200px] my-0 mx-auto h-full'>

            </div>
        </div>
     );
}

export default Content;
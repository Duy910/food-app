import shape10 from '../img/shape_10.png'
import shape12 from '../img/shape_12.png'
import shape14 from '../img/shape_14.png'
import shape15 from '../img/shape_15.png'
import shape16 from '../img/shape_16.png'
import shape17 from '../img/shape_17.png'
function Content() {
    return ( 
        <div className="h-[700px] bg-[#fff8ef] relative">
            <img src={shape10} className='absolute' />
            <img src={shape12} className='absolute top-[82%]' />
            <img src={shape14} className='absolute top-[6%] '/>
            <img src={shape15} className='absolute'/>
            <img src={shape16} className='absolute'/>
            <img src={shape17} className='absolute'/>
        </div>
     );
}

export default Content;
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
            <img src={shape12} />
            <img src={shape14} />
            <img src={shape15} />
            <img src={shape16} />
            <img src={shape17} />
        </div>
     );
}

export default Content;
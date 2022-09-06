import '../css/content.css'
import section from '../img/section_delimiter.png'
function Menu() {
    return ( 
        <div className="">
            <div className='relative'>
                <h1 className='absolute'>FRESH QUALITY</h1>
                <h1 className='absolute'>We Offer People The Best Way</h1>
                <h1 className='absolute'>To Eat Best Food</h1>
                <img src={section} className='absolute'/>
            </div>
        </div>
     );
}

export default Menu;
import '../css/menu.css'
import section from '../img/section_delimiter.png'
function Menu() {
    return ( 
        <div className="">
            <div className='text-center p-20'>
                <h1 className='font-delius text-[30px] text-[#fdba74] font-semibold p-10 '>FRESH QUALITY</h1>
                <h1 className='font-rubik text-[50px] font-semibold'>We Offer People The Best Way</h1>
                <h1 className='font-rubik text-[50px] font-semibold'>To Eat Best Food</h1>
                <img src={section} className=''/>
            </div>
        </div>
     );
}

export default Menu;
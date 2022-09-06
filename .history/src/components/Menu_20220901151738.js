import '../css/menu.css'
import section from '../img/section_delimiter.png'
function Menu() {
    return ( 
        <div className="max-w-[1200px] my-0 mx-auto">
            <div className='text-center py-20'>
                <h1 className='font-delius text-[30px] text-[#fdba74] font-semibold  '>FRESH QUALITY</h1>
                <h1 className='font-rubik text-[50px] font-semibold mt-10'>We Offer People The Best Food</h1>
                <h1 className='font-rubik text-[50px] font-semibold mb-10'>Off Us</h1>
                <img src={section} className='mx-auto   '/>
            </div>
            <div>

            </div>
        </div>
     );
}

export default Menu;
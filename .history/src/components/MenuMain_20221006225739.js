import shape10 from '../img/shape_10.png'
import shape12 from '../img/shape_12.png'
import shape14 from '../img/shape_14.png'
import pizza1 from '../img/pizza_slide_1.png'
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { actionType, initState } from '../store/reducer'
import { useContext } from 'react'
import Context from '../store/Context'
import { useEffect } from 'react'
import { getAllProducts } from '../utils/firebase'
import '../css/menumain.css'
function MenuMain() {
    const [{ foodItems }, dispatch] = useContext(Context)
    const fetchData = async () => {
        await getAllProducts().then((products) => {
            // console.log(products);
            dispatch({
                type: actionType.SET_FOOD_ITEMS,
                foodItems: products
            })
        })
    }
    useEffect(() => {
        fetchData()
    }, [])

    const handleActive = (a) => {
        const tabActive = document.querySelector('.activeMenu')
        tabActive.classList.remove('activeMenu')
        a.classList.add('activeMenu')
       

    }
    
    return (
        <div>
            <div className='text-center p-[200px] bg-[#fff8ef] relative'>
                <img src={shape10} className='absolute left-0 top-[13%]' />
                <img src={shape12} className='absolute left-0 top-[73%]' />

                <img src={shape14} className='absolute top-[20%] right-[10%]' />
                <div>
                    <h1 className='text-[40px] font-delius font-semibold text-primary'>Food Menu</h1>
                </div>
                <div className='font-semibold font-delius italic'>
                    <h1 className='text-[20px] '>Home <FontAwesomeIcon icon={faArrowRight} className='mx-2 text-primary ' /> Menu</h1>
                </div>

            </div>
            <div className='bg-menudetail '>
                <div className='max-w-[1000px] my-0 mx-auto'>
                    <div className='p-20 '>
                        <ul className='flex bg-[#ebebeb]  py-4  rounded-[40px] justify-between hover:cursor-pointer relative'>
                            <li className=''>
                                <a
                                    onClick={(e) => { handleActive(e.target) }}
                                    className=' activeMenu font-bold font-delius text-[16px] rounded-[40px] px-6 py-4  '>ALL</a>
                            </li>
                            <li className=''>
                                <a
                                    onClick={(e) => { handleActive(e.target) }}
                                    className=' font-bold font-delius text-[16px] rounded-[40px]  px-6 py-4 '>PIZZAS</a>
                            </li>

                            <li className=''>
                                <a
                                    onClick={(e) => { handleActive(e.target) }}
                                    className=' font-bold font-delius text-[16px] rounded-[40px] px-6 py-4 '>DRINKS</a>
                            </li>
                            <li className=''>
                                <a
                                    onClick={(e) => { handleActive(e.target) }}

                                    className=' font-bold font-delius text-[16px] rounded-[40px] px-6 py-4 '>SALADS</a>
                            </li>
                            <li className=''>
                                <a
                                    onClick={(e) => { handleActive(e.target) }}
                                    className=' font-bold font-delius text-[16px] rounded-[40px] px-6 py-4 '>PASTA</a>
                            </li>
                            <li className=''>
                                <a
                                    onClick={(e) => { handleActive(e.target) }}
                                    className=' font-bold font-delius text-[16px] rounded-[40px] px-6 py-4 '>BURGER</a>
                            </li>
                            <li className=''>
                                <a
                                    onClick={(e) => { handleActive(e.target) }}
                                    className=' font-bold font-delius text-[16px] rounded-[40px] px-6 py-4'>DESERTS</a>
                            </li>

                            
                              
                            
                        </ul>
                    </div>


                </div>
                <div className='max-w-[1200px] my-0 mx-auto' >
                  
                </div>
            </div>
        </div>
    );
}


export default MenuMain;
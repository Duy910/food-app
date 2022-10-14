import shape10 from '../img/shape_10.png'
import shape12 from '../img/shape_12.png'
import shape14 from '../img/shape_14.png'
import pizza1 from '../img/pizza_slide_1.png'
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { actionType, initState } from '../store/reducer'
import { useContext, useState } from 'react'
import Context from '../store/Context'
import { useEffect } from 'react'
import { getAllProducts } from '../utils/firebase'
import { categories } from '../utils/data';
import '../css/menumain.css'
function MenuMain({ data }) {
    const [active, setAtive] = useState('pizza')
    const [{ foodItems, cartItems }, dispatch] = useContext(Context)
    

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

   

    const products = foodItems?.filter(foodItem => foodItem?.category === active)

    const handleActive = (category) => {
        setAtive(category.urlParamName)
    }
  
    const handleCartItems = (product) => {
       

        const findItem = cartItems.find((item) => {
            return item.id === product.id
        }
        
            
        )
        
        
        if(findItem === undefined) {
            dispatch({
                type: actionType.ADD_CART_ITEMS,
                cartItems: product
            })
        }
        // else{
        //     const indexItem = cartItems.findIndex((item) => {
        //         return item.id === product.id
        //     })
        //     console.log(cartItems[indexItem]);
        //     cartItems[indexItem].qty += 1
        //     dispatch({
        //         type:actionType.SET_CART_ITEMS,
        //         cartItems: cartItems
        //     })

        // }
    }

  
   
 

    
    
    return (
        <div>
            <div className='text-center p-[200px] bg-[#fff8ef] relative phone:ml-[-26px] tablet:ml-[0]'>
                <img src={shape10} className='absolute left-0 top-[13%]' />
                <img src={shape12} className='absolute left-0 top-[73%]' />

                <img src={shape14} className='absolute top-[20%] right-[10%]' />
                <div>
                    <h1 className='tablet:text-[40px] phone:text-[20px] font-delius font-semibold text-primary'>Food Menu</h1>
                </div>
                <div className='font-semibold font-delius italic'>
                    <h1 className='text-[20px] '>Home <FontAwesomeIcon icon={faArrowRight} className='mx-2 text-primary ' /> Menu</h1>
                </div>

            </div>
            <div className='bg-menudetail '>
                <div className='max-w-[1000px] my-0 mx-auto'>
                    <div className='p-20 phone:hidden tablet:block '>
                        <ul className='flex bg-[#ebebeb]  py-4  rounded-[40px] justify-between hover:cursor-pointer relative'>

                            {categories && categories.map((category) => {
                                return <li 
                                key={category.id}
                                className=''>
                                    <a
                                        onClick={() => handleActive(category)}
                                        className={` font-bold font-delius text-[16px] rounded-[40px]  px-6 py-4 uppercase ${active === category.urlParamName ? 'activeMenu' : ''}`}>{category.urlParamName}</a>
                                </li>
                            })}

                        </ul>
                    </div>


                </div>
                <div className='max-w-[1200px] my-0 mx-auto' >
                    <div className=' flex flex-wrap  mb-20'>
                        {products && products.map((product) => {
                            return (
                                <div key={product.id} className='py-6 hover:shadow-2xl hover:rounded-[10px] hover:bg-[#fff8ef] w-[600px] ' >
                                    <div className='flex px-2'>
                                        <div className=' mr-3 '>
                                            <img className='bg-contain overflow-hidden max-w-[120px] max-h-[120px]' src={product.imgURL} />
                                        </div>
                                        <div className='relative overflow-hidden menuCart hover: cursor-pointer'>
                                            <div className='flex tablet:text-[25px] phone:text-[16px] font-delius font-semibold'>
                                                <h1 className=' '>{product.name}</h1>
                                                <h1 className='ml-4 text-primary'> <FontAwesomeIcon icon={faEuroSign} />{product.price}</h1>

                                            </div>
                                            <h1 className='italic text-[#666] font-rubik font-semiblod'>{product.des}
                                            </h1>
                                            <div className='' >
                                                <button
                                                onClick={() => handleCartItems(product)} 
                                                className='px-4 py-2 bg-primary rounded-[8px] font-semibold  hover:text-white cartButton hidden absolute  hover:cursor-pointer  '>Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default MenuMain;
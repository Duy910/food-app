import '../css/menu.css'
import pizza1 from '../img/pizza_slide_1.png'
import section from '../img/section_delimiter.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDove, faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { db } from "../firebase/firebase-config";
import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
function Menu() {
  const [products, setProducts] = useState([])
  const productsCollectionRef = collection(db, "allProduct")
  useEffect(() => {
    const getProducts = async () => {
        const data = await getDocs(productsCollectionRef)
        setProducts(data.docs.map((doc) => ({
            ...doc.data()
        })))
    }
    getProducts()

  },[])
    
    return (
        <div className="max-w-[1200px] my-0 mx-auto">
            <div className='text-center py-20'>
                <h1 className='font-delius text-[30px] text-[#fdba74] font-semibold  '>FRESH QUALITY</h1>
                <h1 className='font-dirt text-[60px] font-semibold m-10 tracking-tight'>The Best Selling</h1>
                <img src={section} className='mx-auto   ' />
            </div>
            <div>
                <div className='grid grid-cols-4 gap-4'>
                    {products.map((product, index) => {
                        return <div key={index} className=' col-span-1 '>
                            <div className='text-center font-semibold p-10 border-2 rounded-[10px] hover:cursor-pointer hover:bg-[#fffbf1] hover:shadow-2xl mb-20 relative menu'>
                                <div>
                                    <img src={product.img} className='mx-auto ' />
                                </div>
                                <div className='absolute left-[25%] mt-8  menuA hidden '>
                                    <a href='' className=' py-3 px-5 bg-primary  rounded-[10px] text-[20px] text-white hover:text-black '>
                                        Add to cart
                                    </a>
                                </div>
                                <div className=''>
                                    <h1 className='font-dirt text-[30px] text-primary mt-20 leading-4'>{product.name}</h1>
                                </div>
                                <div>
                                    <h1 className='text-[#555]'>{product.des}</h1>
                                </div>
                                <div>
                                    <p className='font-dirt text-primary' > <FontAwesomeIcon icon={faEuroSign} /> {product.price}</p>
                                </div>
                            </div>

                        </div>
                    })}





                </div>
            </div>
        </div>
    );
}

export default Menu;

import { faPlus, faEuroSign, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react'
import Context from '../store/Context';
import { actionType, userInfo } from '../store/reducer';
import loginIcon from '../img/login.png'
import { Routes, Route, Link, Outlet, BrowserRouter as Router } from 'react-router-dom';
let items = []
function CartItems({ cartitem }) {
    const [{ cartItems }, dispatch] = useContext(Context)
    const [flag, setFlag] = [1]
    const [quantity, setQuantity] = useState(cartitem.qty)


   
  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
  };

  const updateQty = (action, id) => {
    if (action == "add") {
      setQuantity(quantity + 1);
      cartItems.map((item) => {
        if (item.id === id) {
          item.qty += 1;
          setFlag(flag + 1);
        }
      });
      cartDispatch();
    } else {
      // initial state value is one so you need to check if 1 then remove it
      if (quantity == 1) {
        items = cartItems.filter((item) => item.id !== id);
        setFlag(flag + 1);
        cartDispatch();
      } else {
        setQuantity(quantity - 1);
        cartItems.map((item) => {
          if (item.id === id) {
            item.qty -= 1;
            setFlag(flag + 1);
          }
        });
        cartDispatch();
      }
    }
  };

  useEffect(() => {
    items = cartItems;
  }, [quantity, items]);

    return (
        <li key={cartitem?.id} className=' flex bg-[#fff8ef] justify-around relative '>
                            <div className='flex py-2 items-center'>
                                <div className='bg-[#fef0de] rounded-[4px]'>
                                    <img className='w-[100px] h-[100px] ' src={cartitem?.imgURL} />
                                </div>
                                <div className='ml-2'>
                                    <h1 className='text-primary font-delius italic text-[18px] my-2'>{cartitem?.name}</h1>
                                    <h1 className='text-black font-bold font-delius italic text-[18px] my-2'><FontAwesomeIcon icon={faEuroSign} />{cartitem?.price}</h1>

                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className=" flex bg-primary   rounded-[20px] text-[16px] ">
                                    <button
                                        onClick={() => updateQty('remove', cartitem.id)}
                                        className=" px-2 py-1 text-white hover:text-black  ">
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <p className="py-1 px-2 text-white">{quantity}</p>
                                    <button
                                        onClick={() => updateQty('add', cartitem.id)}
                                        className="px-2 py-1 text-white hover:text-black ">
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                            </div>
                            <div
                                
                                className='absolute right-[16px]'>
                                <FontAwesomeIcon className='text-primary hover:text-black' icon={faXmark} />
                            </div>
                        </li>
    );
}

export default CartItems;
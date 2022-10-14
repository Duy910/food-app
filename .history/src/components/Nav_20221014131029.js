import logo from '../img/logo.png'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping, faUser, faImage, faBasketShopping, faUserCircle, faPlus, faRightFromBracket, faEuroSign, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Routes, Route, Link, Outlet, BrowserRouter as Router } from 'react-router-dom';
import '../css/nav.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { app } from '../firebase/firebase-config'
import { useContext, useEffect, useState } from 'react'
import Context from '../store/Context';
import { actionType, userInfo } from '../store/reducer';
import Avatar from '../img/avatar.png'
import loginIcon from '../img/footer_logo.png'
import delivery from '../img/delivery_bike.png'
import phone from '../img/hero_pizza.png'
import emptyCart from '../img/emptyCart.svg'
import CartItems from './CartItems';
import { FaBars } from 'react-icons/fa'




function Nav() {
    const firebaseAuth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const [{ user, cartItems }, dispatch] = useContext(Context)
    const [flag, setFlag] = useState(1)
    const [total, setTotal] = useState(0)


    const login = async () => {
        if (user === null) {
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0]

            })
            localStorage.setItem('data', JSON.stringify(providerData[0]))

        }
    }

    const logout = () => {

        localStorage.clear()
        dispatch({
            type: actionType.SET_USER,
            user: null
        })

    }
    useEffect(() => {
        if (user !== null) {
            const hidden = document.querySelector('.active')
            hidden.classList.add('hidden')
        } else {
            const hidden = document.querySelector('.active')
            hidden.classList.remove('hidden')
        }
    }, [user])

    // const handleNav = (tab) => {
    //     const activeNav = document.querySelector('.activeNav')
    //     activeNav.classList.remove('activeNav')
    //     tab.classList.add('activeNav')
    // }

    useEffect(() => {
        let result = cartItems.reduce((acc, cur) => {

            return acc + cur.qty * cur.price
        }, 0)

        setTotal(result)
        // console.log(total);
    }, [total, flag, cartItems])





    return (

        <nav>
            <div className=" h-14 bg-slate-800 fixed w-full z-50 font-delius">
                {/* {deskop----------------------------------------------------- } */}
                <div className='max-w-[1200px] my-0 mx-auto lg:flex items-center h-14 justify-between hidden'>
                    <div className=''>
                        <ul className='h-14 items-center hover:cursor-pointer relative flex ' >
                            <li>
                                <Link to='/food-app'> <img src={logo} className="h-9 mr-10 " /></Link>
                            </li>
                            <li ><Link to='/food-app'

                                className='mr-6 text-white hover:text-yellow-200 tabNav' >HOME</Link></li>
                            <li className='relative nav'>
                                <Link to='/menu'

                                    className='mr-6 text-white hover:text-yellow-200 tabNav' >MENU</Link></li>


                            <li ><Link to='/cart '

                                className='mr-6 text-white hover:text-yellow-200' >CART</Link></li>
                            <li ><Link to='/food-app '

                                className='mr-6 text-white hover:text-yellow-200' >PAGES</Link></li>
                            <li ><Link to='/food-app '

                                className='mr-6 text-white hover:text-yellow-200' >SHOP</Link></li>

                        </ul>
                    </div>
                    <div className=''>

                        <ul className='flex h-14 items-center hover:cursor-pointer  '>
                            {/* <li className='text-2xl ml-6 text-white hover:text-yellow-200' ><Link to='/food-app'><FontAwesomeIcon icon={faFacebook} /></Link></li>
                            <li className='text-2xl ml-6 text-white hover:text-yellow-200' ><Link to='/food-app'><FontAwesomeIcon icon={faInstagram} /></Link></li>
                            <li className='text-2xl ml-6 mr-6 text-white hover:text-yellow-200 ' ><Link to='/food-app'><FontAwesomeIcon icon={faYoutube} /></Link></li> */}

                            <li className='active flex '>
                                <ul className='flex'>
                                    <li className='text-white ml-2 hover:text-yellow-200 '><Link to='/signin'>Sign in</Link></li>
                                    <li className='text-white ml-6 hover:text-yellow-200 mr-20 '><Link to='/signup'>Sign up</Link></li>
                                </ul>
                            </li>

                            <li className='relative imageUser   '><img
                                src={user && user ? user.photoURL : Avatar}
                                className='w-8  rounded-full  '
                                onClick={login}

                            />
                                <ul className='absolute bg-[#fff8ef] top-[44px]  w-[140px]  left-[-46px] py-6 rounded-[10px] shadow-xl  font-delius optionUser none  '>
                                    <li className='py-2 hover:text-primary  px-2  '><Link to='/create-product'>New Product <FontAwesomeIcon icon={faPlus} className='ml-1' /></Link> </li>
                                    <li
                                        className='py-2 hover:text-primary px-2  ' onClick={logout}>Logout <FontAwesomeIcon icon={faRightFromBracket} className='ml-1'

                                        /></li>
                                </ul>
                            </li>
                            <li className='relative text-xl text-white ml-24 hover:text-yellow-200 '>
                                <div href='/food-app' className='iconProduct' >

                                    <FontAwesomeIcon icon={faBasketShopping} className='relative mr-6 '>

                                    </FontAwesomeIcon>
                                    <div className='w-[400px]  z-20  absolute top-[149%] right-[0] listProduct hidden  bg-white   '>
                                        {cartItems && cartItems.length > 0 ? (<div>
                                            <div className='flex justify-between items-center py-2'>
                                                <img className=' h-[50px] ' src={delivery} />
                                                <img className=' h-[40px] ' src={loginIcon} />
                                                <img className=' h-[50px] ' src={phone} />
                                            </div>
                                            <ul className='h-[480px] overflow-y-scroll listProductUl rounded-[10px] '>
                                                {cartItems && cartItems.map((cartitem) => {
                                                    return <CartItems
                                                        cartitem={cartitem}
                                                        setFlag={setFlag}
                                                        flag={flag}
                                                        key={cartitem.id}
                                                    />
                                                })}




                                            </ul>

                                            <div className=' bg-[#fff8ef]  h-[100px] mt-[3%] rounded-t-[20px] flex items-center justify-around'>
                                                <div className='flex font-delius italic font-bold items-center '>
                                                    <h1 className='text-primary  text-[20px]  '>Sub-total:
                                                    </h1>
                                                    <h1 className=' text-black text-[18px] ml-2'> <FontAwesomeIcon icon={faEuroSign} />{total}</h1>
                                                </div>
                                                <div>
                                                    <Link to='/cart' className='text-black text-[18px] font-bold items-center italic bg-primary p-2 rounded-[10px] listProductCheckOut'
                                                    >Check out</Link>
                                                </div>
                                            </div>
                                        </div>) : (<div className='w-[100%] h-[100%] flex items-center justify-center'>
                                            <h1 className='text-[20px] font-delius font-bold text-primary'>There's nothing here.</h1>
                                        </div>)}

                                    </div>


                                </div>
                                {cartItems && cartItems.length > 0 ? (<div className=''>
                                    <span className='absolute text-[14px] leading-4  px-2 text-center font-bold text-primary rounded-full border-[1px] top-[-6px] left-[10px] border-[#1e293b] border-solid bg-white' >{cartItems.length}</span>
                                </div>
                                ) : null}

                            </li>




                        </ul>

                    </div>
                </div>
                {/* tablet------------------------------------------------------------------------*/}
                <div className='max-w-[1200px] my-0 mx-auto md:flex justify-between hidden lg:hidden'>
                    <ul className='h-14  hover:cursor-pointer relative items-center justify-between flex'>
                        <li>
                            <Link to='/food-app'> <img src={logo} className="h-9 ml-[40px] " /></Link>
                        </li>
                        <li ><Link to='/food-app'

                            className='mr-6 ml-10 text-white hover:text-yellow-200 tabNav' >HOME</Link></li>
                        <li className='relative nav'>
                            <Link to='/menu'

                                className='mr-6 text-white hover:text-yellow-200 tabNav' >MENU</Link></li>


                        <li ><Link to='/cart '

                            className='mr-6 text-white hover:text-yellow-200' >CART</Link></li>


                    </ul>
                    <ul className='h-14  hover:cursor-pointer relative items-center justify-between flex'>
                        <li className='relative imageUser    '><img
                            src={user && user ? user.photoURL : Avatar}
                            className='w-8  rounded-full  '
                            onClick={login}

                        />
                            <ul className='absolute bg-[#fff8ef] top-[44px]  w-[140px]  left-[-46px] py-6 rounded-[10px] shadow-xl  font-delius optionUser none  '>
                                <li className='py-2 hover:text-primary  px-2  '><Link to='/create-product'>New Product <FontAwesomeIcon icon={faPlus} className='ml-1' /></Link> </li>
                                <li
                                    className='py-2 hover:text-primary px-2  ' onClick={logout}>Logout <FontAwesomeIcon icon={faRightFromBracket} className='ml-1'

                                    /></li>
                            </ul>
                        </li>
                        <li className='relative text-xl text-white ml-24 hover:text-yellow-200 mr-[40px]'>
                            <div href='/food-app' className='iconProduct' >

                                <FontAwesomeIcon icon={faBasketShopping} className='relative  '>

                                </FontAwesomeIcon>
                                <div className='w-[400px]  z-20  absolute top-[149%] right-[0] listProduct  hidden bg-white   '>
                                    {cartItems && cartItems.length > 0 ? (<div>
                                        <div className='flex justify-between items-center py-2'>
                                            <img className=' h-[50px] ' src={delivery} />
                                            <img className=' h-[40px] ' src={loginIcon} />
                                            <img className=' h-[50px] ' src={phone} />
                                        </div>
                                        <ul className='h-[480px] overflow-y-scroll listProductUl rounded-[10px] '>
                                            {cartItems && cartItems.map((cartitem) => {
                                                return <CartItems
                                                    cartitem={cartitem}
                                                    setFlag={setFlag}
                                                    flag={flag}
                                                    key={cartitem.id}
                                                />
                                            })}
                                        </ul>

                                        <div className=' bg-[#fff8ef]  h-[100px] mt-[3%] rounded-t-[20px] flex items-center justify-around'>
                                            <div className='flex font-delius italic font-bold items-center '>
                                                <h1 className='text-primary  text-[20px]  '>Sub-total:
                                                </h1>
                                                <h1 className=' text-black text-[18px] ml-2'> <FontAwesomeIcon icon={faEuroSign} />{total}</h1>
                                            </div>
                                            <div>
                                                <Link to='/cart' className='text-black text-[18px] font-bold items-center italic bg-primary p-2 rounded-[10px] listProductCheckOut'
                                                >Check out</Link>
                                            </div>
                                        </div>
                                    </div>) : (<div className='w-[100%] h-[100%] flex items-center justify-center'>
                                        <h1 className='text-[20px] font-delius font-bold text-primary'>There's nothing here.</h1>
                                    </div>)}

                                </div>

                            </div>
                            {cartItems && cartItems.length > 0 ? (<div className=''>
                                <span className='absolute text-[14px] leading-4  px-2 text-center font-bold text-primary rounded-full border-[1px] top-[-6px] left-[10px] border-[#1e293b] border-solid bg-white' >{cartItems.length}</span>
                            </div>
                            ) : null}
                        </li>
                    </ul>
                </div>

                {/* {mobile}------------------------------------------------------------------- */}
                <div className='max-w-[1200px] my-0 mx-auto phone:flex justify-between hidden md:hidden'>

                    <ul className='h-14  hover:cursor-pointer relative items-center justify-between flex'>
                        
                        <li className='relative iconListHome'>
                            
                            <FaBars className='text-white ml-2 '>
                                
                               
                            </FaBars>
                            <ul className='absolute bg-primary top-[35px] listHome h-[100px] rounded-r-[10px]  '>
                                    <li ><Link to='/food-app'

                                        className='mr-6 p-2 text-black  hover:text-yellow-200 tabNav ' >HOME</Link></li>
                                    <li className='relative nav'>
                                        <Link to='/menu'

                                            className='mr-6 p-2 text-black  hover:text-yellow-200 tabNav' >MENU</Link></li>


                                    <li ><Link to='/cart '

                                        className='mr-6 p-2  text-black  hover:text-yellow-200' >CART</Link></li>
                                </ul>
                        </li>
                        <li>
                            <Link to='/food-app'> <img src={logo} className="h-9 ml-[40px] " /></Link>
                        </li>

                    </ul>
                    <ul className='h-14  hover:cursor-pointer relative items-center justify-between flex'>
                        <li className='relative imageUser    '><img
                            src={user && user ? user.photoURL : Avatar}
                            className='w-8  rounded-full  '
                            onClick={login}

                        />
                            <ul className='absolute bg-[#fff8ef] top-[44px]  w-[140px]  left-[-46px] py-6 rounded-[10px] shadow-xl  font-delius optionUser none  '>
                                <li className='py-2 hover:text-primary  px-2  '><Link to='/create-product'>New Product <FontAwesomeIcon icon={faPlus} className='ml-1' /></Link> </li>
                                <li
                                    className='py-2 hover:text-primary px-2  ' onClick={logout}>Logout <FontAwesomeIcon icon={faRightFromBracket} className='ml-1'

                                    /></li>
                            </ul>
                        </li>
                        <li className='relative text-xl text-white ml-24 hover:text-yellow-200 mr-[40px]'>
                            <div href='/food-app' className='iconProduct' >

                                <FontAwesomeIcon icon={faBasketShopping} className='relative  '>

                                </FontAwesomeIcon>
                                <div className='w-[400px]  z-20  absolute top-[149%] right-[0] listProduct  hidden bg-white   '>
                                    {cartItems && cartItems.length > 0 ? (<div>
                                        <div className='flex justify-between items-center py-2'>
                                            <img className=' h-[50px] ' src={delivery} />
                                            <img className=' h-[40px] ' src={loginIcon} />
                                            <img className=' h-[50px] ' src={phone} />
                                        </div>
                                        <ul className='h-[480px] overflow-y-scroll listProductUl rounded-[10px] '>
                                            {cartItems && cartItems.map((cartitem) => {
                                                return <CartItems
                                                    cartitem={cartitem}
                                                    setFlag={setFlag}
                                                    flag={flag}
                                                    key={cartitem.id}
                                                />
                                            })}
                                        </ul>

                                        <div className=' bg-[#fff8ef]  h-[100px] mt-[3%] rounded-t-[20px] flex items-center justify-around'>
                                            <div className='flex font-delius italic font-bold items-center '>
                                                <h1 className='text-primary  text-[20px]  '>Sub-total:
                                                </h1>
                                                <h1 className=' text-black text-[18px] ml-2'> <FontAwesomeIcon icon={faEuroSign} />{total}</h1>
                                            </div>
                                            <div>
                                                <Link to='/cart' className='text-black text-[18px] font-bold items-center italic bg-primary p-2 rounded-[10px] listProductCheckOut'
                                                >Check out</Link>
                                            </div>
                                        </div>
                                    </div>) : (<div className='w-[100%] h-[100%] flex items-center justify-center'>
                                        <h1 className='text-[20px] font-delius font-bold text-primary'>There's nothing here.</h1>
                                    </div>)}

                                </div>

                            </div>
                            {cartItems && cartItems.length > 0 ? (<div className=''>
                                <span className='absolute text-[14px] leading-4  px-2 text-center font-bold text-primary rounded-full border-[1px] top-[-6px] left-[10px] border-[#1e293b] border-solid bg-white' >{cartItems.length}</span>
                            </div>
                            ) : null}
                        </li>
                    </ul>
                </div>

            </div>


        </nav>

    );
}

export default Nav;
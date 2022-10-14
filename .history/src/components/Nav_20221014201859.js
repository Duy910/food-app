import logo from '../food-appimg/food-applogo.png'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/food-appfree-brands-svg-icons';
import { faBagShopping, faUser, faImage, faBasketShopping, faUserCircle, faPlus, faRightFromBracket, faEuroSign, faMinus, faXmark } from '@fortawesome/food-appfree-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/food-appreact-fontawesome';
import { Routes, Route, Link, Outlet, BrowserRouter as Router } from 'react-router-dom';
import '../food-appcss/food-appnav.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/food-appauth'
import { app } from '../food-appfirebase/food-appfirebase-config'
import { useContext, useEffect, useState } from 'react'
import Context from '../food-appstore/food-appContext';
import { actionType, userInfo } from '../food-appstore/food-appreducer';
import Avatar from '../food-appimg/food-appavatar.png'
import loginIcon from '../food-appimg/food-appfooter_logo.png'
import delivery from '../food-appimg/food-appdelivery_bike.png'
import phone from '../food-appimg/food-apphero_pizza.png'
import emptyCart from '../food-appimg/food-appemptyCart.svg'
import CartItems from './food-appCartItems';
import { FaBars } from 'react-icons/food-appfa'




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

    /food-app/food-app const handleNav = (tab) => {
    /food-app/food-app     const activeNav = document.querySelector('.activeNav')
    /food-app/food-app     activeNav.classList.remove('activeNav')
    /food-app/food-app     tab.classList.add('activeNav')
    /food-app/food-app }

    useEffect(() => {
        let result = cartItems.reduce((acc, cur) => {

            return acc + cur.qty * cur.price
        }, 0)

        setTotal(result)
        /food-app/food-app console.log(total);
    }, [total, flag, cartItems])





    return (

        <nav>
            <div className=" h-14 bg-slate-800 fixed w-full z-50 font-delius">
                {/food-app* {deskop----------------------------------------------------- } */food-app}
                <div className='max-w-[1200px] my-0 mx-auto lg:flex items-center h-14 justify-between hidden'>
                    <div className=''>
                        <ul className='h-14 items-center hover:cursor-pointer relative flex ' >
                            <li>
                                <Link to='/food-app'> <img src={logo} className="h-9 mr-10 " /food-app></food-appLink>
                            </food-appli>
                            <li ><Link to='/food-app'

                                className='mr-6 text-white hover:text-yellow-200 tabNav' >HOME</food-appLink></food-appli>
                            <li className='relative nav'>
                                <Link to='/food-appmenu'

                                    className='mr-6 text-white hover:text-yellow-200 tabNav' >MENU</food-appLink></food-appli>


                            <li ><Link to='/food-appcart '

                                className='mr-6 text-white hover:text-yellow-200' >CART</food-appLink></food-appli>
                            <li ><Link to='/food-app '

                                className='mr-6 text-white hover:text-yellow-200' >PAGES</food-appLink></food-appli>
                            <li ><Link to='/food-app '

                                className='mr-6 text-white hover:text-yellow-200' >SHOP</food-appLink></food-appli>

                        </food-appul>
                    </food-appdiv>
                    <div className=''>

                        <ul className='flex h-14 items-center hover:cursor-pointer  '>
                            {/food-app* <li className='text-2xl ml-6 text-white hover:text-yellow-200' ><Link to='/food-app'><FontAwesomeIcon icon={faFacebook} /food-app></food-appLink></food-appli>
                            <li className='text-2xl ml-6 text-white hover:text-yellow-200' ><Link to='/food-app'><FontAwesomeIcon icon={faInstagram} /food-app></food-appLink></food-appli>
                            <li className='text-2xl ml-6 mr-6 text-white hover:text-yellow-200 ' ><Link to='/food-app'><FontAwesomeIcon icon={faYoutube} /food-app></food-appLink></food-appli> */food-app}

                            <li className='active flex '>
                                <ul className='flex'>
                                    <li className='text-white ml-2 hover:text-yellow-200 '><Link to='/food-appsignin'>Sign in</food-appLink></food-appli>
                                    <li className='text-white ml-6 hover:text-yellow-200 mr-20 '><Link to='/food-appsignup'>Sign up</food-appLink></food-appli>
                                </food-appul>
                            </food-appli>

                            <li className='relative imageUser   '><img
                                src={user && user ? user.photoURL : Avatar}
                                className='w-8  rounded-full  '
                                onClick={login}

                            /food-app>
                                <ul className='absolute bg-[#fff8ef] top-[44px]  w-[140px]  left-[-46px] py-6 rounded-[10px] shadow-xl  font-delius optionUser none  '>
                                    <li className='py-2 hover:text-primary  px-2  '><Link to='/food-appcreate-product'>New Product <FontAwesomeIcon icon={faPlus} className='ml-1' /food-app></food-appLink> </food-appli>
                                    <li
                                        className='py-2 hover:text-primary px-2  ' onClick={logout}>Logout <FontAwesomeIcon icon={faRightFromBracket} className='ml-1'

                                        /food-app></food-appli>
                                </food-appul>
                            </food-appli>
                            <li className='relative text-xl text-white ml-24 hover:text-yellow-200 '>
                                <div href='/food-app' className='iconProduct' >

                                    <FontAwesomeIcon icon={faBasketShopping} className='relative mr-6 '>

                                    </food-appFontAwesomeIcon>
                                    <div className='w-[400px]  z-20  absolute top-[149%] right-[0] listProduct hidden  bg-white   '>
                                        {cartItems && cartItems.length > 0 ? (<div>
                                            <div className='flex justify-between items-center py-2'>
                                                <img className=' h-[50px] ' src={delivery} /food-app>
                                                <img className=' h-[40px] ' src={loginIcon} /food-app>
                                                <img className=' h-[50px] ' src={phone} /food-app>
                                            </food-appdiv>
                                            <ul className='h-[480px] overflow-y-scroll listProductUl rounded-[10px] '>
                                                {cartItems && cartItems.map((cartitem) => {
                                                    return <CartItems
                                                        cartitem={cartitem}
                                                        setFlag={setFlag}
                                                        flag={flag}
                                                        key={cartitem.id}
                                                    /food-app>
                                                })}




                                            </food-appul>

                                            <div className=' bg-[#fff8ef]  h-[100px] mt-[3%] rounded-t-[20px] flex items-center justify-around'>
                                                <div className='flex font-delius italic font-bold items-center '>
                                                    <h1 className='text-primary  text-[20px]  '>Sub-total:
                                                    </food-apph1>
                                                    <h1 className=' text-black text-[18px] ml-2'> <FontAwesomeIcon icon={faEuroSign} /food-app>{total}</food-apph1>
                                                </food-appdiv>
                                                <div>
                                                    <Link to='/food-appcart' className='text-black text-[18px] font-bold items-center italic bg-primary p-2 rounded-[10px] listProductCheckOut'
                                                    >Check out</food-appLink>
                                                </food-appdiv>
                                            </food-appdiv>
                                        </food-appdiv>) : (<div className='w-[100%] h-[100%] flex items-center justify-center'>
                                            <h1 className='text-[20px] font-delius font-bold text-primary'>There's nothing here.</food-apph1>
                                        </food-appdiv>)}

                                    </food-appdiv>


                                </food-appdiv>
                                {cartItems && cartItems.length > 0 ? (<div className=''>
                                    <span className='absolute text-[14px] leading-4  px-2 text-center font-bold text-primary rounded-full border-[1px] top-[-6px] left-[10px] border-[#1e293b] border-solid bg-white' >{cartItems.length}</food-appspan>
                                </food-appdiv>
                                ) : null}

                            </food-appli>




                        </food-appul>

                    </food-appdiv>
                </food-appdiv>
                {/food-app* tablet------------------------------------------------------------------------*/food-app}
                <div className='max-w-[1200px] my-0 mx-auto md:flex justify-between hidden lg:hidden'>
                    <ul className='h-14  hover:cursor-pointer relative items-center justify-between flex'>
                        <li>
                            <Link to='/food-app'> <img src={logo} className="h-9 ml-[40px] " /food-app></food-appLink>
                        </food-appli>
                        <li ><Link to='/food-app'

                            className='mr-6 ml-10 text-white hover:text-yellow-200 tabNav' >HOME</food-appLink></food-appli>
                        <li className='relative nav'>
                            <Link to='/food-appmenu'

                                className='mr-6 text-white hover:text-yellow-200 tabNav' >MENU</food-appLink></food-appli>


                        <li ><Link to='/food-appcart '

                            className='mr-6 text-white hover:text-yellow-200' >CART</food-appLink></food-appli>


                    </food-appul>
                    <ul className='h-14  hover:cursor-pointer relative items-center justify-between flex'>
                        <li className='relative imageUser    '><img
                            src={user && user ? user.photoURL : Avatar}
                            className='w-8  rounded-full  '
                            onClick={login}

                        /food-app>
                            <ul className='absolute bg-[#fff8ef] top-[44px]  w-[140px]  left-[-46px] py-6 rounded-[10px] shadow-xl  font-delius optionUser none  '>
                                <li className='py-2 hover:text-primary  px-2  '><Link to='/food-appcreate-product'>New Product <FontAwesomeIcon icon={faPlus} className='ml-1' /food-app></food-appLink> </food-appli>
                                <li
                                    className='py-2 hover:text-primary px-2  ' onClick={logout}>Logout <FontAwesomeIcon icon={faRightFromBracket} className='ml-1'

                                    /food-app></food-appli>
                            </food-appul>
                        </food-appli>
                        <li className='relative text-xl text-white ml-24 hover:text-yellow-200 mr-[40px]'>
                            <div href='/food-app' className='iconProduct' >

                                <FontAwesomeIcon icon={faBasketShopping} className='relative  '>

                                </food-appFontAwesomeIcon>
                                <div className='w-[400px]  z-20  absolute top-[149%] right-[0] listProduct  hidden bg-white   '>
                                    {cartItems && cartItems.length > 0 ? (<div>
                                        <div className='flex justify-between items-center py-2'>
                                            <img className=' h-[50px] ' src={delivery} /food-app>
                                            <img className=' h-[40px] ' src={loginIcon} /food-app>
                                            <img className=' h-[50px] ' src={phone} /food-app>
                                        </food-appdiv>
                                        <ul className='h-[480px] overflow-y-scroll listProductUl rounded-[10px] '>
                                            {cartItems && cartItems.map((cartitem) => {
                                                return <CartItems
                                                    cartitem={cartitem}
                                                    setFlag={setFlag}
                                                    flag={flag}
                                                    key={cartitem.id}
                                                /food-app>
                                            })}
                                        </food-appul>

                                        <div className=' bg-[#fff8ef]  h-[100px] mt-[3%] rounded-t-[20px] flex items-center justify-around'>
                                            <div className='flex font-delius italic font-bold items-center '>
                                                <h1 className='text-primary  text-[20px]  '>Sub-total:
                                                </food-apph1>
                                                <h1 className=' text-black text-[18px] ml-2'> <FontAwesomeIcon icon={faEuroSign} /food-app>{total}</food-apph1>
                                            </food-appdiv>
                                            <div>
                                                <Link to='/food-appcart' className='text-black text-[18px] font-bold items-center italic bg-primary p-2 rounded-[10px] listProductCheckOut'
                                                >Check out</food-appLink>
                                            </food-appdiv>
                                        </food-appdiv>
                                    </food-appdiv>) : (<div className='w-[100%] h-[100%] flex items-center justify-center'>
                                        <h1 className='text-[20px] font-delius font-bold text-primary'>There's nothing here.</food-apph1>
                                    </food-appdiv>)}

                                </food-appdiv>

                            </food-appdiv>
                            {cartItems && cartItems.length > 0 ? (<div className=''>
                                <span className='absolute text-[14px] leading-4  px-2 text-center font-bold text-primary rounded-full border-[1px] top-[-6px] left-[10px] border-[#1e293b] border-solid bg-white' >{cartItems.length}</food-appspan>
                            </food-appdiv>
                            ) : null}
                        </food-appli>
                    </food-appul>

                </food-appdiv>

                {/food-app* {mobile}------------------------------------------------------------------- */food-app}
                <div className='max-w-[1200px] my-0 mx-auto  justify-between tablet:hidden hidden phone:flex '>

                    <ul className='h-14  hover:cursor-pointer relative items-center justify-between flex'>

                        <li className='relative iconListHome'>

                            <FaBars className='text-white ml-2 '>


                            </food-appFaBars>
                            <ul className='absolute bg-primary top-[35px] listHome rounded-r-[10px] py-2 hidden '>
                                <li className='py-2' ><Link to='/food-app'

                                    className='mr-6 p-2 text-black  hover:text-yellow-200 tabNav ' >HOME</food-appLink></food-appli>
                                <li className='relative nav py-2'>
                                    <Link to='/food-appmenu'

                                        className='mr-6 p-2  text-black  hover:text-yellow-200 tabNav' >MENU</food-appLink></food-appli>


                                <li className='py-2'><Link to='/food-appcart '

                                    className='mr-6 p-2   text-black  hover:text-yellow-200' >CART</food-appLink></food-appli>
                            </food-appul>
                        </food-appli>

                    </food-appul>
                    <ul className='h-14  hover:cursor-pointer relative items-center  flex'>
                        <li className='relative imageUser    '><img
                            src={user && user ? user.photoURL : Avatar}
                            className='w-8  rounded-full  '
                            onClick={login}

                        /food-app>
                            <ul className='absolute bg-[#fff8ef] top-[44px]  w-[140px]  left-[-46px] py-6 rounded-[10px] shadow-xl  font-delius optionUser none  '>
                                <li className='py-2 hover:text-primary  px-2  '><Link to='/food-appcreate-product'>New Product <FontAwesomeIcon icon={faPlus} className='ml-1' /food-app></food-appLink> </food-appli>
                                <li
                                    className='py-2 hover:text-primary px-2  ' onClick={logout}>Logout <FontAwesomeIcon icon={faRightFromBracket} className='ml-1'

                                    /food-app></food-appli>
                            </food-appul>
                        </food-appli>
                    </food-appul>
                    <ul className='h-14  hover:cursor-pointer relative items-center justify-between flex'>

                        <li className='relative text-xl text-white   hover:text-yellow-200 mr-[20px]'>
                            <div href='/food-app' className='iconProduct' >

                                <FontAwesomeIcon icon={faBasketShopping} className='relative  '>

                                </food-appFontAwesomeIcon>
                                <div className='w-[400px]  z-20  absolute top-[149%] right-[-24px] listProduct  hidden bg-white   '>
                                    {cartItems && cartItems.length > 0 ? (<div>
                                        <div className='flex justify-between items-center py-2'>
                                            <img className=' h-[50px] ' src={delivery} /food-app>
                                            <img className=' h-[40px] ' src={loginIcon} /food-app>
                                            <img className=' h-[50px] ' src={phone} /food-app>
                                        </food-appdiv>
                                        <ul className='h-[440px] overflow-y-scroll listProductUl rounded-[10px] '>
                                            {cartItems && cartItems.map((cartitem) => {
                                                return <CartItems
                                                    cartitem={cartitem}
                                                    setFlag={setFlag}
                                                    flag={flag}
                                                    key={cartitem.id}
                                                /food-app>
                                            })}
                                        </food-appul>

                                        <div className=' bg-[#fff8ef]  h-[100px] mt-[3%] rounded-t-[20px] flex items-center justify-around'>
                                            <div className='flex font-delius italic font-bold items-center '>
                                                <h1 className='text-primary  text-[20px]  '>Sub-total:
                                                </food-apph1>
                                                <h1 className=' text-black text-[18px] ml-2'> <FontAwesomeIcon icon={faEuroSign} /food-app>{total}</food-apph1>
                                            </food-appdiv>
                                            <div>
                                                <Link to='/food-appcart' className='text-black text-[18px] font-bold items-center italic bg-primary p-2 rounded-[10px] listProductCheckOut'
                                                >Check out</food-appLink>
                                            </food-appdiv>
                                        </food-appdiv>
                                    </food-appdiv>) : (<div className='w-[100%] h-[100%] flex items-center justify-center'>
                                        <h1 className='text-[20px] font-delius font-bold text-primary'>There's nothing here.</food-apph1>
                                    </food-appdiv>)}

                                </food-appdiv>

                            </food-appdiv>
                            {cartItems && cartItems.length > 0 ? (<div className=''>
                                <span className='absolute text-[14px] leading-4  px-2 text-center font-bold text-primary rounded-full border-[1px] top-[-6px] left-[10px] border-[#1e293b] border-solid bg-white' >{cartItems.length}</food-appspan>
                            </food-appdiv>
                            ) : null}
                        </food-appli>
                    </food-appul>
                </food-appdiv>


            </food-appdiv>


        </food-appnav>

    );
}

export default Nav;
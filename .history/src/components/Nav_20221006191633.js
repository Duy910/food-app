import logo from '../img/logo.png'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping, faUser, faImage, faBasketShopping, faUserCircle, faPlus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Routes, Route, Link, Outlet, BrowserRouter as Router } from 'react-router-dom';
import '../css/nav.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { app } from '../firebase/firebase-config'
import { useContext, useEffect } from 'react'
import Context from '../store/Context';
import { actionType, userInfo } from '../store/reducer';
import Avatar from '../img/avatar.png'



function Nav() {
    const firebaseAuth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const [{ user }, dispatch] = useContext(Context)

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

    const handleNav = (a) => {
        const navActive = document.querySelector('.activeNav')
        navActive.classList.remove('activeNav')
        a.classList.add('activeNav')
        console.log(a);
    }



    return (

        <nav>
            <div className=" h-14 bg-slate-800 fixed w-full z-50 font-delius">

                <div className='max-w-[1200px] my-0 mx-auto flex items-center h-14 justify-between '>
                    <div>
                        <ul className='flex h-14 items-center hover:cursor-pointer relative' >
                            <li>
                                <Link to='/food-app'> <img src={logo} className="h-9 mr-10" /></Link>
                            </li>
                            <li 
                            onClick={(e) => { handleNav(e.target) }}><Link to='/food-app'
                                
                                className='mr-6 text-white hover:text-yellow-200 activeNav' >HOME</Link></li>
                            <li
                            onClick={(e) => { handleNav(e.target) }} 
                            className='relative nav'>
                                <Link to='/menu' 
                                
                                className='mr-6 text-white hover:text-yellow-200 ' >MENU</Link></li>


                            <li onClick={(e) => { handleNav(e.target) }}><Link to='/food-app ' className='mr-6 text-white hover:text-yellow-200' >PAGES</Link></li>
                            <li ><Link to='/food-app ' className='mr-6 text-white hover:text-yellow-200' >SHOP</Link></li>
                            <li ><Link to='/food-app ' className='mr-6 text-white hover:text-yellow-200' >NEWS</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex h-14 items-center hover:cursor-pointer  '>
                            <li className='text-2xl ml-6 text-white hover:text-yellow-200' ><Link to='/food-app'><FontAwesomeIcon icon={faFacebook} /></Link></li>
                            <li className='text-2xl ml-6 text-white hover:text-yellow-200' ><Link to='/food-app'><FontAwesomeIcon icon={faInstagram} /></Link></li>
                            <li className='text-2xl ml-6 mr-20 text-white hover:text-yellow-200 ' ><Link to='/food-app'><FontAwesomeIcon icon={faYoutube} /></Link></li>

                            <li className='active flex '>
                                <ul className='flex'>
                                    <li className='text-white ml-10 hover:text-yellow-200 '><Link to='/signin'>Sign in</Link></li>
                                    <li className='text-white ml-8 hover:text-yellow-200 mr-20 '><Link to='/signup'>Sign up</Link></li>
                                </ul>
                            </li>

                            <li className='relative imageUser  '><img
                                src={user ? user.photoURL : Avatar}
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
                                <Link to='/cart ' className='iconProduct' >

                                    <FontAwesomeIcon icon={faBasketShopping} className='relative  '>

                                    </FontAwesomeIcon>
                                    <div className='w-[400px] min-h-[400px]  absolute top-[42px] right-[-160px] listProduct  hidden bg-white '>
                                        <ul>

                                        </ul>
                                    </div>


                                </Link>
                                <div className=''>
                                    <span className='absolute text-[14px] leading-4 px-2 text-center font-bold text-primary rounded-full border-[1px] top-[-6px] left-[10px] border-[#1e293b] border-solid bg-white' >0</span>
                                </div>


                            </li>




                        </ul>

                    </div>
                </div>
            </div>


        </nav>

    );
}

export default Nav;
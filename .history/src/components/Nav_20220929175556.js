import logo from '../img/logo.png'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping, faUser, faImage, faBasketShopping, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Routes, Route, Link, Outlet, BrowserRouter as Router } from 'react-router-dom';
import '../css/nav.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { app } from '../firebase/firebase-config'
import { useContext } from 'react'
import Context from '../store/Context';
import { actionType } from '../store/reducer';
import Avatar from '../img/avatar.png'

function Nav() {
    const firebaseAuth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const [{ user }, dispatch] = useContext(Context)
    const login = async () => {
        const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
        dispatch({
            type: actionType.SET_USER,
            user: providerData[0]

        })
        localStorage.setItem('data', JSON.stringify(providerData[0]))
        

        if (user !== null) {
            const hide = document.querySelector('.active')
            hide.classList.add('hide')
        } else {
            const hide = document.querySelector('.active')
            hide.classList.remove('hide')
        }

    }
    console.log(user);
 


    return (

        <nav>
            <div className=" h-14 bg-slate-800 fixed w-full z-50 ">

                <div className='max-w-[1200px] my-0 mx-auto flex items-center h-14 justify-between '>
                    <div>
                        <ul className='flex h-14 items-center hover:cursor-pointer relative' >
                            <li>
                                <Link to='/food-app'> <img src={logo} className="h-9 mr-10" /></Link>
                            </li>
                            <li ><Link to='/food-app' className='mr-6 text-white hover:text-yellow-200' >HOME</Link></li>
                            <li className='relative nav'><Link to='/menu' className='mr-6 text-white hover:text-yellow-200 ' >MENU</Link></li>


                            <li ><Link to='/food-app ' className='mr-6 text-white hover:text-yellow-200' >PAGES</Link></li>
                            <li ><Link to='/food-app ' className='mr-6 text-white hover:text-yellow-200' >SHOP</Link></li>
                            <li ><Link to='/food-app ' className='mr-6 text-white hover:text-yellow-200' >NEWS</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex h-14 items-center hover:cursor-pointer hover:text-yellow-200'>
                            <li className='text-2xl ml-6 text-white hover:text-yellow-200' ><Link to='/food-app'><FontAwesomeIcon icon={faFacebook} /></Link></li>
                            <li className='text-2xl ml-6 text-white hover:text-yellow-200' ><Link to='/food-app'><FontAwesomeIcon icon={faInstagram} /></Link></li>
                            <li className='text-2xl ml-6 text-white hover:text-yellow-200' ><Link to='/food-app'><FontAwesomeIcon icon={faYoutube} /></Link></li>

                            <li className='active flex '>
                                <ul className='flex'>
                                    <li className='text-white ml-10 hover:text-yellow-200 '><Link to='/signin'>Sign in</Link></li>
                                    <li className='text-white ml-8 hover:text-yellow-200 '><Link to='/signup'>Sign up</Link></li>
                                </ul>
                            </li>

                            <li><img
                                src={user ? user.photoURL : Avatar}
                                className='w-10 ml-20 rounded-full'
                                onClick={login}
                            />

                            </li>
                            <li className='text-xl text-white ml-24 hover:text-yellow-200'><Link to='/cart'><FontAwesomeIcon icon={faBasketShopping} /></Link></li>

                        </ul>

                    </div>
                </div>
            </div>


        </nav>

    );
}

export default Nav;
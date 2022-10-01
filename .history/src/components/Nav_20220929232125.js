import logo from '../img/logo.png'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping, faUser, faImage, faBasketShopping, faUserCircle, faPlus, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Routes, Route, Link, Outlet, BrowserRouter as Router } from 'react-router-dom';
import '../css/nav.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { app } from '../firebase/firebase-config'
import { useContext } from 'react'
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
        console.log('dang duy');
        localStorage.clear()
        dispatch({
            type: actionType.SET_USER,
            user: null
        })
        
        console.log(userInfo);
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
                            <li ><Link to='/food-app' className='mr-6 text-white hover:text-yellow-200' >HOME</Link></li>
                            <li className='relative nav'><Link to='/menu' className='mr-6 text-white hover:text-yellow-200 ' >MENU</Link></li>


                            <li ><Link to='/food-app ' className='mr-6 text-white hover:text-yellow-200' >PAGES</Link></li>
                            <li ><Link to='/food-app ' className='mr-6 text-white hover:text-yellow-200' >SHOP</Link></li>
                            <li ><Link to='/food-app ' className='mr-6 text-white hover:text-yellow-200' >NEWS</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex h-14 items-center hover:cursor-pointer '>
                            <li className='text-2xl ml-6 text-white hover:text-yellow-200' ><Link to='/food-app'><FontAwesomeIcon icon={faFacebook} /></Link></li>
                            <li className='text-2xl ml-6 text-white hover:text-yellow-200' ><Link to='/food-app'><FontAwesomeIcon icon={faInstagram} /></Link></li>
                            <li className='text-2xl ml-6 mr-20 text-white hover:text-yellow-200 ' ><Link to='/food-app'><FontAwesomeIcon icon={faYoutube}  /></Link></li>

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
                            <ul className='absolute bg-white top-[44px]  w-[140px]  left-[-46px] py-6 rounded-[10px] shadow-xl  font-delius optionUser none '>
                                <li className='pb-2 hover:text-primary ml-2 hover:ease-in-out '>New Product <FontAwesomeIcon icon={faPlus} className='ml-1'/> </li>
                                <li 
                                    className='pb-2 hover:text-primary ml-2 ' onClick={logout}>Logout <FontAwesomeIcon icon={faRightFromBracket} className='ml-1'
                                    
                                 /></li>
                            </ul>
                            </li>
                            <li className='relative text-xl text-white ml-24 hover:text-yellow-200'><Link to='/cart'><FontAwesomeIcon icon={faBasketShopping} /></Link>
                                <div className='w-[400px] h-[100px] bg-white '>

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
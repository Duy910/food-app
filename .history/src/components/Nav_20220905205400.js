import logo from '../img/logo.png'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Routes, Route, Link, Outlet, Router } from 'react-router-dom';
import '../css/nav.css'
import Default from '../Pages/Default';
function Nav() {
    return (
       
            <div>
                <div className=" h-14 bg-slate-800 fixed w-full z-50 ">

                    <div className='max-w-[1200px] my-0 mx-auto flex items-center h-14 justify-between '>
                        <div>
                            <ul className='flex h-14 items-center hover:cursor-pointer relative' >
                                <li>
                                    <a href='/'> <img src={logo} className="h-9 mr-10" /></a>
                                </li>
                                <li ><a to='/' className='mr-6 text-white hover:text-yellow-200' >HOME</a></li>
                                <li className='relative nav'><Link to='/menu' className='mr-6 text-white hover:text-yellow-200 ' >MENU</Link>

                                </li>
                                <li ><a href=' ' className='mr-6 text-white hover:text-yellow-200' >PAGES</a></li>
                                <li ><a href=' ' className='mr-6 text-white hover:text-yellow-200' >SHOP</a></li>
                                <li ><a href=' ' className='mr-6 text-white hover:text-yellow-200' >NEWS</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='flex h-14 items-center hover:cursor-pointer hover:text-yellow-200'>
                                <li className='text-2xl ml-6 text-white hover:text-yellow-200' ><a href=''><FontAwesomeIcon icon={faFacebook} /></a></li>
                                <li className='text-2xl ml-6 text-white hover:text-yellow-200' ><a href=''><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li className='text-2xl ml-6 text-white hover:text-yellow-200' ><a href=''><FontAwesomeIcon icon={faYoutube} /></a></li>

                                <li className='text-white ml-24 hover:text-yellow-200'><a href='/signin'>Sign in</a></li>
                                <li className='text-white ml-10 hover:text-yellow-200'><a href='/signup'>Sign up</a></li>
                                <li className='text-2xl text-white ml-24 hover:text-yellow-200'><Link to='/cart'><FontAwesomeIcon icon={faBagShopping} /></Link></li>

                            </ul>
                        </div>
                    </div>
                </div>


            </div>
          
    );
}

export default Nav;
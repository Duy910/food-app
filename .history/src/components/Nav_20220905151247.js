import logo from '../img/logo.png'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Routes, Route, Link } from 'react-router-dom';
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
                            <li ><Link to='/' className='mr-6 text-white hover:text-yellow-200' >HOME</Link></li>
                            <li className='relative nav'><a href='' className='mr-6 text-white hover:text-yellow-200 ' >MENU</a>
                                <ul className='absolute bg-white py-4 rounded-[4px] text-[18px] font-semibold left-[-16px] navUl hidden shadow-xl '>
                                    <li className=''><a href='/cart' className='pl-4 block pr-20 py-1 hover:text-primary'>Cart</a></li>
                                    <li className=''><a href='/signin' className='pl-4 block py-1 hover:text-primary'>Sign in</a></li>
                                    <li className=''><a href='/signup' className='pl-4 block py-1 hover:text-primary'>Sign up</a></li>

                                </ul>
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
                            <li className='text-2xl text-white ml-24 hover:text-yellow-200'><a href='/cart'><FontAwesomeIcon icon={faBagShopping} /></a></li>

                        </ul>
                    </div>
                </div>
            </div>
            {/* <Routes>
                <Route path="/" element={<Default />}/>
            </Routes> */}
        </div>
    );
}

export default Nav;
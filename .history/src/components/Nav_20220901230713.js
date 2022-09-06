import logo from '../img/logo.png'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Nav() {
    return ( 
        <div className=" h-14 bg-slate-800 fixed w-full z-50 ">

           <div className='max-w-[1200px] my-0 mx-auto flex items-center h-14 justify-between '>
            <div>
                    <ul className='flex h-14 items-center hover:cursor-pointer ' >
                        <li>
                           <a href=''> <img src={logo} className="h-9 mr-10"/></a>
                        </li>
                        <li ><a href='' className='mr-6 text-white hover:text-yellow-200' ></a></li>
                        <li > <a href='' className='mr-6 text-white hover:text-yellow-200' >MENU</a></li>
                        <li ><a href=' ' className='mr-6 text-white hover:text-yellow-200' >PAGES</a></li>
                        <li ><a href=' ' className='mr-6 text-white hover:text-yellow-200' >SHOP</a></li>
                        <li ><a href=' ' className='mr-6 text-white hover:text-yellow-200' >NEWS</a></li>
                    </ul>
                </div>
                <div>
                    <ul className='flex h-14 items-center hover:cursor-pointer hover:text-yellow-200'>
                        <li className='text-2xl ml-6 text-white hover:text-yellow-200' ><a><FontAwesomeIcon icon={faFacebook}/></a></li>
                        <li className='text-2xl ml-6 text-white hover:text-yellow-200' ><a><FontAwesomeIcon icon={faInstagram}/></a></li>
                        <li className='text-2xl ml-6 text-white hover:text-yellow-200' ><a><FontAwesomeIcon icon={faYoutube}/></a></li>
                        
                        <li className='text-white ml-24 hover:text-yellow-200'>LOGIN</li>
                        <li className='text-2xl text-white ml-24 hover:text-yellow-200'><FontAwesomeIcon icon={faBagShopping}/></li>
                        
                    </ul>
                </div>
           </div>
        </div>
     );
}

export default Nav;
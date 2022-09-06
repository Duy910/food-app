import logo from '../img/logo.png'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Nav() {
    return ( 
        <div className=" h-14 bg-slate-800 fixed z-20\ ">

           <div className='max-w-[1200px] my-0 mx-auto flex items-center h-14 justify-between '>
            <div>
                    <ul className='flex h-14 items-center hover:cursor-pointer ' >
                        <li>
                            <img src={logo} className="h-9 mr-10"/>
                        </li>
                        <li className='mr-6 text-white hover:text-yellow-200' >HOME</li>
                        <li className='mr-6 text-white hover:text-yellow-200'>MENU</li>
                        <li className='mr-6 text-white hover:text-yellow-200'>PAGES</li>
                        <li className='mr-6 text-white hover:text-yellow-200'>SHOP</li>
                        <li className='mr-6 text-white hover:text-yellow-200'>NEWS</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex h-14 items-center hover:cursor-pointer hover:text-yellow-200'>
                        <li className='text-2xl  text-white hover:text-yellow-200 '><FontAwesomeIcon icon={faFacebook}/></li>
                        <li className='text-2xl ml-6 text-white hover:text-yellow-200'><FontAwesomeIcon icon={faInstagram}/></li>
                        <li className='text-2xl ml-6 text-white hover:text-yellow-200'><FontAwesomeIcon icon={faYoutube}/></li>
                        <li className='text-2xl ml-6 text-white hover:text-yellow-200'><FontAwesomeIcon icon={faTwitter}/></li>
                        <li className='text-white ml-24 hover:text-yellow-200'>LOGIN</li>
                        <li className='text-2xl text-white ml-24 hover:text-yellow-200'><FontAwesomeIcon icon={faBagShopping}/></li>
                        
                    </ul>
                </div>
           </div>
        </div>
     );
}

export default Nav;
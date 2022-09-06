import logo from '../img/logo.png'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Nav() {
    return ( 
        <div className=" h-14 bg-slate-800 ">

           <div className='max-w-screen-xl flex items-center h-14 justify-between my-0 mx-auto'>
            <div>
                    <ul className='flex h-14 items-center' >
                        <li>
                            <img src={logo} className="h-9 mr-10"/>
                        </li>
                        <li className='mr-6 text-white' >HOME</li>
                        <li className='mr-6 text-white'>MENU</li>
                        <li className='mr-6 text-white'>PAGES</li>
                        <li className='mr-6 text-white'>SHOP</li>
                        <li className='mr-6 text-white'>NEWS</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex h-14 items-center '>
                        <li className='text-3xl text-white'><FontAwesomeIcon icon={faFacebook}/></li>
                        <li className='text-3xl text-white'><FontAwesomeIcon icon={faInstagram}/></li>
                        <li className='text-3xl text-white'><FontAwesomeIcon icon={faYoutube}/></li>
                        <li className='text-3xl text-white'><FontAwesomeIcon icon={faTwitter}/></li>
                        <li className='text-white'>LOGIN</li>
                        <li className='text-3xl text-white ml-24'><FontAwesomeIcon icon={faBagShopping}/></li>
                        
                    </ul>
                </div>
           </div>
        </div>
     );
}

export default Nav;
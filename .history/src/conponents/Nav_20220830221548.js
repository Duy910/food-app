import logo from '../img/logo.png'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Nav() {
    return ( 
        <div className="flex h-14 bg-slate-800 ">

            <div>
                <ul className='flex h-14 items-center' >
                    <li>
                        <img src={logo} className="h-9 ml-10 mr-10"/>
                    </li>
                    <li className='mr-6 text-white' >HOME</li>
                    <li className='mr-6 text-white'>MENU</li>
                    <li className='mr-6 text-white'>PAGES</li>
                    <li className='mr-6 text-white'>SHOP</li>
                    <li className='mr-6 text-white'>NEWS</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='text-3xl'><FontAwesomeIcon icon={faFacebook}/></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
     );
}

export default Nav;
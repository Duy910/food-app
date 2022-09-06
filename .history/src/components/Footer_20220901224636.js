import logoFooter from '../img/footer_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return ( 
        <div>
            <div className="max-w-[1200px] my-20 mx-auto grid grid-cols-4">
                <div className="col-span-1">
                    <div>
                        <h1>Customer</h1>

                    </div>
                    <div>
                        <h1>Wishlist</h1>
                        <h1>Privacy Policy</h1>
                        <h1>Order Tracking</h1>
                        <h1>Delivery Option</h1>
                        
                    </div>
                </div>
                <div className="col-span-2">
                    <div>
                        <img src={logoFooter} className=''/>
                    </div>
                    <div>
                        <h1>9/1 đường số 4 - phường An Khánh - Quận 2 - Tp. Thủ Đức.</h1>
                        <h1>Hotline: 123-456789.</h1>
                        <h1>Email: dangduyz933@gmail.com.</h1>
                        <div>
                            <a  className='p-6 '><FontAwesomeIcon className='text-primary text-[40px]' icon={faFacebook}/></a>
                            <a className='p-6 '><FontAwesomeIcon className='text-primary text-[40px]' icon={faInstagram}/></a>
                            <a className='p-6 '><FontAwesomeIcon className='text-primary text-[40px]' icon={faTwitter}/></a>
                            <a className='p-6 '><FontAwesomeIcon className='text-primary text-[40px]' icon={faFacebook}/></a>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">

                </div>
            </div>
        </div>
     );
}

export default Footer;

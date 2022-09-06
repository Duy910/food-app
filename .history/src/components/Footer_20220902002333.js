import logoFooter from '../img/footer_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return ( 
        <div>
            <div className="max-w-[1200px] my-20 mx-auto grid grid-cols-4 text-center">
                <div className="col-span-1 border-r-2">
                    <div className=''>
                        <h1 className='font-bold text-[25px]'>Customer</h1>

                    </div>
                    <div className='mt-6'>
                        <h1>Wishlist</h1>
                        <h1>Privacy Policy</h1>
                        <h1>Order Tracking</h1>
                        <h1>Delivery Option</h1>
                        
                    </div>
                </div>
                <div className="col-span-2 ">
                    <div className='border-l-2'>
                        <img src={logoFooter} className='mx-auto'/>
                    </div>
                    <div className='my-6'>
                        <h1>9/1 đường số 4 - phường An Khánh - Quận 2 - Tp. Thủ Đức.</h1>
                        <h1>Hotline: 123-456789.</h1>
                        <h1>Email: dangduyz933@gmail.com.</h1>
                        
                    </div>
                    <div>
                            <a href='' className='p-2 '><FontAwesomeIcon className='text-primary text-[30px]' icon={faFacebook}/></a>
                            <a href='' className='p-2 '><FontAwesomeIcon className='text-primary text-[30px]' icon={faInstagram}/></a>
                            <a href='' className='p-2 '><FontAwesomeIcon className='text-primary text-[30px]' icon={faTwitter}/></a>
                            <a href='' className='p-2 '><FontAwesomeIcon className='text-primary text-[30px]' icon={faYoutube}/></a>
                    </div>
                </div>
                <div className="col-span-1">
                    <div>
                        <h1 className='font-bold text-[25px]'>Opening Hour</h1>
                    </div>
                    <div className='my-6'>
                        <h1>Mon - Friday: 09:00 - 23:00h</h1>
                        <h1>Saturday: 09:00 - 16:00h</h1>
                        <h1>Sunday: 12:00 - -18:00</h1>
                    </div>
                </div>
            </div>
            <div className='h-[60px] text-center bg-[#f2f2f2] leading-[60px] text-[#999]'>
                <h1>Copyright 2021 Pizzle. All Rights Reserved.</h1>
            </div>
        </div>
     );
}

export default Footer;

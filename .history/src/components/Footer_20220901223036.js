import logo from '../img/logo.png'
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
                        <img src={logo}/>
                    </div>
                </div>
                <div className="col-span-1">

                </div>
            </div>
        </div>
     );
}

export default Footer;

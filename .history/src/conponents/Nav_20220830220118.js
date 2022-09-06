import logo from '../img/logo.png'
function Nav() {
    return ( 
        <div className="h-14 bg-slate-800">

            <div>
                <ul className='flex justify-center items-center' >
                    <li>
                        <img src={logo} className="h-9"/>
                    </li>
                    <li>HOME</li>
                    <li>MENU</li>
                    <li>PAGES</li>
                    <li>SHOP</li>
                    <li>NEWS</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li></li>
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
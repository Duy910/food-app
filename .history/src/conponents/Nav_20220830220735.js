import logo from '../img/logo.png'
function Nav() {
    return ( 
        <div className="h-14 bg-slate-800 ">

            <div>
                <ul className='flex h-14 items-center' >
                    <li>
                        <img src={logo} className="h-9 ml-10 mr-10"/>
                    </li>
                    <li className='mr-6 text-white' >HOME</li>
                    <li className='mr-6'>MENU</li>
                    <li className='mr-6'>PAGES</li>
                    <li className='mr-6'>SHOP</li>
                    <li className='mr-6'>NEWS</li>
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
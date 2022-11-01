import { useState } from 'react';
import { IoPizzaSharp } from 'react-icons/io5'
import ScrollToTop from './ScrollToTop';
function ToTopButton() {
    const [active, setActive] = useState(false)
    const handleScroll = () => {
        if(window.scrollY > 200) {
            setActive(true)
        }else{
            setActive(false)
        }
    }
    window.addEventListener('scroll', handleScroll)
    const handleClick = () => {
        ScrollToTop()
    }

    return (

        <div>
            {active && (<IoPizzaSharp onClick={handleClick} className="fixed right-20 bottom-20 rounded-[50%] text-[40px] rotate-180 text-primary z-100 cursor-pointer ease-in-out" />)}
        </div>
    );
}

export default ToTopButton;
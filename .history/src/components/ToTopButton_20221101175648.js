import { useState } from 'react';
import { IoPizzaSharp } from 'react-icons/io5'

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
    
    const handleClickToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (

        <div>
            {active && (<IoPizzaSharp onClick={handleClickToTop}  className="fixed right-10 bottom-20 rounded-[50%] text-[40px] rotate-180 text-primary z-100 cursor-pointer ease-in-out " />)}
        </div>
    );
}

export default ToTopButton;
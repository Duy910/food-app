import { useState } from 'react';
import { IoPizzaSharp } from 'react-icons/io5'
function ToTopButton() {
    const [active, setActive] = useState(true)

    return (

        <div>
            {active && (<IoPizzaSharp className="fixed right-20 bottom-20 rounded-[50%] text-[40px] rotate-180 text-primary z-100 cursor-pointer" />)}
        </div>
    );
}

export default ToTopButton;
import IconHamburguer from '../assets/icons/icon-menu.svg?react'
import IconCloseHamburguer from '../assets/icons/icon-close-menu.svg?react'
import navigation from '../data/navigation.js'
import { useState } from 'react';

function HamburguerMenu(){

    const [open, setOpen] = useState(false);

    return(
    <>
    <div className="flex justify-center items-center p-1.25 rounded-full bg-background order-3 lg:hidden" onClick={() => setOpen(!open)} >
        {open ? (
            <IconCloseHamburguer />
        ) : (
            <IconHamburguer />
        )}
    </div>
    <div className={`w-full fixed top-0 left-0 mt-20 px-8 z-50 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="w-full flex items-center justify-center p-5 rounded-xl bg-surface">
            <ul className="flex flex-col items-center justify-center h-full gap-5">
                {navigation.slice(1).map((item) => (
                    <li key={item.id} className="flex">
                        <a href={item.href} className="flex items-center text-white text-base/6 font-regular">
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        
    </div>
    
    </>);
    
}

export default HamburguerMenu;




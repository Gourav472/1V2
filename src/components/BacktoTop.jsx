import React, { useEffect, useState } from 'react'
import up_Arrow from '../assets/images/webp/up-arrow.webp'
const BacktoTop = () => {
    const scrolltotop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const [visible, setvisible] = useState(false);
    const togglevisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 400) {
            setvisible(true);
        }
        else if (scrolled <= 400) {
            setvisible(false);
        };
    };
    useEffect(() => {
        window.addEventListener('scroll', togglevisible);
        return () => {
            window.removeEventListener('scroll', togglevisible)
        }
    }, [])

    return (
        <div className=" container relative">
            <div onClick={scrolltotop} className=" fixed z-40 mx-auto  flex items-center justify-center animate-bounce cursor-pointer bottom-[10%] md:bottom-1 right-2 duration-300 ease-linear  " style={{ display: visible ? 'grid' : 'none' }}>
                <img className=' max-w-[50px]' src={up_Arrow} alt="Scroll" />
            </div>
        </div>
    )
}

export default BacktoTop
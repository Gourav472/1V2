import React, { useEffect, useState } from 'react'
import up_Arrow from '../assets/images/webp/up-arrow.webp'
const BackToTop = () => {
    const SCROLL_TOP = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const [visible, setVisible] = useState(false);
    const TOGGLE_VISIBLE = () => {
        const SCROLLED = document.documentElement.scrollTop;
        if (SCROLLED > 400) {
            setVisible(true);
        }
        else if (SCROLLED <= 400) {
            setVisible(false);
        };
    };
    useEffect(() => {
        window.addEventListener('scroll', TOGGLE_VISIBLE);
        return () => {
            window.removeEventListener('scroll', TOGGLE_VISIBLE)
        }
    }, [])
    return (
        <div className=" container relative">
            <div onClick={SCROLL_TOP} className="fixed z-30 mx-auto flex items-center justify-center animate-bounce cursor-pointer bottom-[10%] md:bottom-1 right-2 duration-300 ease-linear" style={{ display: visible ? 'grid' : 'none' }}>
                <img className='max-w-[50px]' src={up_Arrow} alt="Scroll" />
            </div>
        </div>
    )
}
export default BackToTop
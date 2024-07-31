import React, { useEffect, useState } from 'react';
import loader_Img from "../assets/images/png/vs_Logo.png";

const PreLoader = () => {
    const [visible, setvisible] = useState(true);
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        const timer = setTimeout(() => {
            setvisible(false);
            document.body.classList.remove('overflow-hidden');
        }, 2000);
        return () => {
            clearTimeout(timer);
            document.body.classList.remove('overflow-hidden');
        }
    }, []);

    if (!visible) return null;
    return (
        <section className=' min-h-screen w-full bg-black z-30 fixed top-0 left-0 grid place-items-center'>
            <div className=' animate-pulse flex flex-col items-center'>
                <h1 className='text-[52px] sm:text-[70px] md:text-[80px] font-bold font-orbitron !bg-clip-text !text-transparent !bg-text_gradient text-white'>1v2 <span className='!bg-clip-text !text-transparent !bg-text_gradient'>Studio</span></h1>
                <div aria-label="Loading..." role="status" class="flex items-center space-x-2">
                    <svg class="h-16 w-16 animate-spin stroke-sky_blue" viewBox="0 0 256 256">
                        <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="24"></line>
                        <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                        </line>
                        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="24"></line>
                        <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                        </line>
                        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="24"></line>
                        <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                        </line>
                    </svg>
                    <span class=" text-3xl sm:text-4xl font-bold font-orbitron text-transparent bg-clip-text bg-text_gradient">Loading...</span>
                </div>
            </div>
        </section>
    )
}

export default PreLoader;
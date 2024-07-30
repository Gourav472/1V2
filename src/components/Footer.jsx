import React from 'react'
import logo from '../assets/images/svg/navicon.svg'
import { Discord, Twitter } from '../common/Icon'
import gradient_Line from '../assets/images/webp/gradient_Line.webp'

const Footer = () => {
    return (
        <div id='Contact' className=' relative -my-[2px] bg-footer_bg bg-no-repeat bg-cover 2xl:bg-100%'>
            <div className=' container max-w-[1164px] relative z-20'>
                <div className=' flex flex-col items-center'>
                    <a href="/"><img src={logo} alt="footer-logo" /></a>
                    <p className=' max-w-[538px] font-poppins font-normal text-base md:text-[18px] leading-[22px] md:leading-[28px] text-center text-white opacity-70 pt-5'>Nulla sollicitudin nullam in scelerisque. Dolor neque pulvinar porttitor id eget volutpat faucibus sed. Tellus libero.</p>
                    <div className=' flex items-center gap-5 pt-4'>
                        <a href="https://x.com/?lang=en" target='_blank' className='w-[43px] h-[43px] rounded-full hover:translate-y-2 custom_duration bg-red border-[2.46px] border-sky_blue flex items-center justify-center'>
                            <Twitter />
                        </a>
                        <a href="https://discord.com/" target='_blank' className='w-[43px] h-[43px] rounded-full bg-red border-[2.46px] hover:translate-y-2 custom_duration border-sky_blue flex items-center justify-center'>
                            <Discord />
                        </a>
                    </div>
                </div>

            </div>
            <div className='h-[2px] w-full bg-blur_gray mt-8 md:mt-[43px]'></div>
            <p className=' font-poppins font-medium text-base leading-[24px] text-center px-3 opacity-50 text-white pt-[22px] pb-[22.95px] cursor-pointer'>Copyright@2024 All right reserved</p>
            <div className=' pointer-events-none z-10 left-[-1%] bottom-[50%] absolute bg-ellipse_bg w-[110px] h-[110px] blur-[80px]'></div>
            <img className=' w-[27px] h-[292px] absolute z-10 pointer-events-none max-md:hidden right-[40px] lg:right-[68px] bottom-[20%] xl:bottom-[30%] ' src={gradient_Line} alt="gradient-line" />

        </div>
    )
}

export default Footer
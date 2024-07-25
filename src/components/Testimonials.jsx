import React from 'react'
import { Heading_Vector3 } from '../common/Icon'
import top_Red from '../assets/images/svg/top_RedLine.svg'
import bottom_Red from '../assets/images/svg/bottom_RedLine.svg'

const Testimonials = () => {
    return (
        <div className=' bg-testimonial_bg bg-cover 2xl:bg-100% pb-[170px] -mt-[2px]'>
            <div className=' flex justify-center'>
                <div className=' relative inline-block'>
                    <h2 className=' font-orbitron font-bold text-[26px] sm:text-[30px] md:text-[38px] lg:text-[42px] leading-[40px] lg:leading-[54px] text-white text-center z-30'>Clients Testimonials</h2>
                    <div className=' max-sm:hidden pointer-events-none absolute -bottom-1 sm:bottom-[-16px] sm:right-[-167%] md:right-[-117%] lg:right-[-102%] z-20'>
                        < Heading_Vector3 />
                    </div>
                </div>
            </div>
            <div className=' container max-w-[1164px]'>
                <div className=' max-w-[1041px] w-full p-[42px_60px_41px_59px] backdrop-blur-md bg-testimonial_card bg-100% bg-no-repeat mt-[113px]'>
                    <div className='flex gap-10'>
                        <div className=' flex flex-col pt-2'>
                            <div className=' relative'>
                                <p className=' font-orbitron font-bold text-[42px] leading-[54px] text-white'>Debbie Hagenes</p>
                                <img className=' absolute top-[-6px] left-[-18px]' src={top_Red} alt="redline" />
                                <img className=' absolute bottom-[-6px] right-[-10px]' src={bottom_Red} alt="redline" />
                            </div>
                            <p className=' opacity-70 max-w-[621px] font-poppins font-normal text-[24px] leading-[36px] text-white pt-[16px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
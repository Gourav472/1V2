import React from 'react'
import Common_Btn from '../common/Common_Btn'

const Newsletter = () => {
    return (
        <div className=' pb-[46px] bg-black my-[-2px]'>
            <div className=' container max-w-[1164px] relative '>
                <div className=' max-w-[480px] sm:max-w-[576px] md:max-w-[768px] lg:max-w-[900px] mx-auto w-full relative z-20 p-[45px] flex items-center flex-col bg-newsletter_bg bg-100% bg-no-repeat'>
                    <h2 className=' font-orbitron font-bold sm:text-[32px] md:text-[34px] md:leading-[45px] lg:text-[42px] lg:leading-[63px] text-white text-center'>Subscribe to our newsletter</h2>
                    <p className=' max-w-[554px] opacity-70 font-poppins font-normal text-[18px] leading-[28px] text-center text-white pt-3'>Nulla sollicitudin nullam in scelerisque. Dolor neque pulvinar porttitor id eget volutpat faucibus sed. Tellus libero.</p>
                    <div className='max-w-[489px] w-full border-[1px] border-gray_border flex justify-between items-center p-[6px_6px_6px_15px] mt-9'>
                        <input type="email" name="email" placeholder='Enter your email' className=' outline-none border-none bg-transparent opacity-70 text-white font-poppins font-normal text-[18px] leading-[28px] w-full h-full' />
                        <div className=' ps-1'>
                            <Common_Btn buttonName="Submit Now" />
                        </div>
                    </div>
                </div>
                <div className=' w-[100px] h-[100px] bg-red absolute top-0 left-[10%] blur-[100px] z-10 pointer-events-none'></div>
                <div className=' w-[100px] h-[100px] bg-red absolute top-[0%] right-[10%] blur-[100px] z-10 pointer-events-none'></div>

            </div>
        </div>
    )
}

export default Newsletter
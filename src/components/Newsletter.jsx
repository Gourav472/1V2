import React from 'react'
import CommonBtn from '../common/CommonBtn'
import white_Man from '../assets/images/webp/body.webp'
import gradient_Line from '../assets/images/webp/gradient_Line.webp'
import top_Red from '../assets/images/svg/top_RedLine.svg'
import bottom_Red from '../assets/images/svg/bottom_RedLine.svg'
const Newsletter = () => {
    return (
        <div className='pb-[46px] bg-black my-[-2px] relative'>
            <div className='container max-w-[1164px] relative z-20'>
                <div className='relative'>
                    <div className='max-w-[480px] backdrop-blur-md sm:max-w-[576px] md:max-w-[768px] lg:max-w-[900px] mx-auto w-full relative z-20 p-5 sm:p-[25px] md:p-[45px] flex items-center flex-col bg-newsletter_bg bg-100% bg-no-repeat'>
                        <div className='relative inline-block max-lg:flex max-lg:justify-center'>
                            <h2 className='font-orbitron font-bold text-[26px] sm:text-[32px] leading-[35px] md:text-[34px] md:leading-[45px] lg:text-[42px] lg:leading-[63px] text-white text-center'>Subscribe to our newsletter</h2>
                            <img className='pointer-events-none max-sm:max-w-[232px] max_es_top sm:w-[285px] md:w-[300px] lg:w-[280px] xl:w-[373px] absolute top-0 right-[-10px] lg:top-[6px] lg:right-[-13px]' src={top_Red} alt="redline" />
                            <img className='pointer-events-none max-sm:max-w-[232px] max_es_bottom sm:w-[285px] md:w-[300px] lg:w-[280px] xl:w-[373px] absolute bottom-[0px] right-[-10px]' src={bottom_Red} alt="redline" />
                        </div>
                        <p className='md:max-w-[554px] opacity-70 font-poppins font-normal text-base md:text-[18px] leading-[22px] md:leading-[28px] text-center text-white pt-2 md:pt-3'>Nulla sollicitudin nullam in scelerisque. Dolor neque pulvinar porttitor id eget volutpat faucibus sed. Tellus libero.</p>
                        <div className='max-w-[489px] w-full border-[1px] border-gray_border flex justify-between items-center p-[6px] sm:p-[6px_6px_6px_15px] mt-5 sm:mt-7 md:mt-9'>
                            <input type="email" name="email" placeholder='Enter your email' className=' max-sm:text-center outline-none border-none bg-transparent opacity-70 text-white font-poppins font-normal text-[18px] leading-[28px] w-full h-full' />
                            <div className='ps-1 max-sm:hidden'>
                                <CommonBtn buttonName="Submit Now" />
                            </div>  
                        </div>
                        <div className='ps-1 sm:hidden pt-4'>
                            <CommonBtn buttonName="Submit Now" />
                        </div>
                    </div>
                    <img className='pointer-events-none max-w-[562px] z-10 w-full absolute bottom-0 left-0 sm:left-[10%] md:left-[20%] xl:left-[25%]' src={white_Man} alt="white-man" />
                </div>
                <div className='w-[100px] h-[100px] bg-red absolute top-0 left-[10%] blur-[100px] z-10 pointer-events-none'></div>
                <div className='w-[100px] h-[100px] bg-red absolute top-[0%] right-[10%] blur-[100px] z-10 pointer-events-none'></div>
            </div>
            <div className='absolute left-[-5%] pointer-events-none z-10 top-[-35%] bg-red w-[100px] h-[200px] blur-[110px]'></div>
            <div className='absolute right-[-3%] pointer-events-none z-10 bottom-[-35%] bg-red w-[100px] h-[200px] blur-[110px]'></div>
            <img className='w-[27px] h-[292px] absolute z-10 pointer-events-none max-xl:hidden left-[60px] top-[-50%] ' src={gradient_Line} alt="gradient-line" />
        </div>
    )
}
export default Newsletter
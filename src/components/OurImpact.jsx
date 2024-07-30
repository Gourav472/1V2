import React from 'react'
import { Heading_Vector2 } from '../common/Icon'
import impact_Horse from '../assets/images/webp/impact_Horse.webp'
import gradient_Line from '../assets/images/webp/gradient_Line.webp'

const OurImpact = () => {
    return (
        <div id='Portfolio' className=' relative bg-impact_bg bg-cover 2xl:bg-100% bg-no-repeat pb-[48px] sm:pb-[68px] md:pb-[90px] lg:pb-[121px] -mt-[2px]'>
            <div className=' flex justify-center'>
                <div className=' relative inline-block'>
                    <h2 className=' font-orbitron font-bold text-[26px] sm:text-[30px] md:text-[38px] lg:text-[42px] leading-[40px] lg:leading-[54px] text-white text-center z-30'>Our Impact</h2>
                    <div className=' max-sm:hidden pointer-events-none absolute -bottom-1 sm:bottom-[-16px] right-[-420%] sm:right-[-360%] md:right-[-272%] lg:right-[-242%] z-20'>
                        < Heading_Vector2 />
                    </div>
                </div>
            </div>
            <div className=' container max-w-[1164px] relative z-20'>
                <div className=' flex flex-wrap flex-row mx-3 pt-[15px] sm:pt-[60px] md:pt-[80px] lg:pt-[102px]'>
                    <div className=' w-full 2xl:p-0 lg:w-3/12 px-3 flex justify-center lg:justify-start lg:items-center'>
                        <h2 className=' font-orbitron font-bold lg:text-[56px] text-[31px] leading-[40px] sm:text-[42px] sm:leading-[50px] md:text-[45px] md:leading-[55px] xl:text-[64px] lg:leading-[75px] xl:leading-[83px] text-white'>What 1v2 Studio</h2>
                    </div>
                    <div className=' w-full 2xl:p-0 md:w-8/12 lg:w-6/12 px-3 flex justify-center lg:justify-center max-md:mt-[25px] max-lg:mt-[48px]'>
                        <img className=' pointer-events-none max-w-[360px] sm:max-w-[410px] md:max-w-[445px] xl:w-[445px] xl:h-[433px] w-full' src={impact_Horse} alt="horse" />
                    </div>
                    <div className=' w-full 2xl:p-0 max-md:justify-center md:w-4/12 lg:w-3/12 px-3 flex max-sm:mt-[20px] max-md:mt-[30px] items-center'>
                        <div className=' flex flex-col gap-0 lg:gap-[14px]'>
                            <p className=' font-poppins font-semibold text-[16px] sm:text-[22px] md:text-[24px] xl:text-[26px] leading-[30px] xl:leading-[41px] text-white'><span className='bg-text_gradient bg-clip-text text-transparent text-[22px] sm:text-[26px] md:text-[30px] lg::text-[32px] xl:text-[36px] leading-[40px] lg:leading-[45px] xl:leading-[57px]'>13</span> experiences</p>
                            <p className=' font-poppins font-semibold text-[16px] sm:text-[22px] md:text-[24px] xl:text-[26px] leading-[30px] xl:leading-[41px] text-white'><span className='bg-text_gradient bg-clip-text text-transparent text-[22px] sm:text-[26px] md:text-[30px] lg::text-[32px] xl:text-[36px] leading-[40px] lg:leading-[45px] xl:leading-[57px]'>10.8K </span> active now</p>
                            <p className=' font-poppins font-semibold text-[16px] sm:text-[22px] md:text-[24px] xl:text-[26px] leading-[30px] xl:leading-[41px] text-white'><span className='bg-text_gradient bg-clip-text text-transparent text-[22px] sm:text-[26px] md:text-[30px] lg::text-[32px] xl:text-[36px] leading-[40px] lg:leading-[45px] xl:leading-[57px]'>1.086</span> billion visits</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' pointer-events-none z-10 left-[-1%] top-[-5%] absolute bg-ellipse_bg w-[110px] h-[110px] blur-[80px]'></div>
            <div className=' pointer-events-none z-10 right-[-1%] bottom-[-5%] absolute bg-ellipse_bg w-[110px] h-[110px] blur-[80px]'></div>
            <img className=' w-[27px] h-[292px] absolute z-10 pointer-events-none bottom-[13px] left-2 max-md:hidden lg:hidden 2xl:block xl:left-[20px] 2xl:left-[59px]' src={gradient_Line} alt="gradient-line" />

        </div>
    )
}

export default OurImpact
import React from 'react'
import {HeadingVector} from '../common/Icon'
import CommonBtn from '../common/CommonBtn'
import aboutImage from '../assets/images/webp/about.webp'
import aboutBg from '../assets/images/webp/about_bg.webp'
import gradientLine from '../assets/images/webp/gradient_Line.webp'
import topRed from '../assets/images/svg/top_RedLine.svg'
import bottomRed from '../assets/images/svg/bottom_RedLine.svg'
const About = () => {
    return (
        <div className='bg-black pt-[48px] sm:pt-[65px] md:pt-[85px] lg:pt-[125px] pb-[48px] sm:pb-[68px] md:pb-[80px] lg:pb-[99px] relative'>
            <div id='About' className='flex justify-center'>
                <div className='relative inline-block'>
                    <h2 className='font-orbitron font-bold text-[26px] sm:text-[30px] md:text-[38px] lg:text-[42px] leading-[40px] lg:leading-[54px] text-white text-center z-30'>About 1v2 Studio</h2>
                    <div className='max-sm:hidden pointer-events-none absolute -bottom-1 sm:bottom-[-16px] right-[-245%] sm:right-[-205%] md:right-[-151%] lg:right-[-132%] z-20'>
                        < HeadingVector/>
                    </div>
                </div>
            </div>
            <div className='container max-w-[1164px] relative z-20'>
                <div className='flex flex-wrap flex-row mx-[-12px] pt-[30px] sm:pt-[55px] md:pt-[70px] lg:pt-[97px]'>
                    <div className='w-full flex justify-center lg:justify-start lg:items-center lg:w-6/12 max-xl:px-[12px] relative'>
                        <img rel='preload' className='pointer-events-none max-w-[517px] w-full' src={aboutImage} alt="about-image" />
                        <div className='pointer-events-none bg-red max-w-[239px] w-full min-h-[239px] blur-[80px] -z-10 left-[30%] lg:left-[10%] top-[10%] absolute'>
                        </div>
                    </div>
                    <div className='w-full lg:w-6/12 max-xl:px-[12px] flex justify-center lg:justify-end mt-[30px] md:mt-12'>
                        <div className='flex flex-col'>
                            <div className='relative inline-block max-lg:flex max-lg:justify-center'>
                                <h3 className='capitalize font-orbitron font-bold md:text-[32px] text-[24px] leading-[37px] md:leading-[48px] lg:text-[38px] lg:leading-[57px] text-white text-center lg:text-start'>Pushing Boundaries in <span className=' block lg:ps-6'>Gaming Innovation</span></h3>
                                <img className='max-sm:max-w-[270px] max-md:max-w-[280px] max-lg:w-[350px] absolute top-[50%] lg:left-0' src={topRed} alt="redline" />
                                <img className='max-sm:max-w-[270px] max-md:max-w-[280px] max-lg:w-[350px] absolute bottom-[-6px] lg:left-1' src={bottomRed} alt="redline" />
                            </div>
                            <p className='opacity-70 max-w-[700px] lg:max-w-[535px] font-poppins font-normal text-base lg:text-[18px] leading-[22px] lg:leading-7 text-white pt-[12px] md:pt-[18px] text-center lg:text-start'>We are an indie game development studio dedicated to crafting innovative experiences on the Roblox platform. Our passion for creativity and excellence drives us to push the boundaries of what’s possible in gaming.</p>
                            <div className='flex justify-center lg:justify-start mt-7 sm:mt-8 md:mt-[42px]'>
                                <CommonBtn buttonName="Read More" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className='pointer-events-none max-w-[741px] w-full absolute right-0 top-[189px] z-10' src={aboutBg} alt="about-bg" />
            <div className='pointer-events-none z-10 right-[-1%] top-[-5%] absolute bg-ellipse_bg w-[110px] h-[110px] blur-[80px]'></div>
            <div className='pointer-events-none z-10 bottom-0 left-[-1%] absolute bg-ellipse_bg w-[110px] h-[110px] blur-[80px]'></div>
            <img className='w-[27px] h-[292px] absolute z-10 max-md:hidden right-[40px] lg:hidden 2xl:block 2xl:right-[47px] bottom-[25%] lg:bottom-[14%] pointer-events-none' src={gradientLine} alt="gradient-line" />
        </div>
    )
}
export default About
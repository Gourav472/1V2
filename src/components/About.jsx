import React from 'react'
import { Heading_Vector } from '../common/Icon'
import Common_Btn from '../common/Common_Btn'
import about_Image from '../assets/images/webp/About.webp'
import about_bg from '../assets/images/webp/about_bg.webp'
const About = () => {
    return (
        <div className=' bg-black pt-[48px] sm:pt-[65px] md:pt-[85px] lg:pt-[125px] pb-[48px] sm:pb-[68px] md:pb-[80px] lg:pb-[99px] relative'>
            <div className=' flex justify-center'>
                <div className=' relative inline-block'>
                    <h2 className=' font-orbitron font-bold text-[26px] sm:text-[30px] md:text-[38px] lg:text-[42px] leading-[40px] lg:leading-[54px] text-white text-center z-30'>About 1v2 Studio</h2>
                    <div className=' max-sm:hidden pointer-events-none absolute -bottom-1 sm:bottom-[-16px] right-[-245%] sm:right-[-205%] md:right-[-151%] lg:right-[-132%] z-20'>
                        < Heading_Vector />
                    </div>
                </div>
            </div>
            <div className=' container max-w-[1164px] relative z-20'>
                <div className=' flex flex-wrap flex-row mx-[-12px] pt-[30px] sm:pt-[55px] md:pt-[70px] lg:pt-[97px]'>
                    <div className=' w-full flex justify-center lg:justify-start lg:w-6/12 max-xl:px-[12px] relative'>
                        <img className=' pointer-events-none max-w-[517px] w-full' src={about_Image} alt="about-image" />
                        <div className=' pointer-events-none bg-red max-w-[239px] w-full min-h-[239px] blur-[80px] -z-10 left-[30%] lg:left-[10%] top-[10%] absolute'>
                        </div>
                    </div>
                    <div className=' w-full lg:w-6/12 max-xl:px-[12px] flex justify-center lg:justify-end lg:items-center mt-[30px] md:mt-12'>
                        <div className=' flex flex-col'>
                            <h3 className=' capitalize font-orbitron font-bold md:text-[32px] text-[24px] leading-[37px] md:leading-[48px] lg:text-[38px] lg:leading-[57px] text-white text-center lg:text-start'>Pushing Boundaries in <span className=' block lg:ps-6'>Gaming Innovation</span></h3>
                            <p className=' opacity-70 max-w-[700px] lg:max-w-[535px] font-poppins font-normal text-base lg:text-[18px] leading-[22px] lg:leading-7 text-white pt-[12px] md:pt-[18px] text-center lg:text-start'>We are an indie game development studio dedicated to crafting innovative experiences on the Roblox platform. Our passion for creativity and excellence drives us to push the boundaries of what’s possible in gaming.</p>
                            <div className=' flex justify-center lg:justify-start mt-7 sm:mt-8 md:mt-[42px]'>
                                <Common_Btn buttonName="Read More" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <img className=' pointer-events-none max-w-[741px] w-full absolute right-0 top-[189px] z-10' src={about_bg} alt="about-bg" />
        </div>
    )
}

export default About
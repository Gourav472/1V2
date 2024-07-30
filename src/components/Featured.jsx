import React from 'react'
import { Heading_Vector } from '../common/Icon'
import featured_Image1 from '../assets/images/webp/featured_Slide1.webp'
import featured_Image2 from '../assets/images/webp/featured_Slide2.webp'
import featured_Image3 from '../assets/images/webp/featured_Slide3.webp'
import featured_Image4 from '../assets/images/webp/featured_Slide4.webp'
import featured_Image5 from '../assets/images/webp/featured_Slide5.webp'
import featured_Image6 from '../assets/images/webp/featured_Slide6.webp'
import Slider from "react-slick";
const Featured = () => {
    var settings2 = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false,
                }
            }
        ],
        appendDots: (dots) => (
            <div
                style={{
                    position: "absolute",
                    bottom: "-48px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <ul style={{ margin: "0" }} className="custom-dots2">
                    {dots}
                </ul>
            </div>
        ),
    };
    return (
        <div id='Services' className='w-full bg-featured_bg bg-no-repeat bg-cover 2xl:bg-100% flex flex-col pb-[80px] sm:pb-[128px] md:pb-[168px] lg:pb-[175px] -mt-[2px]'>
            <div className=' flex justify-center'>
                <div className=' relative inline-block'>
                    <h2 className=' font-orbitron font-bold text-[26px] sm:text-[30px] md:text-[38px] lg:text-[42px] leading-[40px] lg:leading-[54px] text-white text-center z-30'>Featured Projects</h2>
                    <div className=' max-sm:hidden pointer-events-none absolute -bottom-1 sm:bottom-[-16px] right-[-225%] sm:right-[-188%] md:right-[-138%] lg:right-[-120%] z-20'>
                        < Heading_Vector />
                    </div>
                </div>
            </div>
            <div className=' max-w-[1440px] w-full mx-auto featured_Slider pt-[30px] sm:pt-[55px] md:pt-[70px] lg:pt-[89px] relative z-20'>
                <Slider {...settings2}>
                    <div className=' bg-featured_sliderbg backdrop-blur-lg max-w-[364px] w-full p-5 flex flex-col max-sm:min-h-[400px] sm:min-h-[421px] md:min-h-[461px] bg-100%  bg-no-repeat'>
                        <img className='max-w-[324px] w-full' src={featured_Image1} alt="image1" />
                        <div className=' flex items-center  gap-[10px] pt-3'>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[12px] sm:text-[14px] leading-[18px]'>300+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[12px] sm:text-[14px] leading-[18px]'>Active Players</p>
                            </div>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[12px] sm:text-[14px] leading-[18px]'>800+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[12px] sm:text-[14px] leading-[18px]'>Visits</p>
                            </div>
                        </div>
                        <p className=' font-orbitron font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-[27px] md:leading-[31px] text-white pt-2 sm:pt-4'>Lava Land</p>
                        <p className=' font-poppins font-normal text-base leading-[22px] md:text-[18px] md:leading-[28px] opacity-70 text-white pt-2 sm:pt-3'>Embark on thrilling adventures in a volcanic world, featuring unique challenges and excitement, crafted exclusively for players.</p>
                    </div>
                    <div className=' bg-featured_sliderbg backdrop-blur-lg max-w-[364px] w-full p-5 flex flex-col max-sm:min-h-[400px] sm:min-h-[421px] md:min-h-[461px] bg-100%  bg-no-repeat'>
                        <img className='max-w-[324px] w-full' src={featured_Image2} alt="image1" />
                        <div className=' flex items-center  gap-[10px] pt-3'>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[12px] sm:text-[14px] leading-[18px]'>300+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[12px] sm:text-[14px] leading-[18px]'>Active Players</p>
                            </div>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[12px] sm:text-[14px] leading-[18px]'>800+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[12px] sm:text-[14px] leading-[18px]'>Visits</p>
                            </div>
                        </div>
                        <p className=' font-orbitron font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-[27px] md:leading-[31px] text-white pt-2 sm:pt-4'>3D Maze</p>
                        <p className=' font-poppins font-normal text-base leading-[22px] md:text-[18px] md:leading-[28px] opacity-70 text-white pt-2 sm:pt-3'>Develop a 3D maze game in Roblox: a fun, challenging project that enhances creativity and problem-solving skills for students.</p>
                    </div>
                    <div className=' bg-featured_sliderbg backdrop-blur-lg max-w-[364px] w-full p-5 flex flex-col max-sm:min-h-[400px] sm:min-h-[421px] md:min-h-[461px] bg-100%  bg-no-repeat'>
                        <img className='max-w-[324px] w-full' src={featured_Image3} alt="image1" />
                        <div className=' flex items-center  gap-[10px] pt-3'>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[12px] sm:text-[14px] leading-[18px]'>400+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[12px] sm:text-[14px] leading-[18px]'>Active Players</p>
                            </div>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[12px] sm:text-[14px] leading-[18px]'>700+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[12px] sm:text-[14px] leading-[18px]'>Visits</p>
                            </div>
                        </div>
                        <p className=' font-orbitron font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-[27px] md:leading-[31px] text-white pt-2 sm:pt-4'>Dino Island</p>
                        <p className=' font-poppins font-normal text-base leading-[22px] md:text-[18px] md:leading-[28px] opacity-70 text-white pt-2 sm:pt-3'>Embark on an epic adventure in Dino Island, where you can explore a prehistoric world filled with dinosaurs and hidden treasures.</p>
                    </div>
                    <div className=' bg-featured_sliderbg backdrop-blur-lg max-w-[364px] w-full p-5 flex flex-col max-sm:min-h-[400px] sm:min-h-[421px] md:min-h-[461px] bg-100%  bg-no-repeat'>
                        <img className='max-w-[324px] w-full' src={featured_Image4} alt="image1" />
                        <div className=' flex items-center  gap-[10px] pt-3'>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[12px] sm:text-[14px] leading-[18px]'>700+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[12px] sm:text-[14px] leading-[18px]'>Active Players</p>
                            </div>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[12px] sm:text-[14px] leading-[18px]'>1000+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[12px] sm:text-[14px] leading-[18px]'>Visits</p>
                            </div>
                        </div>
                        <p className=' font-orbitron font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-[27px] md:leading-[31px] text-white pt-2 sm:pt-4'>Fireplace</p>
                        <p className=' font-poppins font-normal text-base leading-[22px] md:text-[18px] md:leading-[28px] opacity-70 text-white pt-2 sm:pt-3'>Experience cozy and adventurous gameplay around a virtual hearth, blending relaxation and excitement uniquely on Roblox.</p>
                    </div>
                    <div className=' bg-featured_sliderbg backdrop-blur-lg max-w-[364px] w-full p-5 flex flex-col max-sm:min-h-[400px] sm:min-h-[421px] md:min-h-[461px] bg-100%  bg-no-repeat'>
                        <img className='max-w-[324px] w-full' src={featured_Image5} alt="image1" />
                        <div className=' flex items-center  gap-[10px] pt-3'>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[12px] sm:text-[14px] leading-[18px]'>800+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[12px] sm:text-[14px] leading-[18px]'>Active Players</p>
                            </div>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[12px] sm:text-[14px] leading-[18px]'>1200+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[12px] sm:text-[14px] leading-[18px]'>Visits</p>
                            </div>
                        </div>
                        <p className=' font-orbitron font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-[27px] md:leading-[31px] text-white pt-2 sm:pt-4'>Cat Washing Tycoon</p>
                        <p className=' font-poppins font-normal text-base leading-[22px] md:text-[18px] md:leading-[28px] opacity-70 text-white pt-2 sm:pt-3'>Dive into the adorable world of cat care! Build and manage your own cat washing business, upgrade your facilities. </p>
                    </div>
                    <div className=' bg-featured_sliderbg backdrop-blur-lg max-w-[364px] w-full p-5 flex flex-col max-sm:min-h-[400px] sm:min-h-[421px] md:min-h-[461px] bg-100%  bg-no-repeat'>
                        <img className='max-w-[324px] w-full' src={featured_Image6} alt="image1" />
                        <div className=' flex items-center  gap-[10px] pt-3'>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[12px] sm:text-[14px] leading-[18px]'>300+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[12px] sm:text-[14px] leading-[18px]'>Active Players</p>
                            </div>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[12px] sm:text-[14px] leading-[18px]'>800+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[12px] sm:text-[14px] leading-[18px]'>Visits</p>
                            </div>
                        </div>
                        <p className=' font-orbitron font-bold text-[20px] sm:text-[22px] md:text-[24px] leading-[27px] md:leading-[31px] text-white pt-2 sm:pt-4'>Phone Factory</p>
                        <p className=' font-poppins font-normal text-base leading-[22px] md:text-[18px] md:leading-[28px] opacity-70 text-white pt-2 sm:pt-3'>"Phone Factory: Dive into the exciting world of manufacturing in this Roblox game.</p>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Featured
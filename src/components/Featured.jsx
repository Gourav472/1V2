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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.4,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
        // appendDots: (dots) => (
        //     <div
        //         style={{
        //             position: "absolute",
        //             bottom: "0px",
        //             width: "100%",
        //             display: "flex",
        //             justifyContent: "center",
        //         }}
        //     >
        //         <ul style={{ margin: "0" }} className="custom-dots">
        //             {dots}
        //         </ul>
        //     </div>
        // ),
    };
    return (
        <div className=' bg-featured_bg bg-no-repeat bg-cover 2xl:bg-100% flex flex-col pb-[175px] -mt-[2px]'>
            <div className=' flex justify-center'>
                <div className=' relative inline-block'>
                    <h2 className=' font-orbitron font-bold text-[26px] sm:text-[30px] md:text-[38px] lg:text-[42px] leading-[40px] lg:leading-[54px] text-white text-center z-30'>Featured Projects</h2>
                    <div className=' max-sm:hidden pointer-events-none absolute -bottom-1 sm:bottom-[-16px] right-[-225%] sm:right-[-188%] md:right-[-138%] lg:right-[-120%] z-20'>
                        < Heading_Vector />
                    </div>
                </div>
            </div>
            <div className=' featured_Slider pt-[30px] sm:pt-[55px] md:pt-[70px] lg:pt-[89px] relative z-20'>
                <Slider {...settings2}>
                    <div className=' bg-featured_sliderbg backdrop-blur-lg max-w-[364px] w-full p-5 flex flex-col min-h-[461px] bg-100%  bg-no-repeat'>
                        <img className='max-w-[324px] w-full' src={featured_Image1} alt="image1" />
                        <div className=' flex items-center gap-[10px] pt-3'>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[14px] leading-[18px]'>300+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[14px] leading-[18px]'>Active Players</p>
                            </div>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[14px] leading-[18px]'>800+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[14px] leading-[18px]'>Visits</p>
                            </div>
                        </div>
                        <p className=' font-orbitron font-bold text-[24px] leading-[31px] text-white pt-4'>Lava Land</p>
                        <p className=' font-poppins font-normal text-[18px] leading-[28px] opacity-70 text-white'>Embark on thrilling adventures in a volcanic world, featuring unique challenges and excitement, crafted exclusively for Roblox players.</p>
                    </div>
                    <div className=' bg-featured_sliderbg backdrop-blur-lg max-w-[364px] w-full p-5 flex flex-col min-h-[461px] bg-100%  bg-no-repeat'>
                        <img className='max-w-[324px] w-full' src={featured_Image2} alt="image1" />
                        <div className=' flex items-center gap-[10px] pt-3'>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[14px] leading-[18px]'>300+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[14px] leading-[18px]'>Active Players</p>
                            </div>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[14px] leading-[18px]'>800+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[14px] leading-[18px]'>Visits</p>
                            </div>
                        </div>
                        <p className=' font-orbitron font-bold text-[24px] leading-[31px] text-white pt-4'>3D Maze</p>
                        <p className=' font-poppins font-normal text-[18px] leading-[28px] opacity-70 text-white'>Develop a 3D maze game in Roblox: a fun, challenging project that enhances creativity and problem-solving skills for students.</p>
                    </div>
                    <div className=' bg-featured_sliderbg backdrop-blur-lg max-w-[364px] w-full p-5 flex flex-col min-h-[461px] bg-100%  bg-no-repeat'>
                        <img className='max-w-[324px] w-full' src={featured_Image3} alt="image1" />
                        <div className=' flex items-center gap-[10px] pt-3'>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[14px] leading-[18px]'>400+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[14px] leading-[18px]'>Active Players</p>
                            </div>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[14px] leading-[18px]'>700+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[14px] leading-[18px]'>Visits</p>
                            </div>
                        </div>
                        <p className=' font-orbitron font-bold text-[24px] leading-[31px] text-white pt-4'>Dino Island</p>
                        <p className=' font-poppins font-normal text-[18px] leading-[28px] opacity-70 text-white'>Embark on an epic adventure in Dino Island, where you can explore a prehistoric world filled with dinosaurs and hidden treasures.</p>
                    </div>
                    <div className=' bg-featured_sliderbg backdrop-blur-lg max-w-[364px] w-full p-5 flex flex-col min-h-[461px] bg-100%  bg-no-repeat'>
                        <img className='max-w-[324px] w-full' src={featured_Image4} alt="image1" />
                        <div className=' flex items-center gap-[10px] pt-3'>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[14px] leading-[18px]'>700+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[14px] leading-[18px]'>Active Players</p>
                            </div>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[14px] leading-[18px]'>1000+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[14px] leading-[18px]'>Visits</p>
                            </div>
                        </div>
                        <p className=' font-orbitron font-bold text-[24px] leading-[31px] text-white pt-4'>Fireplace</p>
                        <p className=' font-poppins font-normal text-[18px] leading-[28px] opacity-70 text-white'>Experience cozy and adventurous gameplay around a virtual hearth, blending relaxation and excitement uniquely on Roblox.</p>
                    </div>
                    <div className=' bg-featured_sliderbg backdrop-blur-lg max-w-[364px] w-full p-5 flex flex-col min-h-[461px] bg-100%  bg-no-repeat'>
                        <img className='max-w-[324px] w-full' src={featured_Image5} alt="image1" />
                        <div className=' flex items-center gap-[10px] pt-3'>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[14px] leading-[18px]'>800+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[14px] leading-[18px]'>Active Players</p>
                            </div>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[14px] leading-[18px]'>1200+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[14px] leading-[18px]'>Visits</p>
                            </div>
                        </div>
                        <p className=' font-orbitron font-bold text-[24px] leading-[31px] text-white pt-4'>Cat Washing Tycoon</p>
                        <p className=' font-poppins font-normal text-[18px] leading-[28px] opacity-70 text-white'>Dive into the adorable world of cat care! Build and manage your own cat washing business, upgrade your facilities.</p>
                    </div>
                    <div className=' bg-featured_sliderbg backdrop-blur-lg max-w-[364px] w-full p-5 flex flex-col min-h-[461px] bg-100%  bg-no-repeat'>
                        <img className='max-w-[324px] w-full' src={featured_Image6} alt="image1" />
                        <div className=' flex items-center gap-[10px] pt-3'>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[14px] leading-[18px]'>300+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[14px] leading-[18px]'>Active Players</p>
                            </div>
                            <div className=' flex items-center gap-[6.78px]'>
                                <p className='font-poppins text-sky_blue font-bold text-[14px] leading-[18px]'>800+</p>
                                <p className='font-poppins text-white font-normal opacity-70 text-[14px] leading-[18px]'>Visits</p>
                            </div>
                        </div>
                        <p className=' font-orbitron font-bold text-[24px] leading-[31px] text-white pt-4'>Phon Factory</p>
                        <p className=' font-poppins font-normal text-[18px] leading-[28px] opacity-70 text-white'>"Phone Factory: Dive into the exciting world of manufacturing in this Roblox game.</p>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Featured
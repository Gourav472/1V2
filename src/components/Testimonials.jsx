import React from 'react'
import { Heading_Vector3, Star } from '../common/Icon'
import top_Red from '../assets/images/svg/top_RedLine.svg'
import bottom_Red from '../assets/images/svg/bottom_RedLine.svg'
import testimonial_Women from '../assets/images/webp/testimonial_women.webp'
import Slider from 'react-slick'
import gradient_Line from '../assets/images/webp/gradient_Line.webp'
const Testimonials = () => {
    var settings3 = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
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
        <div id='Testimonial' className=' relative bg-testimonial_bg bg-cover 2xl:bg-100% pb-[80px] sm:pb-[120px] md:pb-[160px] lg:pb-[184px] -mt-[2px]'>
            <div className=' flex justify-center'>
                <div className=' relative inline-block'>
                    <h2 className=' font-orbitron font-bold text-[26px] sm:text-[30px] md:text-[38px] lg:text-[42px] leading-[40px] lg:leading-[54px] text-white text-center z-30'>Clients Testimonials</h2>
                    <div className=' max-sm:hidden pointer-events-none absolute -bottom-1 sm:bottom-[-16px] sm:right-[-167%] md:right-[-117%] lg:right-[-102%] z-20'>
                        < Heading_Vector3 />
                    </div>
                </div>
            </div>
            <div className=' container max-w-[1164px] relative z-20'>
                <div className=' testimonial_slider'>
                    <Slider {...settings3}>
                        <div className=' max-w-[570px] md:max-w-[768px] lg:max-w-[992px] mx-auto xl:max-w-[1041px] w-full p-[35px_20px_20px_20px] md:p-[40px_25px_25px_25px] lg:p-[42px_56px_41px_55px] backdrop-blur-md bg-testimonial_card bg-100% bg-no-repeat mt-[30px] sm:mt-[60px] md:mt-[80px] lg:mt-[113px]'>
                            <div className='flex max-lg:flex-col max-lg:items-center max-lg gap-4 md:gap-7 lg:gap-10'>
                                <div className=' flex flex-col pt-2 '>
                                    <div className=' relative inline-block max-lg:flex max-lg:justify-center'>
                                        <span className=' font-orbitron font-bold leading-[35px] text-[24px] sm:text-[30px] md:text-[34px] sm:leading-[45px] lg:text-[42px] lg:leading-[54px] text-white'>Debbie Hagenes</span>
                                        <img className='max-sm:max-w-[250px] max-md:max-w-[300px] max-lg:w-[350px] absolute top-[-6px] lg:left-[-22px]' src={top_Red} alt="redline" />
                                        <img className='max-sm:max-w-[250px] max-md:max-w-[300px] max-lg:w-[350px] absolute bottom-[-6px] lg:left-[-4%]' src={bottom_Red} alt="redline" />
                                    </div>
                                    <p className=' opacity-70 max-w-[700px] lg:max-w-[621px] font-poppins font-normal text-base leading-[22px] md:text-[18px] md:leading-[25px] lg:text-[24px] lg:leading-[36px] text-white pt-5 lg:pt-[16px] max-lg:text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.</p>
                                    <div className=' flex items-center max-lg:justify-center gap-[6px] pt-3 md:pt-6'>
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                    </div>
                                </div>
                                <img rel='preload' className='pointer-events-none w-full max-w-[240px] sm:max-w-[289px] xl:w-[289px] xl:h-[328px] border-[2px] border-white rounded-[20px]' src={testimonial_Women} alt="women" />
                            </div>
                        </div>
                        <div className=' max-w-[570px] md:max-w-[768px] mx-auto lg:max-w-[1041px] w-full p-[35px_20px_20px_20px] md:p-[40px_25px_25px_25px] lg:p-[42px_56px_41px_55px] backdrop-blur-md bg-testimonial_card bg-100% bg-no-repeat mt-[30px] sm:mt-[60px] md:mt-[80px] lg:mt-[113px]'>
                            <div className='flex max-lg:flex-col max-lg:items-center gap-4 md:gap-7 lg:gap-10'>
                                <div className=' flex flex-col pt-2 '>
                                    <div className=' relative inline-block max-lg:flex max-lg:justify-center'>
                                        <span className=' font-orbitron font-bold leading-[35px] text-[24px] sm:text-[30px] md:text-[34px] sm:leading-[45px] lg:text-[42px] lg:leading-[54px] text-white'>Alex Johnson</span>
                                        <img className='max-sm:max-w-[250px] max-md:max-w-[300px] max-lg:w-[350px] absolute top-[-6px] lg:left-[-22px]' src={top_Red} alt="redline" />
                                        <img className='max-sm:max-w-[250px] max-md:max-w-[300px] max-lg:w-[350px] absolute bottom-[-6px] lg:left-[-4%]' src={bottom_Red} alt="redline" />
                                    </div>
                                    <p className=' opacity-70 max-w-[700px] lg:max-w-[621px] font-poppins font-normal text-base leading-[22px] md:text-[18px] md:leading-[25px] lg:text-[24px] lg:leading-[36px] text-white pt-5 lg:pt-[16px] max-lg:text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.</p>
                                    <div className=' flex items-center max-lg:justify-center gap-[6px] pt-3 md:pt-6'>
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                    </div>
                                </div>
                                <img rel='preload' className=' pointer-events-none w-full max-w-[240px] sm:max-w-[289px] border-[2px] border-white xl:w-[289px] xl:h-[328px] rounded-[20px]' src={testimonial_Women} alt="women" />
                            </div>
                        </div>
                        <div className=' max-w-[570px] md:max-w-[768px] mx-auto lg:max-w-[1041px] w-full p-[35px_20px_20px_20px] md:p-[40px_25px_25px_25px] lg:p-[42px_56px_41px_55px] backdrop-blur-md bg-testimonial_card bg-100% bg-no-repeat mt-[30px] sm:mt-[60px] md:mt-[80px] lg:mt-[113px]'>
                            <div className='flex max-lg:flex-col max-lg:items-center gap-4 md:gap-7 lg:gap-10'>
                                <div className=' flex flex-col pt-2 '>
                                    <div className=' relative inline-block max-lg:flex max-lg:justify-center'>
                                        <span className=' font-orbitron font-bold leading-[35px] text-[24px] sm:text-[30px] md:text-[34px] sm:leading-[45px] lg:text-[42px] lg:leading-[54px] text-white'>Emily Davis</span>
                                        <img className='max-sm:max-w-[250px] max-md:max-w-[300px] max-lg:w-[350px] absolute top-[-6px] lg:left-[-22px]' src={top_Red} alt="redline" />
                                        <img className='max-sm:max-w-[250px] max-md:max-w-[300px] max-lg:w-[350px] absolute bottom-[-6px] lg:left-[-4%]' src={bottom_Red} alt="redline" />
                                    </div>
                                    <p className=' opacity-70 max-w-[700px] lg:max-w-[621px] font-poppins font-normal text-base leading-[22px] md:text-[18px] md:leading-[25px] lg:text-[24px] lg:leading-[36px] text-white pt-5 lg:pt-[16px] max-lg:text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.</p>
                                    <div className=' flex items-center max-lg:justify-center gap-[6px] pt-3 md:pt-6'>
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                    </div>
                                </div>
                                <img rel='preload' className=' pointer-events-none w-full max-w-[240px] xl:w-[289px] xl:h-[328px] sm:max-w-[289px] border-[2px] border-white rounded-[20px]' src={testimonial_Women} alt="women" />
                            </div>
                        </div>
                        <div className=' max-w-[570px] md:max-w-[768px] mx-auto lg:max-w-[1041px] w-full p-[35px_20px_20px_20px] md:p-[40px_25px_25px_25px] lg:p-[42px_56px_41px_55px] backdrop-blur-md bg-testimonial_card bg-100% bg-no-repeat mt-[30px] sm:mt-[60px] md:mt-[80px] lg:mt-[113px]'>
                            <div className='flex max-lg:flex-col max-lg:items-center gap-4 md:gap-7 lg:gap-10'>
                                <div className=' flex flex-col pt-2 '>
                                    <div className=' relative inline-block max-lg:flex max-lg:justify-center'>
                                        <span className=' font-orbitron font-bold leading-[35px] text-[24px] sm:text-[30px] md:text-[34px] sm:leading-[45px] lg:text-[42px] lg:leading-[54px] text-white'>Jane Smith</span>
                                        <img className='max-sm:max-w-[250px] max-md:max-w-[300px] max-lg:w-[350px] absolute top-[-6px] lg:left-[-22px]' src={top_Red} alt="redline" />
                                        <img className='max-sm:max-w-[250px] max-md:max-w-[300px] max-lg:w-[350px] absolute bottom-[-6px] lg:left-[-4%]' src={bottom_Red} alt="redline" />
                                    </div>
                                    <p className=' opacity-70 max-w-[700px] lg:max-w-[621px] font-poppins font-normal text-base leading-[22px] md:text-[18px] md:leading-[25px] lg:text-[24px] lg:leading-[36px] text-white pt-5 lg:pt-[16px] max-lg:text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.</p>
                                    <div className=' flex items-center max-lg:justify-center gap-[6px] pt-3 md:pt-6'>
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                    </div>
                                </div>
                                <img rel='preload' className=' pointer-events-none w-full max-w-[240px] sm:max-w-[289px] border-[2px] xl:w-[289px] xl:h-[328px] border-white rounded-[20px]' src={testimonial_Women} alt="women" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className=' pointer-events-none z-10 left-[-1%] bottom-[-5%] absolute bg-ellipse_bg w-[110px] h-[110px] blur-[80px]'></div>
            <div className=' pointer-events-none z-10 right-[-1%] bottom-[-5%] absolute bg-ellipse_bg w-[110px] h-[110px] blur-[80px]'></div>
            <img className=' w-[27px] lg:h-[292px] absolute z-10 pointer-events-none max-md:hidden hidden 2xl:block right-[45px] lg:bottom-[-10%]' src={gradient_Line} alt="gradient-line" />
        </div>
    )
}

export default Testimonials
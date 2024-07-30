import React from 'react'
import logo_Haven from '../assets/images/webp/logo_Haven.webp'
import logo_Roblox from '../assets/images/webp/logo_Roblox.webp'
import logo_Lava from '../assets/images/webp/logo_Lava.webp'
import logo_Dino from '../assets/images/webp/logo_Dino.webp'
import logo_Cat from '../assets/images/webp/logo_Cat.webp'
import logo_Phon from '../assets/images/webp/logo_Phon.webp'
import Slider from "react-slick";
const LogoSlider = () => {
    var settings = {
        dots: false,
        autoplay: true,
        variableWidth: true,
        arrows: false,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: true,
        cssEase: "linear",
    };
    return (
        <>
            <div className=' bg-light_black py-2 sm:py-3 md:py-5 lg:py-[35px] logo_Slider -my-[2px] z-20 relative'>
                <Slider {...settings}>
                    <img className=' cursor-pointer max-w-[120px] md:max-w-[151.97px]' src={logo_Haven} alt="logo" />
                    <img className=' cursor-pointer max-w-[150px] md:max-w-[159.94px]' src={logo_Roblox} alt="logo" />
                    <img className=' cursor-pointer max-w-[150px] md:max-w-[234.38px]' src={logo_Lava} alt="logo" />
                    <img className=' cursor-pointer max-w-[150px] md:max-w-[234.38px]' src={logo_Dino} alt="logo" />
                    <img className=' cursor-pointer max-w-[150px] md:max-w-[225.11px]' src={logo_Cat} alt="logo" />
                    <img className=' cursor-pointer max-w-[150px] md:max-w-[234.38px]' src={logo_Phon} alt="logo" />
                </Slider>
            </div>
        </>
    )
}

export default LogoSlider
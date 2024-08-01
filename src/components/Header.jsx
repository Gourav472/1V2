import React, { useEffect, useState } from 'react'
import { NAV_ITEMS_DATA } from '../common/Helper';
import CommonBtn from '../common/CommonBtn';
import Hero from '../assets/images/webp/hero.webp'
import gradient_Line from '../assets/images/webp/gradient_Line.webp'
import navLogo from '../assets/images/svg/nav_Logo.svg'
const Header = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const HANDLE_RESIZE = () => {
      if (window.innerWidth < 992) {
        document.body.style.overflow = show ? "visible" : "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };
    HANDLE_RESIZE();
    window.addEventListener("resize", HANDLE_RESIZE);

    return () => {
      window.removeEventListener("resize", HANDLE_RESIZE);
      document.body.style.overflow = "";
    };
  }, [show]);
  const HANDLE_CLICK = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (window.innerWidth < 992) {
      setShow(!show);
    } else {
      e.preventDefault();
    }
  };
  return (
    <>
      <div className={`bg-header_bg relative bg-no-repeat bg-cover ${!show ? "min-h-screen" : ""}`}>
        <div className='container max-w-[1164px] relative z-20 '>
          <div className="flex justify-between items-center pt-[6px] pb-2">
            <a href="/">
              <img className='max-sm:max-w-[70px]' src={navLogo} alt="icon" />
            </a>
            <ul
              className={`flex flex-col lg:flex-row items-center gap-[20px] lg:gap-[32px] max-lg:fixed max-lg:justify-center custom_duration top-0 max-lg:-right-full max-lg:bg-black max-lg:z-[90] max-lg:h-screen max-lg:w-full ${show ? "" : " !right-0"
                }`}
            >
              {NAV_ITEMS_DATA.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => HANDLE_CLICK(e, item.href.substring(1))}
                    className={item.className}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
              <li className="lg:hidden"><CommonBtn buttonName="Get Started" /></li>
            </ul>
            <div className="flex items-center sm:gap-6 gap-3">
              <div className='max-md:hidden'>
                <CommonBtn buttonName="Get Started" />
              </div>
              <div
                class={`cursor-pointer relative z-[100] lg:hidden max-sm:scale-75 ${show ? "" : "cross" }`}
                onClick={() => setShow(!show)}>
                <span class="nav-toggle-items "></span>
                <span class="nav-toggle-items my-2"></span>
                <span class="nav-toggle-items "></span>
              </div>
            </div>
          </div>
          <div className='flex justify-center lg:justify-start pt-[100px] sm:pt-[130px] md:pt-[144px] pb-[100px] sm:pb-[130px] md:pb-[170px] lg:pb-[236px]'>
            <div className='flex flex-col relative z-20'>
              <h1 className='font-orbitron font-bold text-[38px] sm:text-5xl leading-[45px] sm:leading-[50px] md:text-5xl lg:text-7xl md:leading-[55px] lg:leading-[93px] text-white text-center lg:text-start'>Welcome to <span className='block'>1v2 Studio</span></h1>
              <p className='max-w-[500px] md:max-w-[600px] lg:max-w-[465px] opacity-70 font-poppins font-normal text-base md:text-xl leading-[22px] md:leading-8 text-white pt-3 sm:pt-4 text-center lg:text-start'>Leading the Way in Creating Unique and Innovative Experiences on Roblox.</p>
              <div className='max-lg:mx-auto mt-7 sm:mt-8 md:mt-[42px]'>
                <CommonBtn buttonName="Contact Us" />
              </div>
            </div>
            <img rel='preload' className='pointer-events-none z-10 max-w-[602px] opacity-50 lg:opacity-70 xl:opacity-100 lg:right-0 top-[126px] absolute w-full' src={Hero} alt="hero-image" />
          </div>
        </div>
        <img className='w-[27px] h-[292px] absolute max-md:hidden lg:hidden 2xl:block md:left-[40px] lg:left-[62px] bottom-[32px] pointer-events-none' src={gradient_Line} alt="gradient-line" />
      </div>
    </>
  )
}
export default Header
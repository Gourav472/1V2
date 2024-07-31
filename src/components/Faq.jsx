import React, { useState } from "react";
import { Heading_Vector4 } from '../common/Icon';

const Faq = () => {
    const faqs = [
        {
            question: "What is 1v2 Studio?",
            answer:
                "1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.",
        },
        {
            question: "How can I contact 1v2 Studio?",
            answer:
                "1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.",
        },
        {
            question: "Is Lenard The Lemur secure?",
            answer:
                "1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.",
        },
        {
            question: "What types of games does 1v2 Studio develop?",
            answer:
                "1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.",
        },
        {
            question: "Can I collaborate with 1v2 Studio on a game project?",
            answer:
                "1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.",
        },
    ];
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='bg-faq_bg bg-no-repeat mt-[-2px] bg-cover pb-[58px] sm:pb-[88px] md:pb-[108px] lg:pb-[161px]'>
            <div className='flex justify-center'>
                <div className='relative inline-block'>
                    <h2 className='font-orbitron font-bold text-[26px] sm:text-[30px] md:text-[38px] lg:text-[42px] uppercase leading-[40px] lg:leading-[54px] text-white text-center z-30'>Faq</h2>
                    <div className='max-sm:hidden pointer-events-none absolute -bottom-1 sm:bottom-[-16px] right-[-1000] sm:right-[-940%] md:right-[-730%] lg:right-[-655%] z-20'>
                        <Heading_Vector4 />
                    </div>
                </div>
            </div>
            <div className='container max-w-[1164px] mx-auto'>
                <div className='max-w-[480px] sm:max-w-[576px] md:max-w-[768px] lg:max-w-[884px] mx-auto pt-[11px] sm:pt-[41px] md:pt-[61px] lg:pt-[72px]'>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? "border-[1px] border-sky_blue bg-accordian_gradient shadow-border" : "border-transparent border-[1px]"} mt-6`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`${activeIndex === index ? "p-[8px_8px_0px_8px] lg:p-[21px_20px_0px_20px] border-transparent" : "p-2 lg:p-[20px_20px]"} w-full text-left bg-blur_black backdrop-blur-lg flex items-center justify-between border-[1px] border-gray transition-all duration-500`}
                            >
                                <span className="font-orbitron font-medium text-base leading-[24px] sm:text-[18px] md:text-[20px] md:leading-[26px] lg:text-2xl lg:leading-9 text-white">{faq.question}</span>
                                <span className="float-right">
                                    <svg width="40" className={`${activeIndex === index ? "transform rotate-180 hidden" : ""} w-[32px] h-[32px] md:w-[40px] md:h-[40px] transition-transform duration-500`} height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="19.5" stroke="white" />
                                        <path d="M21 13C21 12.4477 20.5523 12 20 12C19.4477 12 19 12.4477 19 13V18.9999L13 18.9999C12.4477 18.9999 12 19.4476 12 19.9999C12 20.5522 12.4477 20.9999 13 20.9999L19 20.9999V27C19 27.5523 19.4477 28 20 28C20.5523 28 21 27.5523 21 27V20.9999L27 20.9999C27.5523 20.9999 28 20.5522 28 19.9999C28 19.4476 27.5523 18.9999 27 18.9999L21 18.9999V13Z" fill="white" />
                                    </svg>
                                    <svg className={`${activeIndex === index ? "block" : "hidden"} w-[32px] h-[32px] md:w-[40px] md:h-[40px] transition-transform duration-500`} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="19.5" stroke="white" />
                                        <path d="M13 19L19 19H21L27 19C27.5523 19 28 19.4477 28 20C28 20.5523 27.5523 21 27 21L21 21L19 21L13 21C12.4477 21 12 20.5523 12 20C12 19.4477 12.4477 19 13 19Z" fill="white" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-max-height duration-500 ${activeIndex === index ? "max-h-[100px]" : "max-h-0"}`}
                            >
                                <div className="font-poppins font-normal text-[15px] leading-[20px] lg:text-[18px] lg:leading-[28px] opacity-70 text-white max-w-[759px] p-[2px_8px_8px_8px] lg:p-[6px_20px_17px_20px]">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;

import React from 'react'
const CommonBtn = ({ buttonName }) => {
  return (
    <button className=' w-[151px] h-[47px] p-[11px_30px] bg-btn_bg hover:scale-95 bg-no-repeat bg-cover cursor-pointer custom_duration font-poppins font-normal text-base leading-[24px] text-white text-nowrap'>{buttonName}</button>
  )
}

export default CommonBtn
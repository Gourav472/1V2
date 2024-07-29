import React from 'react'

const Common_Btn = ({ buttonName }) => {
  return (
    <div className=' w-[151px] h-[47px] p-[11px_30px] bg-btn_bg hover:scale-95 bg-no-repeat bg-cover cursor-pointer custom_duration'>
      <p className=' font-poppins font-normal text-base leading-[24px] text-white text-nowrap'>{buttonName}</p>
    </div>
  )
}

export default Common_Btn
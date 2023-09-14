import React from 'react'

const Quote = ({quote}) => {
  return (
    <div className='py-[60px] xl:px-[160px] lg:px-[85px] md:px-[65px] flex mx-auto justify-center items-center z-10 mt-[-100px] drop-shadow-xl bg-white'>
        <p className='max-w-[951px] xl:w-[951px] lg:w-[690px] md:w-[510px]  font-poppins xl:text-[32px] md:text-[24px] text-[16px] text-center px-6'>{quote}</p>
    </div>
  )
}

export default Quote
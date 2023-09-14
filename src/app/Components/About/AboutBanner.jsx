import Image from 'next/image'
import React from 'react'

const AboutBanner = ({img, title}) => {
  return (
    <div className='relative h-[360px] w-full mt-[80px]'>
        <div className='w-full h-[360px] z-10 relative bg-black/70 flex items-center md:justify-start justify-center'>
      <div className='w-[374px] h-[374px] md:block hidden absolute bg-lightBlue/40 rounded-full ml-[220px] mt-[-60px] blur-[150px] z-20'></div>
        <h2 className='relative text-white xl:text-[56px] lg:text-[48px] z-40 md:text-[40px] text-[32px] font-secularOne xl:w-[1000px] lg:w-[840px] md:w-[680px] w-[300px] text-center md:text-left mb-16 xl:px-[122px] lg:px-[85px] md:px-[65px]'>{title}</h2>
        </div>
        <Image src={`/${img}.jpg`} priority style={{objectFit: 'cover'}} fill alt={title}  />
    </div>
  )
}

export default AboutBanner
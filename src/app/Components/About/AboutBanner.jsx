import Image from 'next/image'
import React from 'react'

const AboutBanner = () => {
  return (
    <div className='relative h-[360px] w-full mt-[80px]'>
        <div className='w-full h-[360px] z-10 relative bg-black/70 flex items-center md:justify-start justify-center'>
        <h2 className='relative text-white xl:text-[56px] lg:text-[48px] md:text-[40px] text-[32px] font-secularOne xl:w-[940px] lg:w-[780px] md:w-[650px] w-[300px] text-center md:text-left mb-16 xl:px-[122px] lg:px-[85px] md:px-[65px]'>About Premier Associates</h2>
        </div>
        <Image src='/s2.jpg' priority style={{objectFit: 'cover'}} fill alt="About Us Banner"  />
    </div>
  )
}

export default AboutBanner
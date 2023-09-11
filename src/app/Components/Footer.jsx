import Image from 'next/image'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Footer = () => {
  return (
    <div className="w-full xl:px-0 lg:px-[85px] md:px-[65px] px-[32px] bg-black flex justify-center py-[30px] items-center">
      <div className='max-w-[1280px] md:flex-row md:flex-wrap flex-col lg:gap-0 gap-8 w-full flex lg:justify-between lg:items-center md:items-start md:justify-between items-center justify-center'>
      <div className='flex flex-col gap-[16px]'>
        <Image
          alt="premier associate logo"
          width={240}
          height={100}
          src="/webwh.png"
        />
        <p className='text-white  md:text-left text-center font-poppins text-[16px] leading-[200%] max-w-[250px]'>© Copyright 2023. PREMIER ASSOCIATES. All Rights Reserved.</p>      
        </div>

        <div className='xl:text-[24px] md:self-stretch flex items-center justify-center text-[20px] xl:w-[318px] w-[240px] text-center font-secularOne text-white'>
        Unleash your potential with our virtual assistant services
        </div>

        <ul className='flex-col font-poppins md:flex hidden'>
            <li className='text-white flex mb-4'>Navigate to :</li>
            <li className='text-white hover:text-lightBlue duration-200 flex items-center gap-[8px] cursor-pointer'><IoIosArrowForward />Home</li>
            <li className='text-white hover:text-lightBlue duration-200 flex items-center gap-[8px] cursor-pointer'><IoIosArrowForward />Services</li>
            <li className='text-white hover:text-lightBlue duration-200 flex items-center gap-[8px] cursor-pointer ml-8'><IoIosArrowForward />Virtual Assistant</li>
            <li className='text-white hover:text-lightBlue duration-200 flex items-center gap-[8px] cursor-pointer ml-8'><IoIosArrowForward />Key Accounts Management</li>
            <li className='text-white hover:text-lightBlue duration-200 flex items-center gap-[8px] cursor-pointer ml-8'><IoIosArrowForward />Managing CRM Applications</li>
            <li className='text-white hover:text-lightBlue duration-200 flex items-center gap-[8px] cursor-pointer'><IoIosArrowForward />About</li>
            <li className='text-white hover:text-lightBlue duration-200 flex items-center gap-[8px] cursor-pointer'><IoIosArrowForward />Contact Us</li>        </ul>
      </div>
    </div>
  )
}

export default Footer
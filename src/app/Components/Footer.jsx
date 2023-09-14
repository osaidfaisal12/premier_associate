import Image from 'next/image'
import Link from 'next/link'
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
            <li className='text-white hover:text-lightBlue duration-200 cursor-pointer'><Link href='/' className='flex items-center gap-[8px]'><IoIosArrowForward />Home</Link></li>
            <li className='text-white hover:text-lightBlue duration-200 flex items-center gap-[8px] cursor-pointer'><Link href='/services/virtual-assistant' className='flex items-center gap-[8px]'><IoIosArrowForward />Services</Link></li>
            <li className='text-white hover:text-lightBlue duration-200 flex items-center gap-[8px] cursor-pointer ml-8'><Link href='/services/virtual-assistant' className='flex items-center gap-[8px]'><IoIosArrowForward />Virtual Assistant</Link></li>
            <li className='text-white hover:text-lightBlue duration-200 flex items-center gap-[8px] cursor-pointer ml-8'><Link href='/services/key-accounts-management' className='flex items-center gap-[8px]'><IoIosArrowForward />Key Accounts Management</Link></li>
            <li className='text-white hover:text-lightBlue duration-200 flex items-center gap-[8px] cursor-pointer ml-8'><Link href='/services/managing-crm-applications' className='flex items-center gap-[8px]'><IoIosArrowForward />Managing CRM Applications</Link></li>
            <li className='text-white hover:text-lightBlue duration-200 flex items-center gap-[8px] cursor-pointer'><Link href='/about' className='flex items-center gap-[8px]'><IoIosArrowForward />About</Link></li>
            <li className='text-white hover:text-lightBlue duration-200 flex items-center gap-[8px] cursor-pointer'><Link href='/contact-us' className='flex items-center gap-[8px]'><IoIosArrowForward />Contact Us</Link></li>        
            </ul>
      </div>
    </div>
  )
}

export default Footer
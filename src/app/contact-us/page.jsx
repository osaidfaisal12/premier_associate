import React from 'react'
import Navbar from '../Components/Navbar'
import FollowUs from '../Components/FollowUs'
import Footer from '../Components/Footer'
import Powered from '../Components/Powered'
import HeroBanner from '../Components/ContactUs/heroBanner'
import Image from 'next/image'
import MyForm from '../Components/ContactUs/MyForm'
import ContactInfo from '../Components/ContactUs/ContactInfo'

export const metadata = {
    title: 'Contact Us | Premier Associates',
    description: 'Looking for a Virtual Assistant? Let&rsquo;s schedule a meeting with our Professional Virtual Assistant',
  }

const page = () => {
  return (
    <div className='flex flex-col'>
    <Navbar />
    <HeroBanner />
    <div className='flex w-full items-center justify-center'>
    <div className='flex xl:max-w-[1270px] xl:px-0 lg:px-[80px] md:px-[65px] px-[32px] my-[56px] xl:gap-[100px] lg:gap-[40px] gap-[20px]'>
        <div className='flex flex-col lg:w-[65%] md:w-[60%]'>
        <div className='flex flex-col'>
            <h3 className='text-[32px] font-secularOne'>Schedule a Call with our Premier Associate Virtual Assistant</h3>
            <p className='font-poppins text-[16px] leading-[200%]'>Premier Associates is dedicated to empowering businesses to operate at their fullest potential. With our expert team and comprehensive operations, we offer cost-effective resources that deliver substantial value to business owners. Count on our extensive industry knowledge, business solutions proficiency, and exceptional output to provide top-tier virtual assistance.</p>
            <p className='font-poppins mt-[5px] text-[16px]'>*Use this form if you are looking for a VA.</p>
        </div>
        <MyForm />
        </div>
        <div className='relative lg:w-[36%]  md:block hidden w-[40%] rounded-[20px] overflow-hidden'>
            <Image src='/christ.jpg' alt='looking for virtual assistant' fill style={{objectFit:'cover'}} />
            <div className='absolute z-20 w-full flex h-full bg-gradient-to-t opacity-70 from-[#1450A3] to-[#00CF95]'></div>
            <div className='flex flex-col w-full h-full lg:px-[32px] px-[16px] justify-center items-center gap-[32px] absolute z-30'>
            <p className='text-[40px]  font-secularOne text-white'>Looking for a Virtual Assistant ?</p>
            <p className='text-[24px] font-secularOne text-white '>Let&rsquo;s schedule a meeting with our Professional Virtual Assistant</p>
            </div>
        </div>
    </div>
    </div>
    <ContactInfo title='More Contact Information' bgcolor = '#ECECEC' />
    <FollowUs />
    <Footer />
    <Powered />
</div>
  )
}

export default page
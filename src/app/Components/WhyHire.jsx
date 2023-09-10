import Image from 'next/image'
import React from 'react'

const WhyHire = () => {
  return (
    <div className='max-w-[1280px] xl:px-0 lg:px-[85px] md:px-[65px] px-[32px]  flex-col mx-auto w-[100%] flex justify-center items-center'>
        <h2 className='font-secularOne md:text-[32px] text-[24px] my-[56px] md:text-left text-center'>Why Hire A Virtual Assistant?</h2>
        <div className='flex lg:flex-row flex-col-reverse justify-center items-center lg:gap-[42px] md:gap-[56px] gap-[32px]'>
        <div className='lg:w-[60%] flex gap-[28px] flex-col '>
            <div className='bg-[#ECECEC] rounded-[10px] flex md:flex-row flex-col justify-center items-start xl:p-[48px] lg:p-[16px] p-[16px] xl:gap-[40px] gap-[24px]'>
                <Image src='/stock.png' width={64} height={64} alt='stock icon' />
                <p className='md:text-[16px] text-[14px] font-poppins'>Hiring a virtual assistant allows you to delegate time-consuming tasks, freeing you to focus on core business activities. This increased efficiency can lead to higher productivity and growth, helping your business thrive. With a virtual assistant, you can streamline your operations and get more done in less time.</p>
            </div>
            <div className='bg-[#ECECEC] rounded-[10px] flex flex-col md:flex-row justify-center items-start xl:p-[48px] lg:p-[16px] p-[16px] xl:gap-[40px] gap-[24px]'>
                <Image src='/stock1.png' width={64} height={64} alt='stock icon' />
                <p className='md:text-[16px] text-[14px] font-poppins'>Virtual assistants offer cost-effective support without the need for physical office space or employee benefits. This can lead to significant savings for your business while still benefiting from skilled professionals. By outsourcing tasks to a virtual assistant, you can access top-tier talent without the overhead costs associated with hiring a full-time employee.</p>
            </div>
        </div>
        <div className='flex md:h-[400px] h-[300px] w-full lg:w-[40%] lg:justify-end justify-center items-center lg:self-stretch relative'>
            <div className='md:flex hidden  absolute z-10 justify-center xl:top-10 lg:top-0 top-16 xl:left-8 lg:left-0 left-8 items-center xl:w-[188px] w-[160px] xl:h-[188px] h-[160px]'>
            <Image priority className='rounded-bl-[30px] rounded-tr-[30px]' src='/boy4.jpg' layout='fill' objectFit='cover' alt='staff pic one' />
            </div>
            <div className='md:flex hidden absolute z-10 justify-center lg:bottom-[-32px] xl:left-12 lg:left-0 bottom-0 left-12 items-center lg:w-[152px] w-[140px] lg:h-[152px] h-[140px]'>
            <Image priority className='rounded-bl-[30px] rounded-tr-[30px]' src='/boy3.jpg' layout='fill' objectFit='cover' alt='staff pic one' />
            </div>
            <div className='md:flex hidden absolute z-10 justify-center lg:bottom-[-32px] xl:right-8 lg:right-0 right-8 items-center xl:w-[172px] lg:w-[120px] w-[172px] xl:h-[172px] lg:h-[120px] h-[172px]'>
            <Image priority className='rounded-bl-[30px] rounded-tr-[30px]' src='/boy1.jpg' layout='fill' objectFit='cover' alt='staff pic one' />
            </div>
            <div className='flex justify-center items-center xl:w-[340px] lg:w-[280px] md:w-[340px] w-[300px] absolute xl:h-[340px] lg:h-[280px] md:h-[340px] h-[300px]'>
            <Image priority className='rounded-tl-[30px] rounded-br-[30px]' src='/boy2.jpg' layout='fill' objectFit='cover' alt='staff pic one' />
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default WhyHire
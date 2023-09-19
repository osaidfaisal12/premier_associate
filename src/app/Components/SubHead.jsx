import Image from 'next/image'
import React from 'react'

const SubHead = ({currentService}) => {
    // console.log(subHead)
return (
    <div className='flex py-[56px] flex-wrap md:gap-[33px] gap-[16px] justify-center max-w-[960px]'>
        {
            currentService.subHead.map((item, index) => (
                <div key={index} className='md:p-[18px] hover:bg-darkBlue duration-300 p-[12px] md:h-[400px] h-[300px] bg-lightBlue self-center text-white flex flex-col'>
                    <div className='relative w-[260px] h-[260px]'>
                    <Image src={item.img} priority alt='hi' style={{objectFit: 'cover'}} fill/>
                    </div>
                    <h3 className='font-secularOne max-w-[261px] mt-[18px] mb-[9px]'>{item.title}</h3>
                    <p className='text-[14px] font-poppins max-w-[261px]'>{item.desc}</p>
                </div>
            ))
        }
    </div>
  )
}

export default SubHead
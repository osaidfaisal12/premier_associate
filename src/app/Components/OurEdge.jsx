import Image from 'next/image'
import React from 'react'

const data = [
    {
        icon: "/candidate.png",
        title: "Highly Shilled Virtual Assistants",
    },
    {
        icon: "/bachelor.png",
        title: "Degree Holders & Professionals",
    },
    {
        icon: "/talk.png",
        title: "English Proficient Virtual Assistants",
    }
]

const OurEdge = () => {
  return (
    <div style={{ background: 'linear-gradient(283deg, #0098EF 0%, #1450A3 100%)'}} className=" xl:px-0 lg:px-[85px] md:px-[65px] px-[32px] flex-col mx-auto w-[100%] flex justify-center items-center">
        <h2 className="font-secularOne text-white md:text-[32px] text-[24px] my-[56px] md:text-left text-center">
        Our Edge
      </h2>
        <div className='flex md:flex-row flex-col lg:gap-[54px] md:gap-[16px] justify-center items-center'>
            {
                data.map((item, index) => (
                    <div key={index} className='flex justify-center items-center gap-[30px] mb-[56px] flex-col px-[36px] py-[33px] rounded-md bg-white'>
                        <Image src={item.icon} alt={item.title} width={82} height={82} />
                        <p className='font-secularOne text-center text-[20px]'>{item.title}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default OurEdge
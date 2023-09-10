import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const data = [
    {
        icon: "/facebook.png",
        alt: "facebook",
        linkTo: "/",
    },
    {
        icon: "/twitter.png",
        alt: "twitter",
        linkTo: "/",
    },{
        icon: "/instagram.png",
        alt: "instagram",
        linkTo: "/",
    },{
        icon: "/linkedin.png",
        alt: "linkedin",
        linkTo: "/",
    }
]

const FollowUs = () => {
  return (
    <div className="w-full xl:px-0 lg:px-[85px] md:px-[65px] px-[32px] bg-black flex justify-center py-[30px] items-center">
      <div className='max-w-[1280px] md:flex-row flex-col md:gap-0 gap-8 w-full flex justify-between items-center'>
      <h2 className="font-secularOne text-white md:text-[32px] text-[24px] md:text-left text-center">
        Follow us on
      </h2>
       
      <div className='flex justify-center items-center gap-[32px]'>
      {
            data.map((item, index) => (
                <Link  key={index} href=''><Image src={item.icon} alt={item.alt} width={50} height={50} /></Link>
            ))
        }
      </div>
      </div>
    </div>
  )
}

export default FollowUs
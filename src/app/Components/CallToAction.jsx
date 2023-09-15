import Link from 'next/link'
import React from 'react'

const CallToAction = () => {
  return (
    <div style={{ background: 'linear-gradient(283deg, #0098EF 0%, #1450A3 100%)'}} className='gap-[30px] xl:px-0 lg:px-[85px] md:px-[65px] px-[32px] mx-auto w-[100%] flex lg:flex-row flex-col py-[56px] justify-center items-center'>
    <h2 className='font-secularOne xl:max-w-[750px] max-w-[600px] text-white md:text-[32px] text-[24px] lg:text-left text-center'>Don&rsquo;t let tasks pile up. Contact us to get your virtual assistant support in motion.</h2>
    <Link href='/contact-us' className='w-[200px] h-[200px] bg-gradient-to-t shadow-xl from-lightBlue text-[20px] to-[#00CF95] rounded-full text-white flex justify-center items-center font-secularOne'><p>Contact Us</p></Link>
</div>
  )
}

export default CallToAction
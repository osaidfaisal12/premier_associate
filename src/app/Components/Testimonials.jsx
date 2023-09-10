import Image from 'next/image'
import React from 'react'

const data = [
    {
        name: 'John Doe',
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum aliquam, nunc nisl ultrices nunc, nec aliquam nisl nisl nec nisl.",
        img: '/boy1.jpg'
    },
    {
        name: 'John Doe',
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum aliquam, nunc nisl ultrices nunc, nec aliquam nisl nisl nec nisl.",
        img: '/boy1.jpg'
    },
    {
        name: 'John Doe',
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum aliquam, nunc nisl ultrices nunc, nec aliquam nisl nisl nec nisl.",
        img: '/boy1.jpg'
    }
]

const Testimonials = () => {
  return (
    <div style={{ background: 'linear-gradient(283deg, #0098EF 0%, #1450A3 100%)'}} className=' xl:px-0 lg:px-[85px] md:px-[65px] px-[32px] mx-auto w-[100%] flex flex-col py-[56px] justify-center items-center'>
        <h2 className='font-secularOne text-white md:text-[32px] text-[24px] md:text-left text-center'>Testimonials</h2>
        <p className='text-white mb-[50px]'> 
            What our clients say about us
        </p>
        <div className=' flex flex-wrap lg:flex-row justify-center items-center xl:gap-[44px] gap-[40px]'>
            {
                data.map((item, index) => (
                    <div key={index} className='xl:w-[365px] shadow-xl mt-[50px] w-[256px] bg-lightBlue'>
                        <div className='w-[100px] top-[-50px] lg:left-[80px] xl:left-[130px] left-[75px] h-[100px] relative'>
                        <Image className='rounded-full' objectFit='cover' fill src={item.img} alt={item.name} />
                        </div>
                        <p className='font-secularOne text-[24px] text-center text-white lg:mt-[-50px] mt-[-40px] bg-lightBlue'>{item.name}</p>
                        <div className='bg-white p-[36px] self-stretch flex flex-col min-h-[250px]'>
                        <Image src='/testi.png' alt='testimonial icon' width={35} height={35} />
                        <p>{item.testimonial}</p>
                    </div>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default Testimonials
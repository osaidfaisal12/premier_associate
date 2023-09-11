import React from 'react'

const data = [
    {
        title: "Highly Shilled Virtual Assistants",
        desc: 'First, specify the roles and tasks you need assistance with and the qualifications, experience, and hours required daily.'
    },
    {
        title: "Match With a Virtual Assistant",
        desc: 'From our pool of Virtual Assistants, we\'ll recommend and interview the VA that best suits your requirements.'
    },
    {
        title: "Start Delegating Tasks",
        desc: "Once you\'ve matched with your VA, you can start delegating tasks right away!"
    }
]

const OurMission = () => {
    return (
        <div style={{ background: 'linear-gradient(283deg, #0098EF 0%, #1450A3 100%)'}} className=" xl:px-0 lg:px-[85px] md:px-[65px] px-[34px] flex-col mx-auto w-[100%] flex justify-center items-center">
            <h2 className="font-secularOne text-white md:text-[32px] text-[24px] my-[56px] md:text-left text-center">
            Our Mission
          </h2>
            <div className='flex md:flex-row flex-col xl:gap-[54px] lg:gap-[24px] md:gap-[20px] gap-4 mb-[56px] justify-center items-center'>
                {
                    data.map((item, index) => (
                        <div key={index} className='flex xl:w-[388px] lg:w-[270px] md:w-[200px] xl:h-[207px] md:h-[307px] gap-[16px] flex-col px-[24px] py-[24px] rounded-md bg-white'>
                            <div><p className='text-darkBlue font-secularOne lg:text-[28px] text-[20px]'>0{index+1}</p>
                            <p className='text-darkBlue lg:text-[20px] text-[18px] font-secularOne'>{item.title}</p></div>
                            <p className='font-poppins lg:text-[16px] text-[14px]'>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
      )
}

export default OurMission
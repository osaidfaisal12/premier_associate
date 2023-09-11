import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    icon: "/customer-support.png",
    title: "Virtual Assistant",
  },
  {
    icon: "/account.png",
    title: "Key Accounts Management",
  },
  {
    icon: "/crm.png",
    title: "Managing CRM Applications",
  }
]

const KeyServices = () => {
  return (
    <div className="max-w-[1280px] xl:px-0 lg:px-[85px] md:px-[65px] px-[32px] mb-[56px] flex-col mx-auto w-[100%] flex justify-center items-center">
      <h2 className="font-secularOne md:text-[32px] text-[24px] my-[56px] md:text-left text-center">
        Our Key Services
      </h2>
      <div className="flex flex-wrap lg:justify-between justify-center items-center xl:gap-[88px] gap-[40px]">
        
        {
          data.map((item, index) => (
            <div key={index} className="xl:w-[340px] w-[256px] xl:h-[360px] h-[320px] relative flex justify-between items-center">
          <Image
            className="relative"
            src="/keyser.jpg"
            priority
            layout="fill"
            alt="Key services"
          />
          <div className="flex justify-between border-t-[16px] border-lightBlue hover:border-[16px]  flex-col w-[216px] h-[280px] z-10 m-auto relative bg-white hover:w-full hover:h-full transition-all duration-300">
            <div className="flex flex-col px-[32px]">
              <Image
                className="mt-[32px] mb-[16px]"
                src={item.icon}
                alt={item.title}
                width={35}
                height={35}
              />
              <h3 className="text-[24px] select-none font-secularOne">{item.title}</h3>
            </div>
            {/* </div> */}
            <div className="px-[32px] mb-[24px]">
              <hr className="border-[1px] border-black mb-[12px]" />
              <Link
                href="/"
                className="hover:text-lightBlue duration-300 font-poppins text-[14px] underline"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
          ))
        }
       
      </div>
    </div>
  );
};

export default KeyServices;

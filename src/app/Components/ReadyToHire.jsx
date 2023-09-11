import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    img: "/s1.jpg",
    title: "01. Customized Business Support",
    description:
      "Every business is unique, and we understand that. Share your specific business needs with us, and we'll handpick the perfect virtual assistant to complement your company. Whether it's administrative tasks, customer support, or specialized projects, we've got you covered.",
  },
  {
    img: "/s2.jpg",
    title: "02. Finding Your Ideal Virtual Partner",
    description:
      "Selecting the right virtual assistant is crucial. We'll recommend and personally interview the most qualified VAs from our team to ensure they align with your requirements. Building a strong rapport and trust with your chosen virtual assistant is our priority.",
  },
  {
    img: "/s4.jpg",
    title: "03. Seamless Business Collaboration",
    description:
      "Once you've partnered with your virtual assistant, they will immerse themselves in your business, learning your work schedule, understanding your workload, and mastering the tools essential for the job. We're here to make your virtual collaboration effortless and productive from day one.",
  },
];

const ReadyToHire = () => {
  return (
    <div className="max-w-[1280px] mb-[56px] xl:px-0 lg:px-[85px] md:px-[65px] px-[32px] flex-col mx-auto w-[100%] flex justify-center items-center">
      <h2 className="font-secularOne md:text-[32px] text-[24px] my-[56px] md:text-left text-center">
        Ready To Hire An Experienced Virtual Assistants?
      </h2>

      <div className="flex w-full flex-col justify-center items-center md:gap-[160px] gap-[20px]">
        {data.map((item, index) => (
          <div key={index} className="flex w-full">
            <div className="relative w-full flex md:flex-row flex-col">
              <div
                className="relative xl:w-[831px] lg:w-[640px] md:w-[540px] xl:h-[465px] lg:h-[400px] md:h-[340px] md:ml-auto md:top-0 md:right-0"
                //   style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <Image src={item.img} alt={item.title} fill objectFit="cover" />
              </div>
              <div className="md:absolute flex flex-col md:gap-[18px] gap-[12px] lg:p-[44px] md:p-[24px] p-[16px] md:bottom-[-100px] md:left-0 bg-[#ECECEC] max-w-[710px] lg:w-[710px] md:w-[510px]">
                <h3 className="text-[24px] font-secularOne">{item.title}</h3>
                <p className="">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/"
        className="transition-bg bg-lightBlue hover:bg-darkBlue text-white px-[28px] rounded-sm py-[9px] md:mt-[160px] mt-[20px] duration-300 font-secularOne lg:text-[24px]"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default ReadyToHire;

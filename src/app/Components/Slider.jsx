"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/css/navigation';
// import './styles.module.css'

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    img: "/s1.jpg",
    title:
      "Unlock More Time in Your Day with Our Business Consultancy & Virtual Assistant Services! Let Us Handle the Tasks, While You Focus on What Matters.",
  },
  {
    img: "/s2.jpg",
    title:
      "Work-life balance can be a reality! Our virtual assistants help you regain precious moments with your loved ones.",
  },
  {
    img: "/s33.jpg",
    title:
      "Wave Goodbye to Tedious Administrative Tasks. We Handle everything from Key Accounts Management, Managing CRM Applications, Data Entry to Calendar Management.",
  },
  {
    img: "/s4.jpg",
    title:
      "Project Professionalism at Every Turn with Our service.  Impress Clients with Flawless Execution.",
  },
  {
    img: "/s5.jpg",
    title:
      "Delegate Tasks with Ease to Our Expert Virtual Assistants. Experience Seamless Support and Streamlined Workflows.",
  },
];

const Slider = () => {
  return (
    <div className="relative mt-[80px] w-full xl:h-[600px] md:h-[550px] h-[500px] bg-slate-200">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper w-full h-full flex absolute"
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full flex items-center justify-center"
          >
            <div className="w-full z-20 h-full bg-black/70 flex absolute"></div>
            <div className="md:w-[500px] w-[350px] md:h-[500px] h-[350px] absolute flex rounded-full bg-lightBlue z-10 mt-[60px] ml-[45px] blur-[150px]"></div>
            <div className="z-30 absolute md:block flex-col flex mt-[164px] xl:ml-[121px] lg:ml-[85px] md:ml-[65px] justify-center w-full items-center">
              <p className="text-white mb-[50px] lg:text-[24px] md:text-[20px] text-[16px] font-secularOne xl:w-[445px] md:w-[400px] sm:w-[320px] w-[280px] md:text-left text-center">
                {item.title}
              </p>
              <Link
                className="bg-lightBlue md:text-[24px] font-secularOne mx-auto transition-bg hover:bg-transparent hover:border-[4px] hover:border-lightBlue hover:text-lightBlue duration-300 ease-in text-white md:px-[32px] md:py-[12px] px-[14px] py-[7px]"
                href="/contact-us"
              >
                Contact Us
              </Link>
            </div>
            <Image
              priority
              src={item.img}
              alt="slider"
              layout="fill"
              objectFit="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
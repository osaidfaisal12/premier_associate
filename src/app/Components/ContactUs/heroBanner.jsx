"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";


const HeroBanner = () => {
  return (
    <div className="relative mt-[80px] w-full xl:h-[600px] md:h-[550px] h-[500px] bg-slate-200">
      <div className="w-full h-full absolute z-10 bg-black/70 "></div>
      <Image src='/s1.jpg' priority style={{objectFit: 'cover'}} alt="contact us banner" fill />
        <div className="absolute text-white flex flex-col z-20 md:max-w-[460px] w-full xl:ml-[122px] lg:ml-[85px] md:ml-[65px] md:text-left text-center gap-[15px] h-full items-center justify-center">
        <h2 className="font-secularOne md:text-[56px] text-[32px] md:max-w-[460px] max-w-[300px] text-white leading-[106%]">For Busy Business Owners</h2>
        <p className="font-poppins  md:max-w-[460px] text-white  max-w-[300px]">We are the team behind your business success. Our top-notch virtual assistants are ready to work with you anytime!</p>
        </div>
    </div>
  );
};

export default HeroBanner;

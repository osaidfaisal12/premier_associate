"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const [showServices, setShowServices] = React.useState(false);

  return (
    <div className="h-[80px] font-poppins fixed w-full bg-white/95 z-50 flex justify-between items-center xl:px-[120px] lg:px-[80px] md:px-[60px] px-[32px]">
      
      {show === false ? (
        <Link href="/">
        <Image
          alt="premier associate logo"
          width={160}
          height={100}
          src="/web.png"
          priority
        /></Link>
      ) : null}
      <ul className="md:flex self-stretch hidden justify-center items-center xl:gap-[40px] lg:gap-[32px] md:gap-[20px] font-poppins text-[16px]">
        <li className="hover:text-lightBlue duration-300 p-2">
          <Link href="/">Home</Link>
        </li>
        <li onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)} className=" flex self-stretch justify-center items-center gap-2">
        <button
          className="gap-1 p-2 flex justify-center items-center"
          >
            Services
            <IoIosArrowDown className="inline" />
          </button>
          {/* Services dropdown */}
          {showServices && (
            <ul className="absolute mt-2 top-[72px] bg-white xl:right-[370px] lg:right-[320px] right-[260px] flex flex-col border-[1px] border-black">
              {/* Add your service items here */}
              <li className="hover:bg-lightBlue  transition-bg duration-300 ease-in-out hover:text-white pl-4 pr-12 py-4">
                <Link className="" href="/services/virtual-assistant">Virtual Assistant</Link>
              </li>
              <li className="hover:bg-lightBlue  transition-bg duration-300 ease-in-out hover:text-white pl-4 pr-12 py-4">
                <Link href="/services/key-accounts-management">Key Accounts Management</Link>
              </li>
              <li className="hover:bg-lightBlue  transition-bg duration-300 ease-in-out hover:text-white pl-4 pr-12 py-4">
                <Link href="/services/managing-crm-applications">Managing CRM Applications</Link>
              </li>
              {/* Add more service items as needed */}
            </ul>
          )}
        </li>
        <li className="hover:text-lightBlue p-2 flex duration-300">
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link className="bg-lightBlue transition-bg hover:bg-darkBlue duration-200 ease-in text-white px-[12px] py-[6px]" href="/contact-us">
            Contact Us
          </Link>
        </li>
      </ul>


      {show === false ? (
        <button
          className="flex md:hidden"
          onClick={() => {
            setShow(true);
          }}
        >
          <Image src="/menu.png" alt="open navigation" width={30} height={30} />
        </button>
      ) : (
        <button
          className="flex md:hidden"
          onClick={() => {
            setShow(false);
          }}
        >
          <Image
            className="fixed top-7 left-7 z-50"
            src="/cross.png"
            alt="close navigation"
            width={30}
            height={30}
          />
        </button>
      )}
      {show === true ? (
        <div className="fixed z-50  duration-300 md:hidden w-[80%] py-10 h-[100%] top-0 right-0 bg-lightBlue">
          
          <Image
            alt="premier associate logo"
            width={160}
            height={100}
            className="ml-10"
            src="/webwh.png"
            priority
          />
          <ul className="md:hidden flex flex-col pt-10 items-start font-poppins text-white text-[16px]">
            <li className="px-10 py-[12px] hover:bg-white duration-300 transition-bg ease-linear hover:text-lightBlue self-stretch">
              <Link href="/">Home</Link>
            </li>
            <li className="self-stretch">
              <Link className="px-10 flex py-[12px] hover:bg-white duration-300 transition-bg ease-linear hover:text-lightBlue self-stretch" href="/">Services</Link>
              <ul className="">
                <li className="px-16 py-[12px] hover:bg-white duration-300 transition-bg ease-linear hover:text-lightBlue self-stretch">
              <Link href="/services/virtual-assistant">
                  <IoIosArrowForward className="inline" />
                  Virtual Assistant
                </Link>
                </li>
                <li className="px-16 py-[12px] hover:bg-white duration-300 transition-bg ease-linear hover:text-lightBlue self-stretch">
                <Link href='/services/key-accounts-management'>                  
                  <IoIosArrowForward className="inline" />
                  Key Accounts Management
                </Link>
                </li>
                <li className="px-16 py-[12px] hover:bg-white duration-300 transition-bg ease-linear hover:text-lightBlue self-stretch">
                <Link href='/services/managing-crm-applications'>
                  <IoIosArrowForward className="inline" />
                  Managing CRM Applications
                </Link>
                </li>
              </ul>
            </li>
            <li className="px-10 py-[12px] hover:bg-white duration-300 transition-bg ease-linear hover:text-lightBlue self-stretch">
              <Link href="/about">About</Link>
            </li>
            <li className="px-10 py-[12px] hover:bg-white duration-300 transition-bg ease-linear hover:text-lightBlue self-stretch">
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;

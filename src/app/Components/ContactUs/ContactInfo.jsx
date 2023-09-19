import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactInfo = ({title, bgcolor}) => {
  return (
    <div style={{backgroundColor: bgcolor}} className="xl:px-[123px] lg:px-[85px] md:px-[65px] px-[34px] py-[56px] flex-col mx-auto w-[100%] flex">
      <div className="flex flex-col gap-[31px]">
      <h3 className="font-secularOne text-[24px]">{title}</h3>

      <div className="flex lg:flex-row flex-col xl:gap-[52px] md:gap-[40px] gap-[20px]">
        {/* <Image src="/boy1.jpg" style={{objectFit:"contain"}} alt="contact us pic" width={400} height={400} /> */}
        <div className="flex flex-col md:gap-[28px] gap-[16px]">
          <p className="md:text-[20px] text-[18px] font-secularOne">Syed Muddassir Jawed</p>
          <div className="flex flex-col lg:gap-[14px] gap-[16px]">
            <div className="md:text-[16px] text-[14px] font-poppins flex flex-col md:gap-[14px] gap-[16px]">
              <p>Joint Masters in Marketing & Management - Middlesex University London - United Kingdom</p>
              <p>B.S in Computer Engineering- Sir Syed University of Engineering & Technology, Karachi - Pakistan</p>
              <p>Premier Associates</p>
              <p><span className="font-secularOne">Email:</span> muddassir@premierassociates.co</p>
            </div>
            <div className="md:text-[16px] text-[14px] font-poppins flex flex-col md:gap-[14px] gap-[16px]">
              {/* <p><span className="font-secularOne">Cell:</span> +92-333-026-0091</p>
              <p><span className="font-secularOne">WhatsApp:</span> +92-333-026-0091</p> */}
              <Link href='https://api.whatsapp.com/send?phone=923330260091' target="_blank"><Image priority src='/whatsapp.png' alt='Whatsapp icon' width={50} height={50} /></Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactInfo;

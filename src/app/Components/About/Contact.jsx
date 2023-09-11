import Image from "next/image";
import React from "react";

const Contact = ({title}) => {
  return (
    <div className=" xl:px-[123px] lg:px-[85px] md:px-[65px] px-[34px] py-[56px] flex-col mx-auto w-[100%] flex">
      <div className="flex flex-col gap-[31px]">
      <h3 className="font-secularOne text-[24px]">{title}</h3>

      <div className="flex md:flex-row flex-col xl:gap-[52px] md:gap-[40px] gap-[20px]">
        <Image src="/boy1.jpg" style={{objectFit:"cover"}} alt="contact us pic" width={132} height={132} />
        <div className="flex flex-col md:gap-[28px] gap-[16px]">
          <p className="text-[20px] font-secularOne">Syed Muddassir Jawed</p>
          <div className="flex lg:flex-row flex-col xl:gap-[83px] lg:gap-[50px] gap-[7px]">
            <div className="text-[16px] font-poppins flex flex-col gap-[7px]">
              <p>Partner Premier Associates</p>
              <p>Email: muddassir@premierassociates.co</p>
            </div>
            <div className="text-[16px] font-poppins flex flex-col gap-[7px]">
              <p>Cell: +92-333-026-0091</p>
              <p>WhatsApp: +92-333-026-0091</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;

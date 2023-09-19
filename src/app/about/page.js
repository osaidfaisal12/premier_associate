import React from "react";
import Navbar from "../Components/Navbar";
import AboutBanner from "../Components/About/AboutBanner";
import Quote from "../Components/About/Quote";
import AboutContent from "../Components/About/AboutContent";
import OurMission from "../Components/About/OurMission";
import FollowUs from "../Components/FollowUs";
import Footer from "../Components/Footer";
import Powered from "../Components/Powered";
import ContactInfo from "../Components/ContactUs/ContactInfo";

export const metadata = {
  title: "About Us | Business Consulting and Services | Premier Associates",
  description: "About Premier Associates | Business Consulting and Services",
};

const page = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <AboutBanner title="About Premier Associates" img="s2" />
      <Quote quote="Unleash Your Potential with Our Business Consultancy & Virtual Assistant Services" />
      <AboutContent />
      <OurMission />
      {/* <Contact title='Contact Us' bgcolor='white' /> */}
      <ContactInfo title="Contact Information" bgcolor="#ECECEC" />
      <FollowUs />
      <Footer />
      <Powered />
    </div>
  );
};

export default page;

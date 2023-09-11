import React from 'react'
import Navbar from '../Components/Navbar'
import AboutBanner from '../Components/About/AboutBanner'
import Quote from '../Components/About/Quote'
import AboutContent from '../Components/About/AboutContent'
import OurMission from '../Components/About/OurMission'
import Contact from '../Components/About/Contact'
import FollowUs from '../Components/FollowUs'
import Footer from '../Components/Footer'
import Powered from '../Components/Powered'

export const metadata = {
    title: 'Premier Associates | About Us | Business Consulting and Services',
    description: 'About Premier Associates | Business Consulting and Services',
}
  

const page = () => {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <AboutBanner />
        <Quote />
        <AboutContent />
        <OurMission />
        <Contact title='Contact Us' />
        <FollowUs />
        <Footer />
        <Powered />
    </div>
  )
}

export default page
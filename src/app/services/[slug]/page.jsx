import AboutBanner from '@/app/Components/About/AboutBanner'
import Contact from '@/app/Components/About/Contact'
import Quote from '@/app/Components/About/Quote'
import FollowUs from '@/app/Components/FollowUs'
import Footer from '@/app/Components/Footer'
import Navbar from '@/app/Components/Navbar'
import Powered from '@/app/Components/Powered'
import SubHead from '@/app/Components/SubHead'
import React from 'react'

const services = [
    {
        slug: 'virtual-assistant',
        name: 'Virtual Assistant',
        desc: "Welcome to Premier Associates, your trusted partner for a comprehensive suite of services tailored to individuals, entrepreneurs, and businesses. Our solutions are meticulously crafted to enhance efficiency, save valuable time, and streamline your operations. Explore the wide range of services our expert teams provide:",
        subHead : [
            {
                title: 'Administrative Support',
                desc: 'Efficiently manage your administrative tasks to free up your time for core business activities.'
            },
            {
                title: 'Virtual Office Solutions',
                desc: 'Elevate your business image with our virtual office services, including professional address and mail handling.'
            },
            {
                title: 'Customer Support Excellence',
                desc: 'Ensure exceptional customer experiences through our dedicated customer support solutions.'
            },
            {
                title: 'Research and Market Analysis',
                desc: 'Gain valuable insights with our research services, covering market research, competitor analysis, and data collection.'
            },
            {
                title: 'Cold Calling Expertise',
                desc: 'Expand your reach and generate leads through our cold calling services, designed to drive growth.'
            },
            {
                title: 'Data Entry and Analysis',
                desc: 'Accurate data entry and insightful data analysis to inform your business decisions.'
            },
            {
                title: 'Customized Report Generation',
                desc: 'Create detailed reports that provide valuable insights into your business&rsquo;s performance and trends.'
            },
            {
                title: 'Business Development Strategies',
                desc: 'Collaborate with our experts to devise effective business development plans and strategies.'
            },
            {
                title: 'Project Management Mastery',
                desc: 'Efficiently oversee projects with our skilled project managers, ensuring on-time delivery and successful outcomes.'
            },
            {
                title: 'Task and Project Coordination',
                desc: 'Seamlessly coordinate tasks and projects to ensure smooth workflows and project success.'
            },
            {
                title: 'Strategic Email Marketing',
                desc: 'Enhance your digital presence and engage your audience through strategic email marketing campaigns.'
            }
        ],
        endText: "At Premier Associates, we are dedicated to helping you optimize your operations, boost productivity, and achieve your business goals. Contact us today to explore how our tailored services can elevate your business."
    },
    {
        slug: 'key-accounts-management',
        name: 'Key Accounts Management',
        desc: "Premier Associates specializes in helping businesses effectively manage and nurture their key or strategic accounts. These are typically high-value clients or customers that contribute significantly to a company's revenue and long-term success. The services offered by our firm include:",
        subHead : [
            {
                title: "Account Strategy Development",
                desc: "Creating a customized strategy for each key account, aligning it with the client's business objectives and goals."
            },
            {
                title: "Account Planning",
                desc: "Developing detailed account plans to outline goals, actions, and timelines for each key account."
            },
            {
                title: "Customer Relationship Management",
                desc: "Building and maintaining strong relationships with key account contacts to foster trust and loyalty."
            },
            {
                title: "Account Analysis",
                desc: "Conducting in-depth analysis of key accounts to identify opportunities for growth and areas of improvement."
            },
            {
                title: "Customer Needs Assessment",
                desc: "Identifying the specific needs and challenges of key accounts and proposing solutions to address them."
            },
            {
                title: "Cross-Selling and Upselling",
                desc: "Identifying opportunities to introduce additional products or services to key accounts, thereby increasing revenue."
            },
            {
                title: "Account Retention",
                desc: "Implementing strategies to reduce churn and ensure the long-term retention of key accounts."
            },
            {
                title: "Account Expansion",
                desc: "Identifying opportunities to expand the scope of business with key accounts, such as entering new markets or offering additional services."
            },
            {
                title: "Regular Reporting",
                desc: "Providing regular reports and updates to clients on the status of their key accounts, including performance metrics and KPIs."
            },
            {
                title: "Customer Satisfaction Surveys",
                desc: "Conducting surveys and feedback sessions to gauge customer satisfaction and gather insights for improvement."
            },
            {
                title: "Conflict Resolution",
                desc: "Handling any issues or disputes that may arise with key accounts in a proactive and diplomatic manner."
            },
            {
                title: "Training and Development",
                desc: "Offering training programs for client teams on key account management best practices."
            },
            {
                title: "Market Research",
                desc: "Conducting market research to identify trends and opportunities that may impact key accounts."
            },{
                title: "Competitor Analysis",
                desc: "Analyzing the competitive landscape to help key accounts stay ahead of the competition."
            },
            {
                title: "Contractual Support",
                desc: "Assisting with contract negotiations, renewals, and compliance to ensure smooth business operations."
            },
            {
                title: "Executive Engagement",
                desc: "Facilitating executive-level meetings and interactions between the client's leadership team and key account stakeholders."
            }
        ],
        endText: "These services are designed to help businesses maximize the value they derive from their key accounts, enhance customer satisfaction, and drive long-term growth and profitability."
    },
    {
        slug: 'managing-crm-applications',
        name: 'Managing CRM Applications',
        desc: "Managing CRM applications for a firm is crucial for effectively maintaining and leveraging customer data, enhancing relationships, and driving business growth. At Premier Associates we managed the CRM Application on clients behalf. Here are key aspects of managing CRM applications for a firm:",
        subHead : [
            {
                title: "Sales Strategy:",
                desc: "Use CRM data to inform sales strategies, identify leads, and prioritize opportunities."
            },
            {
                title: "Lead Management",
                desc: "Manage leads within the CRM, track interactions, and nurture leads through the sales pipeline."
            },
            {
                title: 'Customer Communication',
                desc: "Communicate with prospects and customers via email, phone calls, or other channels through the CRM."
            },
            {
                title: "Reporting and Forecasting",
                desc: "Provide sales forecasts and performance reports based on CRM data."   
            },
            {
                title: "Data Management",
                desc: "Maintain accurate and up-to-date customer data within the CRM."
            },
            {
                title: "User Training",
                desc: "Provide comprehensive training to employees who will use the CRM. Ensure they understand how to input data, access information, and use the CRM's features effectively."
            },
            {
                title: "Reporting and Analytics",
                desc: "Utilize the CRM's reporting and analytics capabilities to gain insights into customer behavior, sales performance, and other key metrics. Create custom reports and dashboards as needed."
            },
        ],
        endText: "Managing CRM applications effectively requires a combination of technical expertise, user engagement, and a focus on aligning CRM usage with the firm's overall business objectives. At Premier Associates we regularly review and refine CRM management practices that can lead to improved customer relationships and increased operational efficiency."
    }
]


export async function generateMetadata({ params, searchParams }, parent){
    const currentService = services.find(service => service.slug === params.slug)
      
    return {
      title: `Services | ${currentService.name} | Premier Associates`,
      description: `${currentService.desc} | Business Consulting and Services | Premier Associates`,
    }
  }
  

const page = ({params}) => {
    const currentService = services.find(service => service.slug === params.slug)
    console.log(currentService)

  return (
    <div className='flex flex-col'>
    <Navbar />
    <AboutBanner title={currentService.name} img='s4' />
    <Quote quote='Work-life balance can be a reality! Our virtual assistants help you regain precious moments with your loved ones' />
    <div className='flex flex-col justify-center items-center'>
        <p className=' xl:max-w-[960px] lg:max-w-[860px] md:max-w-[640px] w-full md:px-0 px-[18px] text-center pt-[56px] font-poppins leading-[200%]'>{currentService.desc}</p>
        <SubHead subHead={currentService.subHead} />
        <p className=' xl:max-w-[960px] lg:max-w-[860px] md:max-w-[640px] w-full md:px-0 px-[18px] text-center pb-[56px] font-poppins leading-[200%]'>{currentService.endText}</p>
    </div>
    <Contact title='Contact Details' bgcolor = '#ECECEC' />
    <FollowUs />
    <Footer />
    <Powered />
</div>
  )
}

export default page
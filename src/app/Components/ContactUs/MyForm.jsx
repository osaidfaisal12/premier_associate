'use client'

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  Name: Yup.string().required('Full Name is required'),
  Email: Yup.string().email('Invalid Email').required('Email is required'),
  Number: Yup.string().required('Phone Number is required'),
  Country: Yup.string().required('Country is required'),
  Message: Yup.string().required('Message is required'),
});



const MyForm = () => {
  const [isLoading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState('')

  const handleSubmit = async({ Email, Message, Name, Number, Country }) => {
    setLoading(true)
    setMessage('')
    const res = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Email, Message, Name, Number, Country })
    })
    if (res.status === 200) {
      const data = await res.json()
      setMessage(data.message)
      setLoading(false)
    } else {
      setMessage('Something went wrong')
      setLoading(false)
    }
  };

  return (
    <div className='mt-[32px]'>
      <Formik
        initialValues={{
          Name: '',
          Email: '',
          Number: '',
          Country: '',
          Message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className='flex flex-wrap md:gap-[32px] gap-[24px]'>
          <div className='flex w-full md:gap-[32px] gap-[24px] md:flex-row flex-col'>
          <div className='flex w-full flex-col'>
            {/* <label htmlFor="Name">Full Name</label> */}
            <Field className="bg-[#ECECEC] border-[1px] w-full border-black py-4 px-6" type="text" id="Name" name="Name" placeholder="Full Name" />
            <ErrorMessage name="Name" component="div" className="error text-red-600" />
          </div>

          <div className='flex w-full  flex-col'>
            {/* <label htmlFor="Email">Email</label> */}
            <Field type="Email" id="Email" name="Email" className="bg-[#ECECEC] w-full border-[1px] border-black py-4 px-6" placeholder="Email Address"/>
            <ErrorMessage name="Email" component="div" className="error text-red-600" />
          </div>
          </div>

          <div className='flex w-full md:gap-[32px] gap-[24px] md:flex-row flex-col'>

          <div className='flex w-full flex-col'>
            {/* <label htmlFor="Number">Phone Number</label> */}
            <Field type="text" id="Number" name="Number" className="bg-[#ECECEC] w-full border-[1px] border-black py-4 px-6" placeholder="Contact number"/>
            <ErrorMessage name="Number" component="div" className="error text-red-600" />
          </div>

          <div className='flex w-full flex-col'>
            {/* <label htmlFor="Country">Country</label> */}
            <Field type="text" id="Country" name="Country" className="bg-[#ECECEC] w-full border-[1px] border-black py-4 px-6" placeholder="Country" />
            <ErrorMessage name="Country" component="div" className="error text-red-600" />
          </div>
          </div>

          <div className='w-full flex-col'>
            {/* <label htmlFor="Message">Message</label> */}
            <Field rows={6} as="textarea" id="Message" name="Message" className="bg-[#ECECEC] w-full border-[1px] border-black py-4 px-6" placeholder="Enter Message" />
            <ErrorMessage name="Message" component="div" className="error text-red-600" />
            {
              message ? <p className='text-green-500'>{message}</p> : null
            }
          </div>

          <div className='w-full flex justify-end'>
          {!isLoading ? <button type="submit" className='py-[9px] hover:bg-gradient-to-tr hover:from-darkBlue hover:to-darkBlue duration-300 rounded-md md:text-[20px] font-secularOne px-[18px] text-white bg-gradient-to-tr from-lightBlue to-darkBlue'>Send Inquiry</button> : null}
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MyForm;


import nodemailer from "nodemailer";
import { NextResponse } from 'next/server'

export async function POST (request, res) {
  const { Email, Message, Name, Number, Country } = await request.json();

  const transporter = nodemailer.createTransport({
    host: `${process.env.HOST}`,
    port: 587,
    auth: {
        user: `${process.env.USER}`,
        pass: `${process.env.PASS}`
    }
});
  
  let info = await transporter.sendMail({
    from: `"${process.env.USER}" <${process.env.USER}>`,
    to: `${process.env.USER}`,
    subject: `Message From: ${Name}`, 
    text: Message,
    html: `
    <p>${Message}</p>
    <p>From: ${Name}</p>
    <p>Email: ${Email}</p>
    <p>Country: ${Country}</p>
    <p>Number: ${Number}</p>
    `,
  });

  if (info) {
    return NextResponse.json({ message: "Email sent success" }, {status: 200})
  }
  else {
    return NextResponse.json({ message: 'Email sent failed' }, {status: 500})
  }

}
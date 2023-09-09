import './globals.css'
import { Inter, Secular_One, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const secularOne = Secular_One({  weight: ['400'], subsets: ['latin'], variable: "--Secular-one" })
const poppins = Poppins({  weight: ['400', '600', '700'], subsets: ['latin'], variable: "--Poppins" })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${secularOne.variable} ${poppins.variable}`}>{children}</body>
    </html>
  )
}

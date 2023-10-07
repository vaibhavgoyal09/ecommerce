import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google';
import { Providers } from './providers';


const fonts = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecobazar',
  description: 'Fresh & Healthy Organic Food',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body className={`${fonts.className} select-none`}>
        {/* <Providers> */}
          {children}
        {/* </Providers> */}
      </body>
    </html>
  )
}

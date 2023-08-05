'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/app/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

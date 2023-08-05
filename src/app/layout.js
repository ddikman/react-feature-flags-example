'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/app/footer'

import { FlagProvider } from '@unleash/proxy-client-react';

const config = {
  url: 'http://localhost:4242/api/frontend',
  clientKey: '*:development.32333e8db319d00cfb3a8e766457a11af4a0d4249145a9291e852657', // update this with an API key you have created
  refreshInterval: 15,
  appName: 'default'

};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FlagProvider config={config}>
          <main>
            {children}
            <Footer />
          </main>
        </FlagProvider>
      </body>
    </html>
  )
}

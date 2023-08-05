'use client'

import './globals.css'
import { Inter } from 'next/font/google'

import { FlagProvider } from '@unleash/proxy-client-react';

const config = {
  url: 'http://localhost:4242/api/frontend',
  clientKey: '*:development.32333e8db319d00cfb3a8e766457a11af4a0d4249145a9291e852657', // update this with an API key you have created
  refreshInterval: 15,
  appName: 'default'

};

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'React Feature Flag Example',
//   description: 'Example to showcase feature flag usage in React',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {
          // Added this FlagProvider
        }
        <FlagProvider config={config}>
          <main>
            {children}

            <footer>
              <hr className='my-4' />
              <div className='text-sm flex justify-between'>
                <span>Made by <a target="_blank" href="https://greycastle.se">David</a></span>
                <a href="https://github.com/ddikman/react-feature-flags-example" target='_blank'>Fork this (GitHub)</a>
              </div>
            </footer>
          </main>
        </FlagProvider>
      </body>
    </html>
  )
}

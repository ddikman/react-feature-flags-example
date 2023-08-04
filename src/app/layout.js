import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'React Feature Flag Example',
  description: 'Example to showcase feature flag usage in React',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}

          <footer>
            <hr className='my-4' />
            <div className='text-sm flex justify-between'>
              <span>Made by <a href="https://greycastle.se">David</a></span>
              <a href="...">Fork this (GitHub)</a>
            </div>
          </footer>
        </main>
      </body>
    </html>
  )
}

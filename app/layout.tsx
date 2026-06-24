import './global.css'
import type { Metadata } from 'next'
import { Castoro } from 'next/font/google'
import { Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const castoro = Castoro({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-castoro',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  // ... keep everything the same
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        castoro.variable,
        outfit.variable
      )}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </head>
      <body className="antialiased max-w-full mx-4 lg:mx-20" suppressHydrationWarning>
        <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
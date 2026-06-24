import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Castoro } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const castoro = Castoro({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-castoro',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Jamie Luong | Frontend Engineer',
    template: '%s | Jamie Luong | Frontend Engineer',
  },
  description: 'Frontend engineer with 5+ years building performant web applications.',
  openGraph: {
    title: 'Jamie Luong | Frontend Engineer',
    description: 'Frontend engineer with 5+ years building performant web applications.',
    url: baseUrl,
    siteName: 'Jamie Luong',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        GeistSans.variable,
        GeistMono.variable,
        castoro.variable
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
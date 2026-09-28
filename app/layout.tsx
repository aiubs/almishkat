import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Alexandria, Noto_Kufi_Arabic } from 'next/font/google'
import './globals.css'

const alexandria = Alexandria({
  subsets: ['arabic', 'latin'],
  variable: '--font-alexandria',
  display: 'swap',
})

const kufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-kufi',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'المشكاة ستور | التقنية الأقرب إليك',
  description:
    'أجهزة أصلية مختارة بعناية للعمل، الدراسة واللعب — لابتوبات، كاميرات، طابعات وشاشات بضمان حقيقي وتوصيل لكل محافظات العراق.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#092f3c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`light ${alexandria.variable} ${kufi.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

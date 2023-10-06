import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'

const font = Noto_Sans_JP({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'HTML Generator',
  description: 'learn HTML and generate HTML file',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ja">
      <body className={`${font.className}`}>
        {children}
      </body>
    </html>
  )
}

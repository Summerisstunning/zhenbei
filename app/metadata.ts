import { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export const metadata: Metadata = {
  title: '大象真北',
  description: '大象真北课程学习平台',
  icons: {
    icon: '/favicon.ico',
  },
}

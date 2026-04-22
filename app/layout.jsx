import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Muhammed Eraslan | Full Stack Developer',
  description: 'Muhammed Eraslan - Next.js, React Native ve Cloud teknolojileri üzerine uzmanlaşmış Full Stack Developer portfolyosu. Modern web ve mobil çözümler.',
  keywords: ['Muhammed Eraslan', 'Full Stack Developer', 'Next.js', 'React Native', 'TypeScript', 'Software Engineer', 'Yazılım Mühendisi', 'Portfolyo'],
  authors: [{ name: 'Muhammed Eraslan' }],
  creator: 'Muhammed Eraslan',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Muhammed Eraslan | Full Stack Developer',
    description: 'Modern web ve mobil mimariler üzerine odaklanmış bir geliştiriciyim. Projelerimi ve deneyimlerimi inceleyin.',
    url: 'https://muhammederaslan.com.tr', // Assuming this is the URL, user can update
    siteName: 'Muhammed Eraslan Portfolio',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

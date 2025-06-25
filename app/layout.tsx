import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Colônia de Férias | Sa Brincante',
  description: 'Diversão garantida nas melhores escolas da Grande Vitória! Inscrições abertas para a Colônia de Férias Sa Brincante.',
  generator: 'Next.js',
  applicationName: 'Colônia de Férias Sa Brincante',
  keywords: ['colônia de férias', 'Sa Brincante', 'Vitória', 'atividades infantis', 'escola'],
  authors: [{ name: 'Sa Brincante' }],
  icons: {
    icon: '/images/LogoBranca.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

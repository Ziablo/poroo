import type { Metadata } from 'next'
import { inter, poppins } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'OpenFront Tournaments',
  description: 'Suivez tous les résultats des tournois OpenFront en temps réel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
} 
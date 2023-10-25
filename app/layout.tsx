import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import Modal from './components/modals/Modal'

export const metadata: Metadata = {
  title: 'PropiedadesOnline',
  description: 'Propiedades online',
}

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal isOpen title='Hello World' actionLabel='Submit' />
        <Navbar />
        {children}
      </body>
    </html>
  )
}

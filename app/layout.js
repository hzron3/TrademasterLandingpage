import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'

export const metadata = {
  title: 'Trademaster Insurance Brokers Limited',
  description: 'Expert insurance solutions tailored to your needs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='font-sans text-gray-800 bg-white antialiased'>
        <Navbar />
        <main className='pt-16'>{children}</main>{' '}
        {/* Padding-top to account for fixed navbar */}
        <Footer />
      </body>
    </html>
  )
}

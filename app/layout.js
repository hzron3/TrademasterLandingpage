import './globals.css'

export const metadata = {
  title: 'Trademaster Insurance Brokers Limited',
  description: 'Expert insurance solutions tailored to your needs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='font-sans text-gray-800 bg-white antialiased'>
        <main>{children}</main>{' '}
      </body>
    </html>
  )
}

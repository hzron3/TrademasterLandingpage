const Footer = () => {
  return (
    <footer className='bg-sky-900 text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div>
            <h3 className='text-xl font-semibold mb-4 tracking-tight'>
              Trademaster Insurance Brokers
            </h3>
            <p className='text-gray-300 text-sm leading-relaxed'>
              We Understand Risk.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-xl font-semibold mb-4 tracking-tight'>
              Contact Us
            </h3>
            <p className='text-gray-300 text-sm'>Email: </p>
            <p className='text-gray-300 text-sm'>Phone: </p>
            <p className='text-gray-300 text-sm'>Address</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-semibold mb-4 tracking-tight'>
              Quick Links
            </h3>
            <a
              href='#services'
              className='block text-gray-300 hover:text-white text-sm mb-2 transition-colors duration-200'
            >
              Services
            </a>
            <a
              href='#about'
              className='block text-gray-300 hover:text-white text-sm mb-2 transition-colors duration-200'
            >
              About Us
            </a>
            <a
              href='#contact'
              className='block text-gray-300 hover:text-white text-sm transition-colors duration-200'
            >
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div>
            <h3 className='text-xl font-semibold mb-4 tracking-tight'>
              Follow Us
            </h3>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-300 hover:text-white transition-colors duration-200'
              >
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.845c0-2.522 1.494-3.915 3.788-3.915 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' />
                </svg>
              </a>
              <a
                href='#'
                className='text-gray-300 hover:text-white transition-colors duration-200'
              >
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' />
                </svg>
              </a>
              <a
                href='#'
                className='text-gray-300 hover:text-white transition-colors duration-200'
              >
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-9.66 5.35a3.32 3.32 0 100 6.64 3.32 3.32 0 000-6.64zM19 8a1 1 0 100-2 1 1 0 000 2zm-1.66-2.34h-1.5a4.82 4.82 0 00-4.5-3.16 4.82 4.82 0 00-4.5 3.16H5.66A1.34 1.34 0 004.32 5v13.32a1.34 1.34 0 001.34 1.34h13.32a1.34 1.34 0 001.34-1.34V5a1.34 1.34 0 00-1.34-1.34z' />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className='mt-10 pt-6 border-t border-gray-700/50 text-center text-gray-400 text-sm'>
          <p>
            © {new Date().getFullYear()} Trademaster Insurance Brokers Limited.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

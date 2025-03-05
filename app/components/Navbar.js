'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300  ${
        isScrolled ? 'bg-white shadow-md border-b border-gray-100' : ''
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
        {/* Logo */}
        <Link href='/' className='flex items-center space-x-2'>
          <Image
            src='/logo.jpg'
            alt='Logo'
            width={200}
            height={200}
            objectFit='cover'
            className=''
          />
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center space-x-10'>
          <Link
            href='#home'
            className='text-gray-700 hover:text-sky-600 text-sm font-medium tracking-wide uppercase transition-colors duration-200'
          >
            Home
          </Link>
          <Link
            href='#about'
            className='text-gray-700 hover:text-sky-600 text-sm font-medium tracking-wide uppercase transition-colors duration-200'
          >
            About
          </Link>
          <Link
            href='#services'
            className='text-gray-700 hover:text-sky-600 text-sm font-medium tracking-wide uppercase transition-colors duration-200'
          >
            Services
          </Link>
          <Link
            href='#contact'
            className='text-gray-700 hover:text-sky-600 text-sm font-medium tracking-wide uppercase transition-colors duration-200'
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500'
          aria-label='Toggle mobile menu'
        >
          <svg
            className='h-6 w-6 text-gray-700'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d={
                isMobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16m-7 6h7'
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-white border-t border-gray-100 shadow-lg'>
          <div className='px-4 py-6 space-y-4'>
            <Link
              href='#home'
              className='block py-2 px-4 text-gray-700 hover:text-sky-600 hover:bg-gray-50 rounded-md text-base font-medium transition-colors duration-200'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href='#about'
              className='block py-2 px-4 text-gray-700 hover:text-sky-600 hover:bg-gray-50 rounded-md text-base font-medium transition-colors duration-200'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href='#services'
              className='block py-2 px-4 text-gray-700 hover:text-sky-600 hover:bg-gray-50 rounded-md text-base font-medium transition-colors duration-200'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href='#contact'
              className='block py-2 px-4 text-gray-700 hover:text-sky-600 hover:bg-gray-50 rounded-md text-base font-medium transition-colors duration-200'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

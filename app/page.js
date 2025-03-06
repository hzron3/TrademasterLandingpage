'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <section
        id='home'
        className='relative h-screen flex flex-col items-center justify-center text-white text-center overflow-hidden'
      >
        <Image
          src='/trademaster1.webp'
          alt='Trademaster Insurance Brokers Hero Image'
          fill
          priority
          className='object-cover object-center brightness-75'
          quality={85}
        />

        <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70' />

        <nav className='absolute w-full z-50 bg-transparent top-4 sm:top-6 lg:top-8'>
          <div className='max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-12 sm:h-14 lg:h-16'>
              <Link href='/' className='flex items-center'>
                <Image
                  src='/logo.jpg'
                  alt='Logo'
                  width={350}
                  height={32}
                  className='object-contain hover:opacity-90 transition-opacity duration-200 rounded-lg w-40 sm:w-52 md:w-64 lg:w-80 xl:w-96'
                  priority
                  quality={85}
                />
              </Link>

              <div className='flex items-center'></div>
            </div>
          </div>
        </nav>

        <div className='relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10'>
          <div className='mb-6 sm:mb-8 lg:mb-10'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-xl'>
              Trademaster Insurance <br />
              Brokers
            </h1>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2 sm:mt-3 md:mt-4 font-medium text-gray-100 drop-shadow-lg max-w-3xl mx-auto'>
              Your Trusted Partner in Risk Management and Protection
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto'>
            {[
              {
                title: 'Tailored Solutions',
                desc: 'Customized insurance plans designed for your unique needs.',
              },
              {
                title: 'Risk Expertise',
                desc: 'Proven strategies backed by deep industry knowledge.',
              },
              {
                title: '24/7 Support',
                desc: 'Round-the-clock assistance for your peace of mind.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='bg-white/15 backdrop-blur-lg rounded-xl p-4 sm:p-5 lg:p-6 border border-white/25 hover:bg-white/25 hover:border-white/40 transition-all duration-300 ease-in-out'
              >
                <h3 className='text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 tracking-wide text-'>
                  {item.title}
                </h3>
                <p className='text-xs sm:text-sm md:text-base text-gray-100 leading-relaxed'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

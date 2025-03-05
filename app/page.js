import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Trademaster Insurance Brokers Limited | Expert Insurance Solutions',
  description:
    'Protect your future with Trademaster Insurance Brokers. We understand risk and provide tailored insurance solutions.',
  openGraph: {
    title: 'Trademaster Insurance Brokers Limited',
    description:
      'We Understand Risk - Comprehensive insurance and risk management services.',
    images: ['/hero-background.jpg'],
  },
}

const services = [
  {
    title: 'Risk Management',
    description:
      'Comprehensive risk assessment and mitigation strategies tailored to your business needs.',
    icon: '/icons8-risk-management-68.png',
  },
  {
    title: 'Insurance Solutions',
    description:
      'Customized insurance plans to protect your assets and ensure peace of mind.',
    icon: '/icons8-buildings-insurance-100.png',
  },
  {
    title: 'Claims Support',
    description:
      'Expert guidance through the claims process to maximize your recovery efficiently.',
    icon: '/icons8-24-hours-day-support-100.png',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id='home'
        className='relative min-h-[calc(100vh-64px)] pt-16 flex items-center justify-center text-white text-center overflow-hidden'
      >
        {/* Background Image */}
        <Image
          src='/trademaster.jpg'
          alt='Trademaster Insurance Brokers Hero Image'
          fill
          priority
          className='object-cover object-center brightness-75'
          quality={85}
        />

        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70' />

        {/* Content Container */}
        <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20'>
          {/* Top Section */}
          <div className='mb-10 md:mb-14'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-xl'>
              Trademaster Insurance
            </h1>
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl mt-4 md:mt-6 font-medium text-gray-100 drop-shadow-lg max-w-3xl mx-auto'>
              Your Trusted Partner in Risk Management and Protection
            </p>
          </div>

          {/* Value Propositions */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12'>
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
                className='bg-white/15 backdrop-blur-lg rounded-xl p-6 border border-white/25 hover:bg-white/25 hover:border-white/40 transition-all duration-300 ease-in-out'
              >
                <h3 className='text-lg md:text-xl font-semibold mb-2 tracking-wide text-white'>
                  {item.title}
                </h3>
                <p className='text-sm md:text-base text-gray-100 leading-relaxed'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Call-to-Action Buttons */}
          <div className='flex flex-col sm:flex-row justify-center gap-4 md:gap-6'>
            <Link
              href='#contact'
              className='inline-block bg-sky-600 hover:bg-sky-700 text-white py-3 px-8 md:py-4 md:px-10 rounded-full text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out'
            >
              Get a Quote
            </Link>
            <Link
              href='#services'
              className='inline-block bg-transparent hover:bg-white/20 text-white py-3 px-8 md:py-4 md:px-10 rounded-full text-base md:text-lg font-semibold border border-white/40 hover:border-white/60 hover:shadow-md transition-all duration-300 ease-in-out'
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 tracking-tight'>
            Our Services
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8'>
            {services.map((service, index) => (
              <div
                key={index}
                className='group bg-white p-6 rounded-lg shadow-sm hover:shadow-lg border border-gray-100 transform hover:-translate-y-1 transition-all duration-300 ease-out'
              >
                <div className='relative h-16 w-16 mx-auto mb-6 overflow-hidden rounded-full bg-gray-50 p-2'>
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    fill
                    className='object-contain group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
                <h3 className='text-xl font-semibold mb-3 text-gray-900 group-hover:text-sky-600 transition-colors duration-200'>
                  {service.title}
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

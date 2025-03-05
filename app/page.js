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
        className='relative min-h-screen flex items-center justify-center text-white text-center overflow-hidden'
      >
        {/* Background Image */}
        <Image
          src='/trademaster.jpg'
          alt='Trademaster Insurance Brokers Hero Image'
          fill
          priority
          className='object-cover object-center brightness-75'
          quality={90}
        />

        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/50' />

        {/* Content Container */}
        <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
          {/* Top Section */}
          <div className='mb-12'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight drop-shadow-lg'>
              Trademaster Insurance Brokers
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 font-medium text-gray-100 drop-shadow-md max-w-3xl mx-auto'>
              Your Trusted Partner in Risk Management and Protection
            </p>
          </div>

          {/* Value Propositions */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12'>
            <div className='bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300'>
              <h3 className='text-xl font-semibold mb-2 tracking-wide text-white'>
                Tailored Solutions
              </h3>
              <p className='text-sm text-gray-200 leading-relaxed'>
                Customized insurance plans designed to meet your unique business
                and personal needs.
              </p>
            </div>
            <div className='bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300'>
              <h3 className='text-xl font-semibold mb-2 tracking-wide text-white'>
                Risk Expertise
              </h3>
              <p className='text-sm text-gray-200 leading-relaxed'>
                Comprehensive risk management strategies backed by years of
                industry experience.
              </p>
            </div>
            <div className='bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300'>
              <h3 className='text-xl font-semibold mb-2 tracking-wide text-white'>
                24/7 Support
              </h3>
              <p className='text-sm text-gray-200 leading-relaxed'>
                Dedicated assistance whenever you need it, ensuring peace of
                mind at all times.
              </p>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Link
              href='#contact'
              className='inline-block bg-sky-500 hover:bg-sky-700 text-white py-3.5 px-10 rounded-full text-base sm:text-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out border border-sky-500/40'
            >
              Get a Quote Now
            </Link>
            <Link
              href='#services'
              className='inline-block bg-transparent hover:bg-white/10 text-white py-3.5 px-10 rounded-full text-base sm:text-lg font-semibold border border-white/30 hover:border-white/50 transition-all duration-300 ease-in-out'
            >
              Explore Services
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
                <h3 className='text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-200'>
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

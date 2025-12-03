'use client'

import { motion } from 'framer-motion'
import { Shield, Server, Headphones, Briefcase, GraduationCap, PhoneCall, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      slug: 'cybersecurity-digital-resilience',
      icon: '/icons/cybersecurity-icon.svg',
      fallbackIcon: Shield,
      title: 'Cybersecurity & Digital Resilience',
      description: 'Protect your organization\'s digital environment with advanced cybersecurity and information assurance solutions.',
    },
    {
      slug: 'telecommunications-engineering-network-services',
      icon: '/icons/telecom-icon.svg',
      fallbackIcon: PhoneCall,
      title: 'Telecommunications Engineering & Network Services',
      description: 'Design, deploy, and maintain mission-critical telecom infrastructure for seamless connectivity.',
    },
    {
      slug: 'digital-skills-development-capacity-building',
      icon: '/icons/training-icon.svg',
      fallbackIcon: GraduationCap,
      title: 'Digital Skills Development & Capacity Building',
      description: 'Sierra Leone\'s Digital Skills Champion 2025 - delivering comprehensive certification and training programs.',
    },
    {
      slug: 'customer-experience-call-center-services',
      icon: '/icons/call-center-icon.svg',
      fallbackIcon: Headphones,
      title: 'Customer Experience & Call Center Services',
      description: 'Build and manage high-performance customer-experience operations across multiple channels.',
    },
    {
      slug: 'digital-transformation-enterprise-technology-solutions',
      icon: '/icons/it-consultancy-icon.svg',
      fallbackIcon: Briefcase,
      title: 'Digital Transformation & Enterprise Technology Solutions',
      description: 'Modernize organizational systems through strategic digital transformation and enterprise architecture.',
    },
    {
      slug: 'outsourcing-managed-services',
      icon: '/icons/cloud-icon.svg',
      fallbackIcon: Server,
      title: 'Outsourcing & Managed Services',
      description: 'Scalable operational support with IT and telecom equipment maintenance and managed services.',
    },
  ]

  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({})

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }))
  }

  const handleImageError = (index: number) => {
    // Image failed to load, keep it as false so fallback shows
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-white to-mauve-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to meet your business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.fallbackIcon
            const imageLoaded = loadedImages[index]

            return (
              <Link key={index} href={`/services/${service.slug}`}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer h-full flex flex-col"
                >
                  <div className="w-14 h-14 bg-mauve-light rounded-lg flex items-center justify-center mb-4 relative overflow-hidden p-3">
                    {!imageLoaded && <IconComponent className="text-mauve" size={28} />}
                    <img
                      src={service.icon}
                      alt={service.title}
                      className={`object-contain w-full h-full p-1 ${imageLoaded ? 'block' : 'hidden'}`}
                      onLoad={() => handleImageLoad(index)}
                      onError={() => handleImageError(index)}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center text-mauve font-semibold mt-auto">
                    <span>Read More</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}


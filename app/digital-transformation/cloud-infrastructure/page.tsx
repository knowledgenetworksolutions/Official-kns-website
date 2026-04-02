'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, Cloud, CheckCircle, Target, Server, Database, Mail, Shield
} from 'lucide-react'
import GoBackButton from '@/components/GoBackButton'

export default function CloudInfrastructurePage() {
  const services = [
    {
      title: 'Email Migration',
      description: 'Seamless migration to cloud email platforms.',
      items: [
        'Office 365 migration',
        'Google Workspace migration',
        'Email data migration',
        'User training and support'
      ]
    },
    {
      title: 'Application Migration',
      description: 'Move applications to cloud platforms.',
      items: [
        'Application assessment',
        'Cloud platform selection',
        'Migration planning',
        'Application modernization'
      ]
    },
    {
      title: 'Data Center Migration',
      description: 'Full data center migration to cloud.',
      items: [
        'Infrastructure assessment',
        'Migration strategy',
        'Data migration',
        'Hybrid cloud solutions'
      ]
    },
    {
      title: 'Hybrid Cloud Solutions',
      description: 'Best of both worlds, cloud and on-premise.',
      items: [
        'Hybrid architecture design',
        'Cloud integration',
        'Data synchronization',
        'Unified management'
      ]
    },
  ]

  const benefits = [
    'Reliable and scalable infrastructure',
    'Flexibility and agility',
    'Cost efficiency',
    'Enhanced security',
    'Improved performance',
    'Reduced maintenance burden'
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-navy via-brand-navy to-brand-black overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <GoBackButton className="text-accent-tech hover:text-accent-tech/80" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Cloud & Hybrid Infrastructure Modernisation
            </h1>
            <p className="text-xl md:text-2xl text-accent-tech font-semibold mb-8 max-w-4xl">
              Secure, Scalable Infrastructure for the Modern Organisation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gradient-to-b from-brand-black to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether migrating email, applications, or full data centers, KNS modernises your environment with cloud and hybrid solutions for reliability, flexibility, and efficiency.
              </p>
              <p className="text-lg text-accent-tech leading-relaxed font-semibold">
                Modern infrastructure that scales with your needs and reduces operational overhead.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl border border-accent-tech/30">
                <Image
                  src="https://www.deloitte.com/content/dam/insights/articles/2025/us187942_cir_hybrid-cloud-and-edge-ai/primary-images/US187942_Banner-1920x880.png"
                  alt="Cloud & Hybrid Infrastructure Modernisation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Cloud Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-navy/40 backdrop-blur-sm border border-accent-tech/20 rounded-xl p-6 hover:border-accent-tech/50 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="text-accent-tech flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-brand-navy to-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Key Benefits
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-navy/40 backdrop-blur-sm border border-accent-tech/20 rounded-lg p-6 hover:border-accent-tech/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <Target className="text-accent-tech flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-300">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-navy to-brand-black border-t border-accent-tech/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Modernize Your Infrastructure
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Migrate to cloud and hybrid solutions for reliability, flexibility, and efficiency.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-tech text-white rounded-lg font-semibold text-lg hover:bg-accent-tech/80 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us Today
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


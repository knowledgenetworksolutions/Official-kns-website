'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, Activity, CheckCircle, Target, FileText, Award
} from 'lucide-react'

export default function QOSCompliancePage() {
  const services = [
    {
      title: 'Network Performance Monitoring',
      description: 'Comprehensive monitoring and analytics for network quality:',
      items: [
        'Voice & data quality analytics',
        'Latency, jitter & packet loss testing',
        'Traffic engineering analysis',
        'KPI performance dashboards'
      ]
    },
    {
      title: 'Regulatory Compliance Support',
      description: 'We support operators with:',
      items: [
        'NaTCA QoS compliance reports',
        'Call completion analysis',
        'Spectrum usage analytics',
        'Coverage and service availability audits'
      ]
    },
    {
      title: 'Drive Test & Field Performance Surveys',
      description: 'Field testing and performance validation:',
      items: [
        '2G/3G/4G/5G drive testing',
        'Signal strength mapping',
        'KPI benchmarking',
        'Competitor analysis'
      ]
    },
  ]

  const whyChoose = [
    'Deep understanding of NaTCA QoS standards',
    'Modern testing tools and analytics platforms',
    'Ability to support operators, banks, and large enterprises'
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-gradient-to-b from-[#0A1A3A] via-[#0A1A3A] to-black overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowRight size={16} className="mr-2" />
              Go to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              QoS Monitoring, Regulatory Compliance & Network Performance Analytics
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-8 max-w-4xl">
              Ensuring High-Quality Service Delivery for Operators, ISPs & Enterprise Networks
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-black to-[#0A1A3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Quality of Service (QoS) is essential for customer satisfaction, regulatory compliance, and network reliability. KNS delivers monitoring, analytics, and compliance reporting aligned with Sierra Leone's National Telecommunications Authority (NaTCA) requirements.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl border border-mauve/30">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Do0No06QPKwI0S-1j7FECBtL9uA8OISGbg&s"
                  alt="QoS Monitoring, Regulatory Compliance & Network Performance Analytics"
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
      <section className="py-10 sm:py-12 md:py-16 bg-[#0A1A3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our QoS Services
            </h2>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 sm:p-8 hover:border-cyan-400/40 transition-all"
              >
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold mt-1">·</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-[#0A1A3A] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose KNS
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6"
              >
                <div className="flex items-start gap-3">
                  <Target className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-300">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ensure Quality & Compliance Today
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Let us help you monitor, optimize, and maintain regulatory compliance for your network.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
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


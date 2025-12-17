'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, Radio, CheckCircle, Target, Award, Globe, Server
} from 'lucide-react'

export default function GSMRFPage() {
  const services = [
    {
      title: 'Tower Supply, Installation & Commissioning',
      description: 'We deliver end-to-end tower services:',
      items: [
        'Site acquisition & survey',
        'Structural analysis & civil works',
        'Tower erection (lattice, monopole, rooftop)',
        'Antenna & feeder installation',
        'Grounding, security & fencing',
        'Power integration (solar, hybrid, diesel)'
      ]
    },
    {
      title: 'Radio Network Planning (RNP) & Optimization',
      description: 'Our RF specialists optimize network performance through:',
      items: [
        'Frequency planning',
        'Link budget calculation',
        'Coverage prediction',
        'Drive testing & walk testing',
        'Interference analysis',
        'KPI monitoring & improvement'
      ]
    },
    {
      title: 'Microwave & Backhaul Engineering',
      description: 'We design and deploy high-capacity microwave links including:',
      items: [
        'LOS surveys',
        'Path profiling',
        'Link design & alignment',
        'Microwave hop configuration',
        'Throughput optimization'
      ]
    },
  ]

  const whyChoose = [
    'Local field expertise in challenging terrains',
    'Strong familiarity with telecom regulatory frameworks',
    'Multi-vendor capability (Huawei, ZTE, Ericsson, Nokia, Cambium, Radwin)',
    'Reliable service delivery & nationwide implementation teams'
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
              GSM Tower Deployment, Radio Planning & Microwave Links
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-8 max-w-4xl">
              Expanding Nationwide Telecom Coverage with Precision Engineering
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
                Reliable mobile connectivity is central to economic growth, digital financial services, and national communication systems. KNS supports operators and infrastructure providers with tower deployment, microwave links, and RF planning to expand and optimize 2G/3G/4G/5G networks.
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
                  src="https://www.forsk.com/sites/default/files/styles/max_325x325/public/2024-02/2023_webinar_acp_live_adobestock_261994683_0.jpeg?itok=YppMKcEx"
                  alt="GSM Tower Deployment, Radio Planning & Microwave Links"
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
              Our GSM Engineering Services
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
              Why Operators Choose KNS
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
              Expand Your Network Coverage Today
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Let us help you deploy and optimize mobile networks across Sierra Leone and the region.
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


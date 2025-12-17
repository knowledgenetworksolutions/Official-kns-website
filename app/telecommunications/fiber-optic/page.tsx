'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, Wifi, CheckCircle, Target, FileText, Building2, Landmark,
  GraduationCap, Briefcase, Users, Award, Globe, Phone
} from 'lucide-react'

export default function FiberOpticPage() {
  const capabilities = [
    {
      title: 'FTTX Deployment (FTTH, FTTB, FTTC)',
      description: 'We deliver last-mile fiber solutions for homes, businesses, and enterprise facilities.',
      items: [
        'Survey & route planning',
        'Fiber trenching, ducting & manhole design',
        'Pole-mounted aerial fiber',
        'Splicing & termination',
        'OLT/ONT configuration',
        'Testing & certification',
        'Network activation & customer onboarding'
      ]
    },
    {
      title: 'Metro Fiber & Backbone Design',
      description: 'Ideal for ISPs, banks, MDAs, and private operators.',
      items: [
        'Metro ring design',
        'Redundant backbone routing',
        'POP integration',
        'Long-haul fiber planning (rural & urban)',
        'Dark fiber leasing support',
        'Multi-operator infrastructure coordination'
      ]
    },
    {
      title: 'Fiber Maintenance & Restoration',
      description: 'We ensure optimal performance through:',
      items: [
        'OTDR testing',
        'Fault localization',
        'Fiber cleanup & re-splicing',
        'Preventive maintenance',
        'Emergency restoration (24/7 response teams)'
      ]
    },
  ]

  const whoWeSupport = [
    { icon: Phone, label: 'Telecom Operators & ISPs' },
    { icon: Building2, label: 'Government Ministries & Agencies' },
    { icon: Landmark, label: 'Banks & Financial Institutions' },
    { icon: GraduationCap, label: 'Universities & Data Centers' },
    { icon: Briefcase, label: 'Private Enterprises' },
    { icon: Users, label: 'Development Partners & NGOs' },
  ]

  const whyChoose = [
    'Proven experience delivering metro, aerial & underground fiber networks',
    'Skilled engineering teams with modern splicing & OTDR tools',
    'Strong track record in Sierra Leone\'s expanding fiber ecosystem',
    'Reliable restoration SLA frameworks',
    'Compliance with international fiber engineering standards'
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
              Fiber Optic Deployment & Metro Backbone Engineering
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-8 max-w-4xl">
              Building Reliable, High-Speed Connectivity Across Sierra Leone, Guinea & Liberia
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
              className="text-white space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                As demand for high-speed digital connectivity surges across West Africa, driven by digital banking, cloud services, e-government, online education, and telecom expansion, fiber optic infrastructure has become the backbone of national development.
              </p>
              <p className="text-lg text-mauve-light leading-relaxed font-semibold">
                Knowledge Network Solutions (KNS) designs, deploys, and maintains FTTX, metro fiber, long-haul, and backbone fiber networks to support government, telecom operators, ISPs, enterprises, and development partners.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our fiber engineering expertise ensures high availability, low latency, and long-term scalability for mission-critical networks.
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
                  src="https://constructionreviewonline.com/wp-content/uploads/2021/01/National-optical-fiber-network-project-in-Mauritania.jpg"
                  alt="Fiber Optic Deployment & Metro Backbone Engineering"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
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
              Our Fiber Engineering Capabilities
            </h2>
          </motion.div>

          <div className="space-y-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 sm:p-8 hover:border-cyan-400/40 transition-all"
              >
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {capability.description}
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {capability.items.map((item, itemIndex) => (
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

      {/* Who We Support & Why Choose */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-[#0A1A3A] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                Who We Support
              </h2>
              <div className="space-y-4">
                {whoWeSupport.map((item, index) => {
                  const Icon = item.icon
                  if (!Icon) return null
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                      <div className="flex items-center gap-2">
                        <Icon className="text-cyan-400/60 flex-shrink-0" size={18} />
                        <span className="text-gray-300">{item.label}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                Why Choose KNS
              </h2>
              <ul className="space-y-4">
                {whyChoose.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Target className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
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
              Build the Network of the Future With KNS
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Let us help you deploy high-speed fiber infrastructure that powers your digital transformation.
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


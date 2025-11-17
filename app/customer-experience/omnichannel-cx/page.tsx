'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, MessageSquare, CheckCircle, Target, Phone, Mail, MessageCircle, Share2
} from 'lucide-react'

export default function OmnichannelCXPage() {
  const channels = [
    {
      icon: Phone,
      title: 'Voice',
      description: 'Traditional phone support with modern capabilities.',
      items: [
        'Inbound and outbound calls',
        'IVR systems',
        'Call routing and queuing',
        'Quality monitoring'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Professional email support and management.',
      items: [
        'Email ticket management',
        'Automated responses',
        'Email templates',
        'Response time tracking'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Real-time chat support for instant assistance.',
      items: [
        'Website chat integration',
        'Instant responses',
        'Chatbot integration',
        'Screen sharing capabilities'
      ]
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      description: 'Popular messaging platform support.',
      items: [
        'WhatsApp Business integration',
        'Media sharing',
        'Quick responses',
        'Conversation history'
      ]
    },
    {
      icon: MessageSquare,
      title: 'SMS',
      description: 'Text message support and notifications.',
      items: [
        'SMS alerts',
        'Two-way SMS support',
        'Bulk messaging',
        'Delivery confirmation'
      ]
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Social platform customer service.',
      items: [
        'Facebook support',
        'Twitter/X support',
        'Instagram messaging',
        'Social media monitoring'
      ]
    },
  ]

  const benefits = [
    'Unified customer experience across all channels',
    'Faster response times',
    'Fewer dropped requests',
    'Fully integrated support',
    'Consistent service quality',
    'Customer preference flexibility'
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1A3A] via-[#0A1A3A] to-black overflow-hidden">
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
              Omni-Channel Customer Experience
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-8 max-w-4xl">
              Serve Customers Seamlessly Across Every Channel
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0A1A3A]">
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
                We unify voice, email, chat, WhatsApp, SMS, and social media into one consistent experience. Faster responses, fewer dropped requests, fully integrated support.
              </p>
              <p className="text-lg text-mauve-light leading-relaxed font-semibold">
                Customers can reach you through their preferred channel, and you can serve them seamlessly with a unified view of every interaction.
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
                  src="https://www.dhl.com/discover/content/dam/south-africa/news-and-insight/reports-and-press/The%20Building%20Blocks%20of%20Omnichannel%20Success.jpg"
                  alt="Omni-Channel Customer Experience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="py-20 bg-[#0A1A3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Supported Channels
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive omnichannel support across all communication platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <Icon className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {channel.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        {channel.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 ml-11">
                    {channel.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={16} />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-[#0A1A3A] to-black">
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
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Unified Customer Experience
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Serve customers seamlessly across every channel with our omnichannel solution.
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


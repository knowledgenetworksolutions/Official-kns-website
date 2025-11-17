'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, Headphones, PhoneIncoming, PhoneOutgoing, HelpCircle, MessageSquare,
  Briefcase, Target, Users, Building2, Landmark, GraduationCap, Heart, Globe,
  CheckCircle, Award, Zap, Star, Badge
} from 'lucide-react'

export default function CustomerExperiencePage() {
  const services = [
    {
      icon: PhoneIncoming,
      title: 'Inbound Customer Care',
      description: 'Fast, friendly customer support, every time. KNS manages all inbound enquiries, complaints, billing support, and service updates with professionalism and empathy. Improve satisfaction, reduce wait times, and strengthen your brand\'s frontline experience.',
      tagline: 'Always Here to Help',
      link: '/customer-experience/inbound-support'
    },
    {
      icon: PhoneOutgoing,
      title: 'Outbound Engagement & Campaigns',
      description: 'Reach customers before they reach out. Our outbound teams run retention campaigns, soft collections, surveys, sales follow-ups, onboarding calls, and customer win-back programs, boosting engagement and revenue.',
      tagline: 'Engage & Grow',
      link: '/customer-experience/outbound-services'
    },
    {
      icon: HelpCircle,
      title: 'Technical Helpdesk & IT Support',
      description: 'Your first line of digital support. KNS provides Tier-1 and Tier-2 helpdesk services, troubleshooting, ticket management, and escalation support, keeping your systems and customers operating smoothly.',
      tagline: 'Support That Works',
      link: '/customer-experience/helpdesk-support'
    },
    {
      icon: MessageSquare,
      title: 'Omni-Channel Customer Experience',
      description: 'Serve customers seamlessly across every channel. We unify voice, email, chat, WhatsApp, SMS, and social media into one consistent experience. Faster responses, fewer dropped requests, fully integrated support.',
      tagline: 'Unified Customer Experience',
      link: '/customer-experience/omnichannel-cx'
    },
    {
      icon: Briefcase,
      title: 'Back-Office & BPO Operations',
      description: 'Efficient operations behind every great customer experience. KNS handles data entry, verification, application/claims processing, document management, and admin support to reduce backlog and keep your organisation running efficiently.',
      tagline: 'Efficient Back-Office Operations',
      link: '/customer-experience/back-office-bpo'
    },
    {
      icon: Target,
      title: 'CX Strategy & Consulting',
      description: 'Transform your organisation into a customer-centric leader. We help organisations redesign service processes, map customer journeys, improve KPIs, build SLAs, strengthen complaint systems, and elevate overall customer experience.',
      tagline: 'Design Better Experiences',
      link: '/customer-experience/cx-consulting'
    },
  ]

  const whyChoose = [
    {
      icon: Award,
      title: 'NaTCA-Approved Call Center Operation',
      description: 'Fully licensed and compliant with Sierra Leone\'s National Telecommunications Authority requirements.'
    },
    {
      icon: Users,
      title: 'Trained Professional Agents',
      description: 'Experienced, empathetic, and skilled customer service professionals trained in best practices.'
    },
    {
      icon: Zap,
      title: 'Modern Technology Stack',
      description: 'State-of-the-art contact center platforms, CRM integration, and omnichannel communication tools.'
    },
    {
      icon: Globe,
      title: 'Deep Regional Expertise',
      description: 'Understanding of local context, languages, and customer expectations across Sierra Leone and the Mano River region.'
    },
    {
      icon: Star,
      title: 'Proven Track Record',
      description: 'Successfully supporting telecoms, ICT, and digital transformation initiatives with world-class service.'
    },
    {
      icon: CheckCircle,
      title: 'Scalable Solutions',
      description: 'From small teams to enterprise operations, we scale to meet your customer service needs.'
    },
  ]

  const whoWeServe = [
    { icon: PhoneIncoming, label: 'Telecom Operators & ISPs' },
    { icon: Building2, label: 'Government Ministries & Agencies' },
    { icon: Landmark, label: 'Banks & Financial Institutions' },
    { icon: Briefcase, label: 'Private Enterprises' },
    { icon: Heart, label: 'Healthcare Providers' },
    { icon: GraduationCap, label: 'Educational Institutions' },
    { icon: Users, label: 'NGOs & Development Partners' },
    { icon: Globe, label: 'E-commerce & Digital Platforms' },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1A3A] via-[#0A1A3A] to-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-mauve-light rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/" 
              className="inline-flex items-center text-mauve-light hover:text-mauve-light transition-colors"
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-mauve-light font-semibold text-lg mb-4 tracking-wider"
            >
              NATCA-APPROVED CALL CENTER OPERATION
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Customer Experience & Call Center Services
            </h1>
            <p className="text-xl md:text-2xl text-mauve-light font-semibold mb-8 max-w-4xl">
              Fast, Friendly, and Frictionless Service Across Every Touchpoint
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
                Customer expectations have changed. Today they demand fast, friendly, and frictionless service across every touchpoint. Whether by phone, email, chat, WhatsApp, or social media, they expect your organisation to respond instantly and with professionalism. KNS helps you deliver exactly that.
              </p>
              <p className="text-lg text-mauve-light leading-relaxed font-semibold">
                With a NaTCA-approved call center operation, trained agents, modern technology, and deep expertise across telecoms, ICT, and digital transformation, KNS provides complete Customer Experience & Contact Center solutions to help organisations scale support, improve public satisfaction, and deliver world-class service in Sierra Leone and the Mano River region.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From inbound support to outbound engagement, technical helpdesk, omnichannel management, BPO operations, and CX strategy consulting, KNS transforms your customer service into a competitive advantage.
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
                  src="https://www.shutterstock.com/image-photo/confident-african-american-businesswoman-wearing-600nw-2534659151.jpg"
                  alt="Customer Experience & Call Center Services"
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
              Our Customer Experience Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions for world-class customer service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-mauve/20 rounded-xl p-6 hover:border-mauve-light/40 hover:bg-slate-800/70 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-mauve/20 rounded-lg">
                      <Icon className="text-mauve-light" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-mauve-light text-sm font-medium mb-3">
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-mauve-light hover:text-mauve-light text-sm font-semibold"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose KNS Section */}
      <section className="py-20 bg-gradient-to-b from-[#0A1A3A] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose KNS
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-mauve/20 rounded-lg p-6"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Icon className="text-mauve-light flex-shrink-0" size={24} />
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
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
              Who We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Supporting organizations across all sectors with world-class customer experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeServe.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-slate-800/50 border border-mauve/20 rounded-lg p-6 text-center hover:border-mauve-light/40 transition-all"
                >
                  <Icon className="text-mauve-light mx-auto mb-3" size={32} />
                  <p className="text-gray-300 text-sm font-medium">
                    {item.label}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-mauve-dark to-mauve">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Customer Service Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              From inbound support to CX strategy, KNS helps you deliver world-class customer experience that drives satisfaction and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-mauve rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us Today
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, Globe, CheckCircle, Target, Users, Star, Badge, Heart, GraduationCap, Building2
} from 'lucide-react'

export default function DigitalInclusionPage() {
  const targetGroups = [
    { icon: Users, label: 'Rural communities' },
    { icon: Heart, label: 'Women & girls' },
    { icon: GraduationCap, label: 'Secondary school graduates' },
    { icon: Building2, label: 'Community ICT hubs' },
    { icon: Users, label: 'Teachers and educators' },
  ]

  const certiportTracks = [
    {
      title: 'IC3 Digital Literacy (Beginner)',
      description: 'Foundational digital skills for first-time computer users.',
      items: [
        'Computer basics',
        'Internet use',
        'Online safety',
        'Basic productivity tools'
      ]
    },
    {
      title: 'ESB – Entrepreneurship for Community Groups',
      description: 'Business skills for community-based organizations.',
      items: [
        'Entrepreneurship fundamentals',
        'Small business management',
        'Market analysis',
        'Business planning'
      ]
    },
    {
      title: 'MOS Basics (Word/Excel/PowerPoint)',
      description: 'Essential productivity skills for digital inclusion.',
      items: [
        'Microsoft Word basics',
        'Microsoft Excel basics',
        'Microsoft PowerPoint basics',
        'Office productivity'
      ]
    },
    {
      title: 'Digital Communication Essentials',
      description: 'Skills for effective digital communication and collaboration.',
      items: [
        'Email communication',
        'Online collaboration tools',
        'Social media basics',
        'Digital citizenship'
      ]
    },
  ]

  const benefits = [
    'Structured certification pathways for digital inclusion',
    'Multi-language support for diverse communities',
    'Accessible training for underserved populations',
    'Women and girls tech empowerment',
    'Child online safety education',
    'Rural community digital literacy'
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
              National Digital Inclusion & Awareness Campaigns
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-8 max-w-4xl">
              Certiport Used as Structured Certification Pathway
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
                KNS uses Certiport certifications to support national digital inclusion programs, especially for rural communities, women & girls, secondary school graduates, community ICT hubs, and teachers and educators.
              </p>
              <p className="text-lg text-mauve-light leading-relaxed font-semibold">
                We deliver multi-language digital literacy, women & girls tech empowerment, child online safety, and rural community outreach programs, supported by structured Certiport certification pathways where appropriate.
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
                  src="https://www.povertyactionlab.org/sites/default/files/styles/full_width_medium_cropped/public/images/2024/06/shutterstock_1593777991.jpg?itok=3eEC3rMD"
                  alt="National Digital Inclusion & Awareness Campaigns"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Groups Section */}
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
              Digital inclusion programs for underserved communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {targetGroups.map((group, index) => {
              const Icon = group.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6 text-center hover:border-cyan-400/40 transition-all"
                >
                  <Icon className="text-cyan-400 mx-auto mb-3" size={32} />
                  <p className="text-gray-300 text-sm font-medium">
                    {group.label}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certiport Tracks Section */}
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
              Key Certiport Tracks Used in Digital Inclusion
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Structured certification pathways for inclusive digital skills development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certiportTracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {track.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {track.description}
                </p>
                <div className="space-y-2">
                  {track.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={16} />
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
      <section className="py-20 bg-[#0A1A3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Program Benefits
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

      {/* Certiport Global Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0A1A3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-xl p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <Badge className="text-cyan-400 flex-shrink-0" size={32} />
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  CERTIPORT GLOBAL DIGITAL SKILLS & WORKFORCE CERTIFICATIONS
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  We now offer 40+ Certiport certifications in:
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Digital Literacy',
                'Microsoft Office Productivity',
                'Software Development (IT Specialist exams)',
                'Entrepreneurship & Business Skills',
                'Design & Digital Media',
                'Engineering (Autodesk)',
                'Coding & Computer Science',
                'Cloud & Data fundamentals'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-cyan-500/20">
              <p className="text-cyan-300 font-semibold mb-3">All Certiport certifications come with:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Official Exam Delivery via Certiport',
                  'Practice Tests',
                  'Instructor-led bootcamps',
                  'Digital credentials via Credly',
                  'Global exam readiness'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="text-cyan-400" size={16} />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
              Support Digital Inclusion
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Close the digital divide through nationwide training programs with structured Certiport certification pathways.
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


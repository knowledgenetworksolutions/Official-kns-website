'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, BookOpen, CheckCircle, Award, Target, Users, Globe, Star, Badge
} from 'lucide-react'

export default function DigitalLiteracyPage() {
  const certiportPrograms = [
    {
      title: 'Certiport IC3 Digital Literacy Certification',
      description: 'The globally recognized standard for digital literacy.',
      items: [
        'Computer fundamentals',
        'Internet use and online safety',
        'Productivity tools basics',
        'Digital communication essentials'
      ]
    },
    {
      title: 'Microsoft Office Specialist (MOS)',
      description: 'Certiport\'s MOS program provides hands-on mastery in:',
      items: [
        'Word',
        'Excel',
        'PowerPoint'
      ],
      note: 'Essential for office, admin, banking, NGO, and university roles.'
    },
    {
      title: 'Certiport Digital Literacy Pathways',
      description: 'Comprehensive digital skills development:',
      items: [
        'Digital Communication',
        'Productivity Tools',
        'Cloud-based collaboration skills',
        'Computer fundamentals for all ages'
      ]
    },
    {
      title: 'Digital Badges via Credly',
      description: 'Learners receive digital credentials instantly through Certiport\'s Credly integration.',
      items: [
        'Instant credential verification',
        'Shareable digital badges',
        'LinkedIn integration',
        'Global recognition'
      ]
    },
  ]

  const whyChoose = [
    'Globally recognized Certiport certifications',
    'Perfect for students, jobseekers, and first-time computer users',
    'Industry-standard digital literacy credentials',
    'Instant digital badges via Credly',
    'Hands-on, practical training approach',
    'Support for all skill levels'
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
              Digital Literacy & IC3 Training
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-8 max-w-4xl">
              Empowering Citizens with Essential Digital Skills Through Certiport Digital Skills Certification
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
                KNS delivers foundational Certiport Digital Skills programs, including IC3 Digital Literacy, MOS (Microsoft Office Specialist), and other beginner-level digital credential pathways.
              </p>
              <p className="text-lg text-mauve-light leading-relaxed font-semibold">
                Perfect for students, jobseekers, and first-time computer users, our programs provide the essential digital skills needed to succeed in today's digital economy.
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
                  src="https://africanmediaagency.com/wp-content/uploads/2021/10/te%CC%81le%CC%81chargement-6.png"
                  alt="Digital Literacy & IC3 Training"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certiport Programs Section */}
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
              Certiport Digital Skills Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Globally recognized certifications for digital literacy and productivity
            </p>
          </motion.div>

          <div className="space-y-8">
            {certiportPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all"
              >
                <div className="flex items-start gap-3 mb-4">
                  <Award className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {program.description}
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3 ml-11">
                  {program.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                {program.note && (
                  <p className="text-cyan-300 text-sm font-medium mt-4 ml-11">
                    {program.note}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certiport Global Section */}
      <section className="py-20 bg-gradient-to-b from-[#0A1A3A] to-black">
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

      {/* Why Choose Section */}
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
              Why Choose KNS
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
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Build Your Digital Foundation Today
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Start your digital journey with globally recognized Certiport certifications. Perfect for beginners and essential for career advancement.
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


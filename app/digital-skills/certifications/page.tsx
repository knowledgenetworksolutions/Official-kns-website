'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, Award, CheckCircle, Target, Users, Globe, Star, Badge, Code, Palette, Briefcase
} from 'lucide-react'

export default function CertificationsPage() {
  const certiportPrograms = [
    {
      icon: Briefcase,
      title: 'Microsoft Office Specialist (MOS)',
      description: 'Most demanded entry-level certification globally.',
      items: [
        'Word',
        'Excel',
        'PowerPoint',
        'Outlook',
        'Access'
      ]
    },
    {
      icon: Users,
      title: 'Microsoft Certified Educator (MCE)',
      description: 'Ideal for teachers, schools, universities, TVET lecturers.',
      items: [
        'Digital teaching tools',
        'Educational technology integration',
        'Student assessment methods',
        '21st-century learning skills'
      ]
    },
    {
      icon: Palette,
      title: 'Adobe Certified Professional (ACP)',
      description: 'For creative industries:',
      items: [
        'Photoshop',
        'Illustrator',
        'Premiere Pro',
        'After Effects',
        'InDesign'
      ]
    },
    {
      icon: Code,
      title: 'App Development with Swift (Apple)',
      description: 'Foundational coding for students and aspiring developers.',
      items: [
        'Swift programming fundamentals',
        'iOS app development',
        'Xcode proficiency',
        'Mobile app design principles'
      ]
    },
    {
      icon: Briefcase,
      title: 'Autodesk Certified User',
      description: 'Engineering and design track:',
      items: [
        'AutoCAD',
        'Revit',
        'Fusion 360',
        '3D modeling and design'
      ]
    },
    {
      icon: Briefcase,
      title: 'Entrepreneurship & Small Business (ESB)',
      description: 'A Certiport certification perfect for:',
      items: [
        'Entrepreneurs',
        'Market women',
        'Startups',
        'Youth founders'
      ]
    },
    {
      icon: Award,
      title: 'IC3 + Workforce Digital Skills Stack',
      description: 'Entry-level digital workplace readiness.',
      items: [
        'Digital literacy fundamentals',
        'Productivity tools',
        'Online collaboration',
        'Workplace technology skills'
      ]
    },
  ]

  const whyMatters = [
    'Certifications aligned with global job standards',
    'Increased employability and career advancement',
    'Industry-ready graduates',
    'Globally recognized credentials',
    'Digital badges via Credly for instant verification',
    'LinkedIn integration for professional profiles'
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
              Professional Certification Bootcamps
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-8 max-w-4xl">
              Industry-Recognized Certifications for Global Careers Through Certiport Professional Skills Catalogue
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
                KNS now offers the full Certiport Digital Skills & Workforce Certification Ecosystem, providing comprehensive professional certification bootcamps that prepare learners for globally recognized credentials.
              </p>
              <p className="text-lg text-mauve-light leading-relaxed font-semibold">
                Our intensive bootcamps include practice tests, hands-on labs, and Credly digital badges, ensuring learners are fully prepared for certification exams and career advancement.
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
                  src="https://www.shutterstock.com/image-photo/business-team-training-listening-meeting-600nw-2356847995.jpg"
                  alt="Professional Certification Bootcamps"
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
              Certiport Professional Certification Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive certification pathways for career advancement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certiportPrograms.map((program, index) => {
              const Icon = program.icon
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
                        {program.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        {program.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 ml-11">
                    {program.items.map((item, itemIndex) => (
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

      {/* Why This Matters Section */}
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
              Why This Matters
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyMatters.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-6"
              >
                <div className="flex items-start gap-3">
                  <Star className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-300">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certiport Global Section */}
      <section className="py-20 bg-[#0A1A3A]">
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
              Earn Global Certifications Today
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Prepare for industry-recognized certifications that open doors to global career opportunities.
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


'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, BookOpen, Award, Building2, GraduationCap, Users, Globe,
  CheckCircle, Target, FileText, Zap, ShieldCheck, Star, Briefcase, Badge
} from 'lucide-react'

export default function DigitalSkillsPage() {
  const services = [
    {
      icon: BookOpen,
      title: 'Digital Literacy & IC3 Training',
      description: 'Empowering citizens with essential digital skills. KNS delivers IC3 Digital Literacy and foundational ICT training approved by Certiport, covering computer basics, internet use, productivity tools, and online safety. Perfect for students, jobseekers, and first-time computer users.',
      tagline: 'Start with the basics',
      link: '/digital-skills/digital-literacy'
    },
    {
      icon: Award,
      title: 'Professional Certification Bootcamps (Certiport, Microsoft, Cisco, ISC2, CompTIA)',
      description: 'Industry-recognized certifications for global careers. Our intensive bootcamps prepare learners for Certiport exams (MOS, IC3, Adobe, IT Specialist) and global certifications like Microsoft Azure, Cisco CCNA, ISC2 CC, and CompTIA Security+. Includes practice tests, labs, and Credly digital badges.',
      tagline: 'Get globally certified',
      link: '/digital-skills/certifications'
    },
    {
      icon: Building2,
      title: 'Public Sector Digital Transformation Upskilling',
      description: 'Strengthening government workforce capability. KNS equips civil servants with digital governance, cloud skills, cyber hygiene, productivity tools, and online service delivery competencies, supporting national modernization and e-government objectives.',
      tagline: 'Train government teams',
      link: '/digital-skills/public-sector'
    },
    {
      icon: GraduationCap,
      title: 'TVET, College & University Curriculum Development',
      description: 'Modern ICT programs powered by global certifications. We develop fully industry-aligned curricula integrated with Certiport certifications such as IC3, MOS, Adobe, ESB, and IT Specialist. Institutions can deliver dual qualifications that prepare graduates for today\'s digital workforce.',
      tagline: 'Industry-ready programs',
      link: '/digital-skills/curriculum-development'
    },
    {
      icon: Users,
      title: 'Youth Digital Employability & Entrepreneurship Programs',
      description: 'Helping young people compete in a digital economy. KNS offers digital bootcamps, job-readiness training, coding basics, entrepreneurship skills, and Certiport pathways (IC3, ESB, MOS) to prepare youth for local and global opportunities.',
      tagline: 'Empower the next generation',
      link: '/digital-skills/youth-programs'
    },
    {
      icon: Globe,
      title: 'National Digital Inclusion & Awareness Campaigns',
      description: 'Closing the digital divide through nationwide training. We deliver multi-language digital literacy, women & girls tech empowerment, child online safety, and rural community outreach programs, supported by structured Certiport certification pathways where appropriate.',
      tagline: 'Skills for everyone',
      link: '/digital-skills/digital-inclusion'
    },
  ]

  const whyChoose = [
    {
      icon: Star,
      title: 'Sierra Leone\'s Digital Skills Champion 2025',
      description: 'Recognized by the Ministry of Communication, Technology & Innovation (MoCTI) as the leading digital skills provider in the nation.'
    },
    {
      icon: Award,
      title: 'Globally Recognized Certifications',
      description: 'Certiport, Microsoft, Cisco, CompTIA, ISC2, and ISO certifications that open doors to international career opportunities.'
    },
    {
      icon: GraduationCap,
      title: 'Industry-Aligned Curriculum',
      description: 'Programs designed with real-world relevance, ensuring graduates are job-ready and competitive in the digital economy.'
    },
    {
      icon: Users,
      title: 'Comprehensive Training Approach',
      description: 'From foundational digital literacy to advanced professional certifications, we cover the full spectrum of digital skills.'
    },
    {
      icon: Building2,
      title: 'National Impact',
      description: 'Supporting government digital transformation, youth empowerment, and nationwide digital inclusion initiatives.'
    },
    {
      icon: Zap,
      title: 'Flexible Delivery Models',
      description: 'In-person, virtual, and hybrid training options to meet diverse learning needs and accessibility requirements.'
    },
  ]

  const whoWeServe = [
    { icon: Users, label: 'Students & Jobseekers' },
    { icon: Building2, label: 'Government Ministries & Civil Servants' },
    { icon: GraduationCap, label: 'Universities, TVET & Educational Institutions' },
    { icon: Users, label: 'Youth & Community Organizations' },
    { icon: Briefcase, label: 'Private Sector Employees' },
    { icon: Globe, label: 'Rural & Underserved Communities' },
    { icon: Users, label: 'Women & Girls in Tech' },
    { icon: ShieldCheck, label: 'NGOs & Development Partners' },
  ]

  const methodology = [
    'Needs Assessment & Curriculum Design',
    'Certification Pathway Planning',
    'Instructor-Led Training Delivery',
    'Hands-On Labs & Practice Tests',
    'Assessment & Certification',
    'Progress Tracking & Reporting',
    'Ongoing Support & Career Guidance'
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1A3A] via-[#0A1A3A] to-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              {Array.from({ length: 20 }).map((_, i) => (
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
              SIERRA LEONE'S DIGITAL SKILLS CHAMPION 2025
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Digital Skills Development & Capacity Building
            </h1>
            <p className="text-xl md:text-2xl text-mauve-light font-semibold mb-8 max-w-4xl">
              Empowering Citizens, Transforming Institutions, Building a Digitally Skilled Nation
            </p>
            <p className="text-lg text-gray-300 max-w-3xl">
              From foundational digital literacy to globally recognized professional certifications, KNS delivers comprehensive training programs that prepare individuals and institutions for the digital economy.
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
                As Sierra Leone accelerates its digital transformation, the need for a digitally skilled workforce has never been more critical. Knowledge Network Solutions (KNS) stands at the forefront of this mission, recognized by the Ministry of Communication, Technology & Innovation (MoCTI) as "Digital Skills Champion 2025."
              </p>
              <p className="text-lg text-mauve-light leading-relaxed font-semibold">
                We deliver end-to-end digital skills development programs, from IC3 Digital Literacy for first-time computer users to advanced professional certifications in cybersecurity, cloud computing, networking, and enterprise technology.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our comprehensive portfolio includes certification bootcamps, academic curriculum development, public sector upskilling, youth empowerment programs, and nationwide digital inclusion campaigns, all designed to build a competitive, digitally empowered Sierra Leone.
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
                  src="https://donate.youthbridge.africa/wp-content/uploads/2021/09/digital-skills-program.png"
                  alt="Digital Skills Development & Capacity Building"
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
              Our Digital Skills Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive training solutions for individuals, institutions, and communities
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
              Why Choose KNS for Digital Skills
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
              Our programs are designed for diverse learners and institutions
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

      {/* Methodology Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#0A1A3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Training Methodology
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {methodology.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-slate-800/50 border border-mauve/20 rounded-lg p-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-mauve/20 rounded-full flex items-center justify-center">
                    <span className="text-mauve-light font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-300">{step}</p>
                </motion.div>
              ))}
            </div>
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
            className="bg-gradient-to-r from-mauve-dark/20 to-mauve/20 border border-mauve/30 rounded-xl p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <Badge className="text-mauve-light flex-shrink-0" size={32} />
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
                  <CheckCircle className="text-mauve-light flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-mauve/20">
              <p className="text-mauve-light font-semibold mb-3">All Certiport certifications come with:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Official Exam Delivery via Certiport',
                  'Practice Tests',
                  'Instructor-led bootcamps',
                  'Digital credentials via Credly',
                  'Global exam readiness'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="text-mauve-light" size={16} />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
              Build Your Digital Future With KNS
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Whether you're an individual seeking certification, an institution developing curriculum, or a government agency upskilling your workforce, KNS has the programs and expertise to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
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


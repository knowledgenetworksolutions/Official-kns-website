'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ShieldCheck, Search, FileCheck, AlertTriangle, Activity, Lock, GraduationCap, 
  ArrowRight, CheckCircle, Award, Globe, Building2, Landmark, Phone, 
  Heart, Briefcase, Server, Target, Users
} from 'lucide-react'

export default function CybersecurityPage() {
  const capabilities = [
    {
      icon: Search,
      title: 'Penetration Testing & Vulnerability Assessments',
      description: 'Identify weaknesses before attackers exploit them. KNS performs advanced penetration testing on networks, applications, cloud systems, and infrastructure. We simulate real-world attacks to uncover vulnerabilities and provide actionable remediation strategies.',
      tagline: 'Find your weaknesses before attackers do.',
      link: '/cybersecurity/penetration-testing'
    },
    {
      icon: FileCheck,
      title: 'IT/IS Audit & Security Compliance Reviews',
      description: 'Strong cybersecurity begins with governance. We assess IT General Controls (ITGC), Application Controls, and Information Security frameworks against ISO 27001, NIST, CIS, and data protection requirements, helping organizations meet regulatory and donor expectations.',
      tagline: 'Strengthen governance. Meet global standards.',
      link: '/cybersecurity/it-audit'
    },
    {
      icon: AlertTriangle,
      title: 'Security Risk Identification & Mitigation Planning',
      description: 'Understand your cyber risk exposure and take action. KNS conducts threat assessments, asset classification, BIA, and security posture evaluations to develop practical and scalable mitigation plans that strengthen long-term resilience.',
      tagline: 'Know your risks. Build resilience.',
      link: '/cybersecurity/risk-management'
    },
    {
      icon: Activity,
      title: 'Security Operations Oversight & Advisory',
      description: 'Move from reactive to continuous cyber defence. We support log monitoring, incident handling, SOC readiness, and operational governance, helping organizations increase visibility, improve detection, and respond faster to threats.',
      tagline: 'Stay ahead with continuous cyber defence.',
      link: '/cybersecurity/secops'
    },
    {
      icon: Lock,
      title: 'Data Protection, Privacy & Information Security Governance',
      description: 'Build trust through responsible data management. KNS helps organizations implement data governance frameworks, privacy controls, classification schemes, retention policies, and compliance practices aligned with global standards.',
      tagline: 'Protect data. Build digital trust.',
      link: '/cybersecurity/data-governance'
    },
    {
      icon: GraduationCap,
      title: 'Cybersecurity Awareness & Professional Training',
      description: 'Cybersecurity begins with people. We deliver tailored awareness programs, school-based campaigns, executive briefings, and global certification training to build a strong cybersecurity culture across institutions and communities.',
      tagline: 'Empower your people. Reduce cyber risk.',
      link: '/cybersecurity/training'
    },
  ]

  const whyChoose = [
    {
      icon: Globe,
      title: 'Local Expertise + Global Standards',
      description: 'We understand the cybersecurity realities of Sierra Leone, Guinea, and Liberia, and apply world-class frameworks (ISO 27001, NIST, CIS, MITRE ATT&CK) to local infrastructure.'
    },
    {
      icon: Award,
      title: 'Certified Cybersecurity Professionals',
      description: 'Our team includes experts certified in CISA, CISSP, Security+, CEH, ISO 27001 Lead Implementer/Auditor, and more.'
    },
    {
      icon: Target,
      title: 'Strategic & Practical Approach',
      description: 'We provide actionable, realistic recommendations that organizations can implement, even with limited resources.'
    },
    {
      icon: Building2,
      title: 'National & Sector Experience',
      description: 'We support MDAs, banks, telcos, health systems, universities, NGOs, and enterprises with mission-critical cybersecurity needs.'
    },
    {
      icon: ShieldCheck,
      title: 'Trusted Digital Skills Champion 2025',
      description: 'Recognized by MoCTI, KNS leads national cybersecurity awareness and capacity-building initiatives.'
    },
  ]

  const whoWeSupport = [
    { icon: Building2, label: 'Government Ministries, Departments & Agencies' },
    { icon: Landmark, label: 'Financial Institutions & Mobile Money Operators' },
    { icon: Phone, label: 'Telecom Operators & ISPs' },
    { icon: Users, label: 'NGOs, Development Partners & International Agencies' },
    { icon: Heart, label: 'Hospitals, Clinics & Healthcare Providers' },
    { icon: GraduationCap, label: 'Universities, Colleges & Schools' },
    { icon: Briefcase, label: 'Large Enterprises & SMEs' },
    { icon: Server, label: 'Cloud-first organizations & digital service providers' },
  ]

  const methodology = [
    'Assessment & discovery',
    'Risk analysis & prioritization',
    'Security posture evaluation',
    'Governance & compliance mapping',
    'Implementation planning',
    'Monitoring & continuous improvement',
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-900 via-blue-900 to-black overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(0, 102, 255, 0.1) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/" 
              className="inline-flex items-center text-mauve-light hover:text-mauve transition-colors"
            >
              <ArrowRight size={16} className="mr-2" />
              Go to Home
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Cybersecurity & Digital Resilience
            </h1>
            <p className="text-2xl md:text-3xl text-mauve-light font-semibold mb-8">
              Protecting Institutions. Empowering People. Strengthening Nations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Cyber Threat Landscape</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                As Sierra Leone, Guinea, and Liberia accelerate their digital transformation, cyber threats have become more sophisticated, frequent, and damaging. Government systems, telecom networks, financial institutions, universities, and private enterprises all face increasing risks, from phishing, data breaches, and ransomware attacks to insider threats and infrastructure compromise.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Knowledge Network Solutions (KNS) delivers end-to-end cybersecurity services that help organizations build resilience, strengthen governance, protect sensitive data, and ensure uninterrupted operations.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We combine global best practices with deep regional experience to provide cybersecurity solutions that are practical, strategic, and aligned with local realities.
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
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                  alt="Cybersecurity and Digital Resilience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="text-4xl font-bold text-mauve-light mb-1">20+</div>
                    <div className="text-lg text-gray-200">Years of Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Cybersecurity Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A complete service ecosystem designed to protect organizations across the Mano River region.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              if (!Icon) return null
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-mauve/30 rounded-xl p-6 hover:border-mauve-light/50 hover:bg-slate-800/70 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-mauve/20 rounded-lg">
                      <Icon className="text-mauve-light" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {capability.title}
                      </h3>
                      <p className="text-mauve-light text-sm font-medium mb-3">
                        {capability.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {capability.description}
                  </p>
                  <Link
                    href={capability.link}
                    className="inline-flex items-center text-mauve-light hover:text-mauve text-sm font-semibold"
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
      <section className="py-20 bg-gradient-to-b from-slate-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose KNS for Cybersecurity?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon
              if (!Icon) return null
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-mauve/30 rounded-xl p-6 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-mauve/20 rounded-full">
                      <Icon className="text-mauve-light" size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who We Support Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Who We Support
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeSupport.map((item, index) => {
              const Icon = item.icon
              if (!Icon) return null
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start gap-3 bg-slate-800/50 border border-mauve/30 rounded-lg p-4 hover:border-mauve-light/50 transition-all"
                >
                  <CheckCircle className="text-mauve-light flex-shrink-0 mt-1" size={20} />
                  <div className="flex items-center gap-2 flex-1">
                    <Icon className="text-mauve-light/60 flex-shrink-0" size={18} />
                    <p className="text-gray-300 text-sm">{item.label}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Methodology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              KNS uses a structured, globally aligned approach to cybersecurity delivery:
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {methodology.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-slate-800/50 border border-mauve/30 rounded-lg p-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-mauve/20 rounded-full flex items-center justify-center">
                    <span className="text-mauve-light font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 font-medium capitalize">{step}</p>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center text-gray-400 mt-8 text-sm"
            >
              This ensures predictable outcomes, measurable improvements, and long-term resilience.
            </motion.p>
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
              Ready to Strengthen Your Cyber Defences?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Cyber threats are growing fast, but with the right partner, you can stay ahead.
            </p>
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto">
              KNS provides the expertise, strategy, and solutions your organization needs to safeguard its digital future.
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
                href="/services/cybersecurity-digital-resilience"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                View Service Details
              </Link>
            </div>
            <p className="text-white/80 mt-8 text-sm">
              Let's help you build a secure, resilient, and trusted digital environment.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


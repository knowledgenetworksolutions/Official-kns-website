'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, ShieldCheck, Lock, Database, FileText, Search, 
  CheckCircle, Target, Users, Building2, Landmark, Phone,
  GraduationCap, Heart, Briefcase, Server, Globe, Award, Eye, AlertTriangle
} from 'lucide-react'

export default function DataGovernancePage() {
  const services = [
    {
      icon: ShieldCheck,
      title: 'Data Protection Framework Design',
      description: 'We design end-to-end data protection and privacy frameworks tailored to your organization.',
      items: [
        'Data protection policies',
        'Privacy governance structures',
        'Data handling & retention guidelines',
        'Access & authorization models',
        'Data subject rights procedures'
      ]
    },
    {
      icon: Search,
      title: 'Data Privacy Assessments & Gap Analysis',
      description: 'We evaluate your current practices against global best practices and local expectations.',
      items: [
        'Data flow vulnerabilities',
        'Privacy control gaps',
        'Non-compliance risks',
        'Areas requiring policy or governance improvement'
      ]
    },
    {
      icon: Database,
      title: 'Personal Data Inventory & Classification',
      description: 'Understanding what data you have, and where it is stored, is essential.',
      items: [
        'Identify personal, sensitive, and confidential data',
        'Create a data inventory and data register',
        'Map data flows across departments, systems, and third parties',
        'Classify data based on criticality and sensitivity'
      ]
    },
    {
      icon: FileText,
      title: 'Information Security Policy Development',
      description: 'We develop or refine policies that govern your information security practices.',
      items: [
        'Access control policy',
        'Acceptable use policy',
        'Password and authentication policies',
        'Data retention & disposal policies',
        'Security incident management procedures'
      ]
    },
    {
      icon: Lock,
      title: 'Data Lifecycle & Retention Management',
      description: 'KNS assists organizations in defining retention timelines and secure disposal methods.',
      items: [
        'Emails',
        'Documents and files',
        'Databases',
        'Logs and digital records',
        'Backups & archives'
      ]
    },
    {
      icon: Eye,
      title: 'Privacy Impact Assessments (PIA/DPIA)',
      description: 'Before launching new systems or services that process personal data, we perform Privacy Impact Assessments to identify risks and mitigation measures.',
      items: [
        'Government digital services',
        'Health systems',
        'Education systems',
        'Financial services',
        'Customer-facing digital platforms'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Third-Party Risk & Vendor Data Governance',
      description: 'We assess the data protection readiness of third-party vendors.',
      items: [
        'IT service providers',
        'Cloud platforms',
        'Payment processors',
        'Telecom and network partners',
        'Software developers',
        'External consultants'
      ]
    },
    {
      icon: Users,
      title: 'Training & Awareness on Data Protection & Privacy',
      description: 'Human behaviour is one of the biggest risks to data security.',
      items: [
        'Responsible data handling',
        'Preventing accidental data exposure',
        'Email and sharing best practices',
        'Legal and contractual data requirements',
        'Privacy rights and obligations',
        'Secure work-from-home guidelines'
      ]
    },
  ]

  const benefits = [
    'Improved protection of personal, sensitive, and confidential data',
    'Stronger compliance with regulators and donor expectations',
    'Reduced risk of data breaches and identity theft',
    'Enhanced public trust in digital services and financial systems',
    'Increased operational efficiency and governance maturity',
    'Better incident readiness and response capabilities',
    'Strengthened organizational accountability and transparency'
  ]

  const deliverables = [
    'Data governance framework',
    'Data inventory & classification register',
    'Privacy impact assessment (where applicable)',
    'Gap analysis report & compliance roadmap',
    'Policy documents & templates',
    'Roles and responsibilities matrix',
    'Standard operating procedures (SOPs)',
    'Training materials and awareness guides'
  ]

  const whyChoose = [
    'Deep understanding of Sierra Leone\'s digital, legal, and regulatory environment',
    'Certified information security and data protection professionals',
    'Experience supporting government agencies, banks, telcos, NGOs & enterprises',
    'Strong alignment with international data governance standards',
    'Practical, realistic, and operationally achievable recommendations',
    'Recognized national leader in cybersecurity and digital skills development'
  ]

  const whoWeServe = [
    { icon: Building2, label: 'Government ministries, departments & agencies' },
    { icon: Landmark, label: 'Financial institutions & mobile money operators' },
    { icon: Phone, label: 'Telecom operators & ISPs' },
    { icon: Heart, label: 'Healthcare providers and hospitals' },
    { icon: GraduationCap, label: 'Universities and educational institutions' },
    { icon: Users, label: 'NGOs, international organizations & development partners' },
    { icon: Briefcase, label: 'Private sector enterprises' },
  ]

  const pressures = [
    'Regulatory expectations from government and sector regulators',
    'Donor and development partner data handling requirements',
    'Rising cybercrime, fraud, and identity theft',
    'Mobile money and financial service vulnerabilities',
    'Rapid cloud adoption without governance frameworks',
    'Weak data handling practices at employee level',
    'Growing demand for digital public services',
    'Need for privacy assurances from citizens and customers'
  ]

  const risks = [
    'Data breaches',
    'Financial penalties',
    'Reputation damage',
    'Service disruption',
    'Loss of citizen or customer trust'
  ]

  const frameworks = [
    'ISO 27001 / ISO 27002 – Information Security Management',
    'NIST Privacy Framework',
    'CIS Controls for Data Protection',
    'ISO 27701 (Privacy Information Management)',
    'GDPR-aligned privacy principles',
    'Regional policy frameworks across ECOWAS',
    'Sierra Leone regulatory expectations (NATCA, BSL, MDA policies)'
  ]

  const expectations = [
    'Protect citizen and customer data',
    'Guarantee confidentiality, integrity & availability',
    'Comply with regulatory and contractual obligations',
    'Manage data responsibly throughout its lifecycle',
    'Respond effectively to privacy and security incidents'
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-900 via-blue-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)`
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
              Data Protection, Privacy & Information Security Governance
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-8 max-w-4xl">
              Building a Secure, Trusted, and Compliant Digital Environment for Sierra Leone, Guinea & Liberia
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
              className="text-white space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                As digital adoption accelerates across West Africa, through government digital services, online banking, mobile money, cloud platforms, telecom networks, healthcare records, and enterprise systems, the volume of personal and sensitive data being collected, processed, and stored continues to rise. With this growth comes significant responsibility.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-semibold">
                Organizations are now expected to:
              </p>
              <ul className="space-y-3 text-gray-300 ml-6">
                {expectations.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-mauve-light font-bold mt-1">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-mauve-light leading-relaxed font-semibold">
                Knowledge Network Solutions (KNS) provides comprehensive Data Protection, Privacy & Information Security Governance services to help institutions build trust, ensure compliance, and strengthen their digital resilience.
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
                  src="https://cdn.prod.website-files.com/624717c641bda0f076a77654/62e92eb9040a2db2b804ec1f_Picture4b.png"
                  alt="Data Protection, Privacy & Information Security Governance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Critical Section */}
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
              Why Data Protection Matters in Sierra Leone, Guinea & Liberia
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <p className="text-lg text-gray-300 mb-6 font-semibold">
                Many organizations across the region face increasing pressure from:
              </p>
              <ul className="space-y-3 text-gray-300 mb-8">
                {pressures.map((pressure, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold mt-1">·</span>
                    <span>{pressure}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <p className="text-lg text-gray-300 mb-6 font-semibold">
                Without strong governance, organizations risk:
              </p>
              <ul className="space-y-3 text-gray-300 mb-8">
                {risks.map((risk, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold mt-1">·</span>
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-8 mt-8 text-center"
          >
            <p className="text-lg text-cyan-300 font-semibold">
              KNS helps institutions build strong, scalable, and compliant data protection frameworks that match international standards and local operational realities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Data Protection, Privacy & Governance Services
            </h2>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-4 bg-cyan-500/20 rounded-lg">
                      <Icon className="text-cyan-400" size={32} />
                    </div>
                    <div className="flex-1">
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
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
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
              Our Governance Approach (Aligned With Global Standards)
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              KNS incorporates the following frameworks in our governance model:
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {frameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-4 text-center"
                >
                  <p className="text-gray-300 text-sm">{framework}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-400 text-center">
              We combine global standards with local operational realities to create governance that works.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                Key Benefits for Sierra Leone, Guinea & Liberia Institutions
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                Deliverables You Receive
              </h2>
              <p className="text-gray-300 mb-6">
                Your organization receives:
              </p>
              <ul className="space-y-4">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FileText className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our Data Protection & Governance services are tailored for:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whoWeServe.map((item, index) => {
              const Icon = item.icon
              if (!Icon) return null
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start gap-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg p-4 hover:border-cyan-400/40 transition-all"
                >
                  <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <div className="flex items-center gap-2 flex-1">
                    <Icon className="text-cyan-400/60 flex-shrink-0" size={18} />
                    <p className="text-gray-300 text-sm">{item.label}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Organizations Choose KNS
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
              Protect Data. Strengthen Trust. Ensure Compliance.
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Data protection and privacy are essential for building a secure and trusted digital society across Sierra Leone, Guinea, and Liberia.
            </p>
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto">
              KNS helps organizations build governance structures, safeguard personal data, and comply with regulatory expectations, while enabling innovation and digital transformation.
            </p>
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto font-semibold">
              Let us help you build a strong, secure, and privacy-led organization.
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


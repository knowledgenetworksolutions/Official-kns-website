'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, ShieldCheck, Network, Globe, Smartphone, Cloud, Server, 
  Users, CheckCircle, Target, FileText, Search, AlertTriangle, Lock
} from 'lucide-react'

export default function PenetrationTestingPage() {
  const services = [
    {
      icon: Network,
      title: 'Network Penetration Testing',
      description: 'We test internal and external networks used across MDAs, banks, ISPs, NGOs, and enterprises.',
      items: [
        'Firewalls & perimeter security',
        'LAN/WAN, routers, and core switches',
        'Wi-Fi security and rogue access points',
        'Server and endpoint vulnerabilities',
        'Domain controller & Active Directory weaknesses'
      ]
    },
    {
      icon: Globe,
      title: 'Web Application Penetration Testing',
      description: 'As more Sierra Leonean services move online, including student portals, tax systems, banking apps, mobile apps, and MDA websites, web applications have become prime targets.',
      items: [
        'SQL injection',
        'Authentication bypass',
        'Cross-site scripting (XSS)',
        'API and backend security',
        'Payment system vulnerabilities',
        'Session hijacking',
        'Cloud-exposed applications'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Testing',
      description: 'With mobile-first services dominating the market (banking apps, fintech apps, telco services), we test:',
      items: [
        'API communication',
        'Device security',
        'Data storage',
        'Authorization and access control',
        'Business logic flaws'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Security Assessments',
      description: 'Many Sierra Leone institutions now use Azure, AWS, and shared hosting environments. We assess:',
      items: [
        'Identity & Access Management (IAM)',
        'Storage & database misconfigurations',
        'Cloud-hosted emails (Office 365)',
        'Access key / token exposure',
        'Virtual network vulnerabilities'
      ]
    },
    {
      icon: Server,
      title: 'Infrastructure & Server Security Assessment',
      description: 'Our team evaluates government data centers, enterprise IT, and telecom infrastructure including:',
      items: [
        'Servers and virtual machines',
        'Email and messaging systems',
        'Active Directory',
        'Network storage',
        'Backup systems'
      ]
    },
    {
      icon: Users,
      title: 'Social Engineering & Employee Security Testing',
      description: 'Human weaknesses are heavily exploited in Sierra Leone. We simulate:',
      items: [
        'Phishing attacks tailored to local context',
        'WhatsApp/SMS social engineering',
        'Impersonation attempts',
        'Physical security bypass tests'
      ]
    },
  ]

  const process = [
    {
      step: 1,
      title: 'Scoping & Engagement',
      description: 'We analyze your IT landscape, sector risks, and critical assets, considering Sierra Leone-specific vulnerabilities (weak passwords, shared credentials, unpatched systems, etc.).'
    },
    {
      step: 2,
      title: 'Intelligence Gathering',
      description: 'We map your exposure using legal and ethical reconnaissance.'
    },
    {
      step: 3,
      title: 'Vulnerability Discovery',
      description: 'We identify misconfigurations, insecure services, weak encryption, outdated systems, cloud risks, and more.'
    },
    {
      step: 4,
      title: 'Exploitation',
      description: 'We simulate controlled attacks to assess real-world impact.'
    },
    {
      step: 5,
      title: 'Privilege Escalation & Lateral Movement',
      description: 'We test if attackers can access sensitive data, administrative accounts, or critical systems.'
    },
    {
      step: 6,
      title: 'Reporting & Remediation Guidance',
      description: 'We provide clear, actionable recommendations tailored to Sierra Leone\'s infrastructure realities.'
    },
    {
      step: 7,
      title: 'Retesting & Validation',
      description: 'We verify that weaknesses have been fully mitigated.'
    },
  ]

  const benefits = [
    'Discover and fix exploitable vulnerabilities',
    'Prevent disruptions to national or business-critical services',
    'Protect sensitive citizen and customer data',
    'Strengthen compliance with national and international standards',
    'Meet requirements of donors, regulators, and partners',
    'Build trust in digital services and platforms',
    'Reduce operational, financial, and reputational risk'
  ]

  const deliverables = [
    'Executive summary for leadership teams',
    'Detailed technical findings',
    'Proof-of-concept exploit evidence',
    'Severity ratings and risk scores',
    'Remediation roadmap tailored to local capability',
    'Best-practice security recommendations',
    'Validation & retesting report'
  ]

  const whyChoose = [
    'Deep expertise in Sierra Leone\'s cybersecurity threat landscape',
    'Experience supporting government MDAs, telcos, banks & enterprises',
    'Certified cybersecurity professionals with global credentials',
    'A strong track record in national cybersecurity awareness initiatives',
    'Context-aware testing that considers bandwidth, infrastructure, and operational realities',
    'Confidential, ethical, and compliant testing practices'
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-gradient-to-b from-slate-900 via-blue-900 to-black overflow-hidden">
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
              Penetration Testing & Vulnerability Assessments
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-8 max-w-4xl">
              Strengthening Cybersecurity Across Sierra Leone's Expanding Digital Economy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-black to-slate-900">
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
                As Sierra Leone accelerates its digital transformation, through e-government systems, digital financial services, mobile money, online banking, electronic education platforms, telecom expansion, and cloud adoption, cyber threats have grown more sophisticated. Malware outbreaks, social engineering, insider threats, system misconfigurations, and external cyberattacks have affected institutions across government, banking, health, telecoms, and private enterprise.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                To stay secure, organizations must identify weaknesses before attackers do.
              </p>
              <p className="text-lg text-mauve-light leading-relaxed font-semibold">
                Knowledge Network Solutions (KNS) provides Sierra Leone's most comprehensive and nationally aligned Penetration Testing & Vulnerability Assessment (PT/VA) services, designed to safeguard institutions, protect customer data, and ensure operational resilience in a rapidly evolving threat landscape.
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiV1qGArCK3PKvO5l_6ZhnvItM9JSF8xoqQ&s"
                  alt="Penetration Testing & Vulnerability Assessments"
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
      <section className="py-10 sm:py-12 md:py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Penetration Testing Is Critical in Sierra Leone
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                With increased adoption of:
              </p>
              <ul className="space-y-2.5 text-gray-300 mb-6 ml-1 max-w-3xl">
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-bold mt-1.5 flex-shrink-0">·</span>
                  <span className="leading-relaxed">digital payments (Orange Money, Afrimoney, banks),</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-bold mt-1.5 flex-shrink-0">·</span>
                  <span className="leading-relaxed">online government services (NCRA, NRA, MoHS, MDA portals),</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-bold mt-1.5 flex-shrink-0">·</span>
                  <span className="leading-relaxed">cloud-based systems,</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-bold mt-1.5 flex-shrink-0">·</span>
                  <span className="leading-relaxed">telecom backbone infrastructure,</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-bold mt-1.5 flex-shrink-0">·</span>
                  <span className="leading-relaxed">educational and health digital platforms, and</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-bold mt-1.5 flex-shrink-0">·</span>
                  <span className="leading-relaxed">corporate IT modernization,</span>
                </li>
              </ul>
              <p className="text-lg text-gray-300 italic leading-relaxed">
                Sierra Leone's attack surface has significantly expanded.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 sm:p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Penetration Testing and Vulnerability Assessments help local organizations:
              </h3>
              <ul className="space-y-4">
                {[
                  'Prevent cyber incidents that disrupt public services or operations',
                  'Protect sensitive citizen and customer data',
                  'Meet donor, compliance, and regulatory expectations (NaTCA, Bank of Sierra Leone, Partners)',
                  'Reduce reputational and financial risks',
                  'Strengthen digital trust in an emerging digital economy'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-cyan-300 mt-6 font-medium">
                KNS provides the technical depth and local context required to protect the systems powering Sierra Leone's digitization.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-slate-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Penetration Testing & Vulnerability Services
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
                  className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 sm:p-8 hover:border-cyan-400/40 transition-all"
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
      <section className="py-10 sm:py-12 md:py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Sierra Leone-Aligned Testing Methodology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              KNS follows global frameworks adapted to the local environment:
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {['OWASP Top 10 for web & mobile', 'PTES (Penetration Testing Execution Standard)', 'NIST SP 800-115', 'MITRE ATT&CK', 'CIS Controls', 'Sierra Leone cybersecurity regulatory expectations'].map((framework, index) => (
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
              We consider: Local network configurations, Internet constraints, Cloud-hosting practices, Organizational maturity, Sector-specific requirements (banks, telcos, NGOs, MDAs)
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Process</h3>
            <div className="space-y-6">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-xl">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                Key Benefits for Sierra Leonean Institutions
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
                What You Receive
              </h2>
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

      {/* Why Choose Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Organizations Across Sierra Leone Choose KNS
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
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-mauve-dark to-mauve">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Secure Your Digital Future Today
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Cyberattacks in Sierra Leone are increasing, targeting financial institutions, government platforms, telecom infrastructure, and private enterprises. KNS helps you stay ahead with comprehensive penetration testing that reveals your weaknesses before attackers can exploit them.
            </p>
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto font-semibold">
              Protect your systems. Safeguard your customers. Strengthen your resilience.
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


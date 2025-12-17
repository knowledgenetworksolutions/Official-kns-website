'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, ShieldCheck, FileCheck, Lock, Database, AlertTriangle, 
  CheckCircle, Target, FileText, Search, Users, Globe, Award, Server
} from 'lucide-react'

export default function ITAuditPage() {
  const services = [
    {
      icon: ShieldCheck,
      title: 'IT General Controls (ITGC) Audit',
      description: 'We assess the foundational controls that ensure your IT environment is secure, reliable, and well-governed.',
      items: [
        'Access controls & privilege management',
        'Change management processes',
        'IT operations management',
        'Backup & recovery controls',
        'User account lifecycle management',
        'Physical & environmental controls',
        'Network and infrastructure governance'
      ]
    },
    {
      icon: FileCheck,
      title: 'Application Controls Review',
      description: 'For organizations using banking systems, ERP platforms, student information systems, HR/payroll tools, and custom applications, we evaluate:',
      items: [
        'Input validations',
        'Processing & workflow controls',
        'Output accuracy',
        'Authorization & approval controls',
        'Audit trails and monitoring',
        'Data integrity & consistency'
      ]
    },
    {
      icon: Lock,
      title: 'Information Security Audit (ISO 27001 Aligned)',
      description: 'We benchmark your security posture against global best practices including ISO/IEC 27001, NIST Cybersecurity Framework, CIS Critical Security Controls, and local data protection expectations.',
      items: [
        'ISMS maturity',
        'Information security policies',
        'Asset management',
        'Risk management practices',
        'Technical and operational controls',
        'Incident readiness',
        'Logging & monitoring'
      ]
    },
    {
      icon: Database,
      title: 'Data Protection & Privacy Compliance',
      description: 'With growing attention to data privacy across Sierra Leone, Guinea, and Liberia, especially for financial services, health systems, and government platforms, we assess your readiness for:',
      items: [
        'Data protection policies',
        'Consent management',
        'Data lifecycle governance',
        'Cross-border data transfer controls',
        'PIIs (Personally Identifiable Information) protections',
        'Privacy impact assessments',
        'User rights & data access requests'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'IT Risk Assessment & Control Mapping',
      description: 'We evaluate risk exposure across your IT environment and map risks to mitigation controls, including:',
      items: [
        'Infrastructure',
        'Cloud platforms',
        'Networks',
        'Applications',
        'Endpoints',
        'Third-party services',
        'Business processes'
      ]
    },
    {
      icon: Globe,
      title: 'Compliance Support for Regulatory & Donor Requirements',
      description: 'Across West Africa, regulators and development partners (World Bank, UN agencies, MCC, AfDB, EU partners) are emphasizing cybersecurity and IT governance.',
      items: [
        'Banking sector regulatory expectations',
        'Telecom regulatory guidelines',
        'Public sector service-delivery requirements',
        'Donor-funded project standards',
        'Internal governance mandates'
      ]
    },
  ]

  const methodology = [
    {
      step: 1,
      title: 'Planning & Scoping',
      description: 'We identify objectives, business processes, regulatory requirements, and risk exposure.'
    },
    {
      step: 2,
      title: 'Evidence Collection & Documentation Review',
      description: 'We examine policies, procedures, infrastructure diagrams, system configurations, logs, and security tools.'
    },
    {
      step: 3,
      title: 'Control Testing',
      description: 'We validate operational, technical, and governance controls through interviews, walkthroughs, and system inspections.'
    },
    {
      step: 4,
      title: 'Gap Analysis',
      description: 'We identify weaknesses, compliance issues, and areas of governance risk.'
    },
    {
      step: 5,
      title: 'Reporting & Remediation Guidance',
      description: 'We deliver practical, prioritized, and context-aware remediation recommendations.'
    },
    {
      step: 6,
      title: 'Validation & Follow-Up Audits',
      description: 'We confirm improvements and ensure measurable progress.'
    },
  ]

  const benefits = [
    'Strengthen governance and digital accountability',
    'Improve cybersecurity maturity and resilience',
    'Identify compliance gaps before regulatory audits',
    'Reduce operational and financial risk exposure',
    'Protect sensitive citizen and customer data',
    'Improve IT service delivery and organizational efficiency',
    'Increase leadership and board confidence',
    'Support accreditation, certification, and donor reporting requirements'
  ]

  const deliverables = [
    'Executive-level summary for management',
    'Detailed findings, root causes, and risk ratings',
    'Supporting evidence and documentation',
    'Control maturity assessment',
    'Compliance scoring (ISO, NIST, CIS alignment)',
    'Remediation roadmap',
    'Follow-up validation report'
  ]

  const whyChoose = [
    'Deep experience with Sierra Leone\'s digital landscape',
    'Proven expertise supporting MDAs, telcos, banks, NGOs, and enterprises',
    'Certified IS auditors and cybersecurity professionals (CISA, CISSP, ISO Lead Auditor)',
    'Governance-focused perspective aligned with West African operational realities',
    'Strong reputation as Sierra Leone\'s Digital Skills Champion 2025',
    'Ability to contextualize global standards to local infrastructure',
    'Confidential and professional audit processes'
  ]

  const risks = [
    'Weak system controls',
    'Insider threats',
    'Misconfigurations',
    'Lack of IT governance frameworks',
    'Poor access management',
    'Data protection gaps',
    'Non-compliance with emerging policies or donor expectations',
    'Rising cyber threats and regional attacks'
  ]

  const frameworks = [
    'ISO 27001 / 27002',
    'NIST CSF',
    'COBIT 2019',
    'CIS Controls',
    'ISACA Audit and Assurance Standards'
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-16 md:pb-20 bg-gradient-to-b from-slate-900 via-blue-900 to-black overflow-hidden">
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
              IT/IS Audit & Security Compliance Reviews
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-8 max-w-4xl">
              Strengthening Governance, Compliance & Digital Trust Across Sierra Leone, Guinea & Liberia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-black to-slate-900">
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
                Modern organizations depend on technology for their daily operations, but without strong governance, secure processes, and compliance frameworks, these digital systems become vulnerable to failure, misuse, or attack.
              </p>
              <p className="text-lg text-mauve-light leading-relaxed font-semibold">
                KNS delivers comprehensive IT/IS Audit & Security Compliance Review services designed to help institutions in Sierra Leone, and the broader Mano River region, align their digital environments with internationally recognized standards such as ISO 27001, NIST, and CIS Controls. Our audits strengthen governance, ensure accountability, improve operational resilience, and support regulatory obligations.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With cyber threats rising and digital systems expanding across government MDAs, banks, telecom providers, NGOs, and enterprises, strong information security governance has never been more critical.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-medium">
                KNS equips leadership teams with the insight, assurance, and actionable guidance needed to safeguard digital operations and maintain stakeholder confidence.
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
                  src="https://techlinqconsulting.com.au/wp-content/uploads/2021/07/audit.png"
                  alt="IT/IS Audit & Security Compliance Reviews"
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
      <section className="py-14 sm:py-16 md:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why IT/IS Audits Matter in Sierra Leone, Guinea & Liberia
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
              <p className="text-lg text-gray-300 mb-6">
                As Sierra Leone and neighbouring countries move toward digital transformation, through e-governance, mobile money, core banking systems, telecom expansion, cloud adoption, public service portals, and donor-funded digital platforms, organizations face increasing risks:
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 sm:p-8"
            >
              <p className="text-lg text-gray-300 mb-6">
                Regulators and development partners are demanding stronger governance, clearer reporting, and demonstrable compliance.
              </p>
              <p className="text-cyan-300 font-semibold text-xl">
                KNS provides the assurance and governance capability needed to meet these expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-slate-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our IT/IS Audit & Compliance Review Services
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
      <section className="py-14 sm:py-16 md:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Audit Methodology (Based on Global Standards)
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              KNS follows a structured governance and audit framework aligned with:
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-4 mb-8">
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
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {methodology.map((item, index) => (
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
      <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-black to-slate-900">
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
                Your final audit report includes:
              </p>
              <ul className="space-y-4">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FileText className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                    <span className="text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 mt-6 text-sm italic">
                This ensures both technical and non-technical stakeholders understand what must be improved.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
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
              Strengthen Governance. Build Trust. Ensure Compliance.
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              With digital systems becoming the backbone of public and private sector operations across Sierra Leone, Guinea, and Liberia, strong IT governance is no longer optional. It is essential.
            </p>
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto">
              KNS helps organizations implement the right controls, meet international standards, satisfy regulators, and improve overall digital readiness.
            </p>
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto font-semibold">
              Let us help you secure your systems, improve compliance, and strengthen organizational resilience.
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


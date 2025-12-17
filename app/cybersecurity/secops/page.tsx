'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, ShieldCheck, Activity, Eye, AlertTriangle, Settings, 
  CheckCircle, Target, FileText, Search, Users, Building2, Landmark, Phone,
  GraduationCap, Heart, Briefcase, Server, Globe, Award, TrendingUp
} from 'lucide-react'

export default function SecOpsPage() {
  const services = [
    {
      icon: ShieldCheck,
      title: 'Security Operations Governance & Oversight',
      description: 'We design and implement governance frameworks that ensure your cybersecurity operations run smoothly, efficiently, and in alignment with organizational objectives.',
      items: [
        'Defining SOC policies, roles, and responsibilities',
        'Establishing governance committees and reporting structures',
        'Enhancing accountability for cybersecurity decision-making',
        'Aligning security operations with ISO 27001 and NIST CSF',
        'Developing operational procedures and guidelines'
      ]
    },
    {
      icon: Eye,
      title: 'Log Monitoring & Threat Analysis Support',
      description: 'Monitoring logs and events across your systems is critical for detecting early signs of compromise.',
      items: [
        'Configure and optimize SIEM platforms',
        'Analyze security logs from servers, firewalls, endpoints & applications',
        'Build threat detection rules',
        'Identify suspicious activity and potential breaches',
        'Develop escalation and response workflows'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Incident Handling Processes & Escalation Frameworks',
      description: 'When incidents occur, a fast and structured response can minimize damage.',
      items: [
        'Incident response (IR) process development',
        'Playbooks and runbooks for common incident types',
        'RACI matrices for incident responsibilities',
        'Communication protocols for management, regulators & stakeholders',
        'Post-incident reviews and lessons learned',
        'Support for IR team capability development'
      ]
    },
    {
      icon: Activity,
      title: 'SOC Readiness & Capability Assessments',
      description: 'Whether you have an internal Security Operations Center (SOC), outsource monitoring, or rely on IT teams, KNS evaluates your readiness to detect, respond to, and recover from cyber threats.',
      items: [
        'People, skills, and staffing requirements',
        'Technology stack and capability gaps',
        'Processes, policies & documentation',
        'Monitoring coverage and detection capability',
        'Incident response and escalation quality',
        '24/7 operational readiness'
      ]
    },
    {
      icon: Settings,
      title: 'Guidance on Tools, Platforms & Operational Maturity',
      description: 'Organizations often invest in security tools but struggle to use them effectively. KNS provides unbiased advisory on:',
      items: [
        'SIEM systems (Splunk, Microsoft Sentinel, QRadar, Elastic)',
        'EDR/XDR platforms',
        'Firewalls & IDS/IPS systems',
        'Cloud security tools (Defender for Cloud, AWS Security Hub)',
        'Identity & Access Management solutions',
        'Process optimization and automation',
        'Staffing models and skill development'
      ]
    },
  ]

  const benefits = [
    'Enhanced visibility into threats and vulnerabilities',
    'Faster incident detection and reduced attack impact',
    'Clear operational roles and responsibilities',
    'Improved compliance with regulators (Bank of Sierra Leone, NaTCA)',
    'Stronger alignment with global auditing standards',
    'Increased leadership and board confidence',
    'Reduced operational downtime and business disruption',
    'A more mature, efficient, and resilient cybersecurity operation'
  ]

  const deliverables = [
    'SOC readiness assessment report',
    'Risk-based operational improvement roadmap',
    'Incident response framework and playbooks',
    'Governance and reporting templates',
    'Monitoring and alerting matrices',
    'Tool optimization recommendations',
    'Operational KPI dashboard templates'
  ]

  const whyChoose = [
    'Deep understanding of the cybersecurity and threat landscape of Sierra Leone & the Mano River region',
    'Extensive experience supporting SOCs, NOCs, regulators, banks, and telecom operators',
    'Certified cybersecurity and operations professionals (CISSP, CISM, ISO Lead Auditor, Ethical Hackers)',
    'Vendor-neutral advisory backed by global best practices',
    'Practical, realistic, and scalable recommendations',
    'Strong track record supporting national cybersecurity programs and capacity-building'
  ]

  const whoWeServe = [
    { icon: Building2, label: 'Government ministries, agencies, and digital service providers' },
    { icon: Landmark, label: 'Banks, MFIs, and digital payment institutions' },
    { icon: Phone, label: 'Telecom operators and ISPs' },
    { icon: Users, label: 'NGOs and international development agencies' },
    { icon: Heart, label: 'Healthcare providers and hospitals' },
    { icon: GraduationCap, label: 'Universities, schools, and research institutions' },
    { icon: Briefcase, label: 'Enterprises of all sizes' },
    { icon: Server, label: 'Cloud-first businesses and remote-work organizations' },
  ]

  const risks = [
    'Increased reliance on cloud platforms (Office 365, AWS, Azure)',
    'Remote work and Bring Your Own Device (BYOD) practices',
    'Growth of mobile money and digital banking',
    'Expansion of government digital platforms and e-services',
    'Regional trends in fraud, phishing, and business email compromise',
    'Limited local cybersecurity operational expertise',
    'Insufficient 24/7 monitoring capabilities'
  ]

  const frameworks = [
    'MITRE ATT&CK (threat detection & adversary mapping)',
    'NIST CSF (governance & operational maturity)',
    'ISO 27035 (incident management)',
    'CIS Controls (operational security hardening)',
    'SOC Maturity Models (SANS & Gartner)'
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
              Security Operations Oversight & Advisory
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-8 max-w-4xl">
              Operationalizing Cyber Defence for Continuous Protection Across Sierra Leone, Guinea & Liberia
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
                In today's rapidly evolving threat landscape, organizations across Sierra Leone and the Mano River region face increasingly complex cyber challenges, ranging from malware campaigns and phishing attempts to insider threats, data breaches, and targeted attacks against telecom, financial, and government systems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Many institutions now have firewalls, antivirus solutions, SIEM tools, or cloud-based security platforms, but without proper security operations governance, these tools deliver only partial protection.
              </p>
              <p className="text-lg text-mauve-light leading-relaxed font-semibold">
                Knowledge Network Solutions (KNS) provides comprehensive Security Operations Oversight & Advisory services to strengthen your day-to-day cyber defence capability and ensure continuous protection of your digital environment.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-medium">
                We help organizations build operational maturity, monitor threats proactively, respond effectively, and align cybersecurity operations with strategic goals.
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
                  src="https://veritis.com/wp-content/uploads/2022/07/Operational-Security.jpg"
                  alt="Security Operations Oversight & Advisory"
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
              Why Security Operations Matter in Sierra Leone and the Region
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
              <p className="text-lg text-gray-300 mb-6">
                As Sierra Leone, Guinea, and Liberia digitally transform, across banking, telecoms, government, education, and the private sector, new cyber risks have emerged:
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
              <p className="text-xl text-cyan-300 font-semibold mb-4">
                Security operations are no longer optional. They are the backbone of cyber resilience.
              </p>
              <p className="text-lg text-gray-300">
                KNS provides the expertise, structure, and operational oversight required to run effective, efficient, and mature cyber defence operations.
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
              Our Security Operations Oversight & Advisory Services
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
              Our Approach (Aligned With Global Standards)
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              KNS applies globally recognized frameworks for security operations:
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
              We combine these frameworks with real-world threat intelligence specific to Sierra Leone, Guinea, and Liberia, ensuring relevance and effectiveness.
            </p>
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
                Key Benefits for Organizations in Sierra Leone & the Region
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
                Your engagement with KNS includes:
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
              Who We Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our Security Operations Oversight services serve:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-slate-800 to-black">
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
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Ahead of Cyber Threats with KNS
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              In today's digital environment, cybersecurity must be continuous, not reactive. KNS provides the operational oversight, expertise, and governance required to keep your organization protected 24/7.
            </p>
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto font-semibold">
              Let us help you mature your security operations and strengthen your cyber defence capability.
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


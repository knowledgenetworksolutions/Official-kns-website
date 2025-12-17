'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, ShieldCheck, AlertTriangle, Target, Database, FileText, 
  CheckCircle, Search, Eye, TrendingUp, Users, Building2, Landmark, Phone,
  GraduationCap, Heart, Briefcase, Server, Globe, Award
} from 'lucide-react'

export default function RiskManagementPage() {
  const services = [
    {
      icon: AlertTriangle,
      title: 'Threat & Risk Assessments',
      description: 'We evaluate the likelihood and potential impact of cyber threats targeting your systems, processes, people, and data.',
      items: [
        'Internal and external threats',
        'Technical vulnerabilities',
        'Process and governance weaknesses',
        'Sector-specific risks (banking, telecom, government, NGOs)',
        'Fraud and social engineering vectors',
        'Cloud and third-party risks'
      ]
    },
    {
      icon: Eye,
      title: 'Security Posture Evaluations',
      description: 'KNS conducts a holistic maturity assessment to measure how prepared your organization is to withstand cyberattacks.',
      items: [
        'Security tools and configurations',
        'Policy and governance frameworks',
        'Workforce cyber awareness',
        'Incident response readiness',
        'Compliance alignment (ISO 27001, NIST, CIS Controls)'
      ]
    },
    {
      icon: Database,
      title: 'Asset Classification & Criticality Mapping',
      description: 'Understanding what you need to protect, and how valuable it is, is essential.',
      items: [
        'Critical business applications',
        'Databases and sensitive information',
        'Financial systems and transactions',
        'Networks and telecom infrastructure',
        'Cloud and on-premise platforms',
        'Operational systems supporting public services'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Business Impact Analysis (BIA)',
      description: 'We analyze the operational, financial, regulatory, and reputational impact of various cyber incidents.',
      items: [
        'Identifying mission-critical processes',
        'Determining acceptable downtime',
        'Quantifying potential business disruption',
        'Mapping dependencies across systems and departments'
      ]
    },
    {
      icon: Target,
      title: 'Preventive & Corrective Action Planning',
      description: 'Based on our findings, we develop customized action plans that align with your capacity and business goals.',
      items: [
        'Implementing enhanced security controls',
        'Strengthening access and identity management',
        'Hardening systems and infrastructure',
        'Improving security policies and documentation',
        'Enhancing monitoring and detection capabilities',
        'Establishing clear response and escalation procedures'
      ]
    },
    {
      icon: FileText,
      title: 'Risk Monitoring & Reporting Frameworks',
      description: 'Effective cyber risk management requires ongoing oversight, not one-off actions.',
      items: [
        'Continuous risk monitoring',
        'Periodic risk reassessments',
        'KPI and risk metric dashboards',
        'Board-level and management reporting',
        'Regulatory compliance updates',
        'Vulnerability and incident trend tracking'
      ]
    },
  ]

  const benefits = [
    'Identify cyber risks before they cause business disruption',
    'Improve security governance and operational readiness',
    'Strengthen compliance with donor and regulatory frameworks',
    'Build a risk-aware culture within your organization',
    'Prioritize investments based on real impact',
    'Protect sensitive citizen, customer, and business data',
    'Enable leadership to make informed, strategic decisions',
    'Enhance resilience and business continuity'
  ]

  const deliverables = [
    'A comprehensive risk assessment report',
    'Heat maps, risk scores, and prioritization matrices',
    'Detailed asset classification registers',
    'Impact analysis and scenario modeling',
    'Mitigation roadmap with timelines & responsibilities',
    'Board-level summary and recommendations',
    'Follow-up review and maturity improvement plan'
  ]

  const whyChoose = [
    'Deep understanding of Sierra Leone\'s digital risks and sector realities',
    'Experience working with banks, MDAs, telcos, NGOs, and enterprises',
    'Certified risk management and cybersecurity professionals',
    'Local context + global standards approach',
    'Practical, actionable, and tailored recommendations',
    'Proven track record supporting national cybersecurity initiatives',
    'Commitment to confidentiality and professional excellence'
  ]

  const whoWeServe = [
    { icon: Building2, label: 'Government ministries, departments & agencies (MDAs)' },
    { icon: Landmark, label: 'Banks, microfinance institutions & financial service providers' },
    { icon: Phone, label: 'Telecom operators & ISPs' },
    { icon: GraduationCap, label: 'Universities, schools & educational institutions' },
    { icon: Users, label: 'NGOs and development agencies' },
    { icon: Heart, label: 'Healthcare institutions' },
    { icon: Briefcase, label: 'Private sector enterprises of all sizes' },
  ]

  const digitalEvolution = [
    'Government MDAs now operate online portals and data systems',
    'Banks rely heavily on core banking, internet banking and mobile money',
    'Telecoms operate nationwide digital communication networks',
    'Universities and hospitals maintain sensitive digital records',
    'SMEs and NGOs run their operations on cloud and hosted platforms'
  ]

  const risks = [
    'Weak controls or outdated systems',
    'Misconfigured infrastructure',
    'Insider threats',
    'Increasing phishing, fraud, and social engineering attacks',
    'Lack of asset visibility',
    'Limited cybersecurity maturity',
    'Gaps in regulatory compliance'
  ]

  const frameworks = [
    'ISO 27005 (Information Security Risk Management)',
    'NIST Risk Management Framework (RMF)',
    'COBIT Governance Principles',
    'CIS Controls Implementation',
    'National and sector-specific policies in Sierra Leone',
    'Real-world threat intelligence from West Africa'
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
              Security Risk Identification & Mitigation Planning
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-8 max-w-4xl">
              Transforming Cyber Risk Into Strategic Advantage for Sierra Leone, Guinea & Liberia
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
                In an increasingly connected world, organizations across Sierra Leone and the Mano River region face rising cybersecurity threats, operational disruptions, and technology-related risks. With government digital platforms expanding, banks modernizing financial systems, telecom operators introducing new technologies, and enterprises moving to cloud-based environments, the risk exposure continues to grow.
              </p>
              <p className="text-lg text-mauve-light leading-relaxed font-semibold">
                KNS provides comprehensive Security Risk Identification & Mitigation Planning services designed to help institutions understand their vulnerabilities, quantify their risks, and develop practical, scalable strategies to protect critical assets.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our approach is rooted in global best practices, but adapted to the realities of West African infrastructure, regulatory requirements, resource constraints, and operational conditions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-medium">
                We help leaders make informed decisions, strengthen governance, improve resilience, and ensure long-term protection of their digital environment.
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzclUzgn89tlcJ5xEWagSBM-6r1ObU4byLc7WUtkm49Dpq0AbX5_2QhJgNbLuctVVrrjE&usqp=CAU"
                  alt="Security Risk Identification & Mitigation Planning"
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
              Why Cyber Risk Identification Matters in Sierra Leone
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
                Sierra Leone\'s digital evolution has accelerated in recent years:
              </p>
              <ul className="space-y-3 text-gray-300 mb-8">
                {digitalEvolution.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold mt-1">·</span>
                    <span>{item}</span>
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
                But with this progress comes new risks:
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
            className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 sm:p-8 mt-8 text-center"
          >
            <p className="text-xl text-cyan-300 font-semibold mb-4">
              Cyber risk is now a strategic leadership issue, not just an IT concern.
            </p>
            <p className="text-lg text-gray-300">
              KNS supports institutions to identify, assess, and manage these risks with precision and professionalism.
            </p>
          </motion.div>
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
              Our Security Risk Identification & Mitigation Services
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
              Our Approach (Aligned With Global Standards)
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              KNS uses a combined methodology based on:
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
              We tailor these frameworks to the cybersecurity maturity and infrastructure realities of Sierra Leone, Guinea, and Liberia.
            </p>
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
              Who We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              KNS provides cyber risk management services to:
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
      <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-slate-800 to-black">
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
      <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Build Resilience. Protect Your Future. Strengthen Governance.
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Security risk management is essential for every organization operating in Sierra Leone, Guinea, and Liberia, regardless of size or sector.
            </p>
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto">
              KNS helps you identify critical risks, protect your digital assets, and build long-term resilience in a rapidly evolving threat landscape.
            </p>
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto font-semibold">
              Let us help you understand your risk, and build a safer, stronger future for your organization.
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


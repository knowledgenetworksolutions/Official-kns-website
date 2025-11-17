'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, Server, Headphones, Wrench, ShieldCheck, Activity, Users, Package,
  Briefcase, CheckCircle, Award, Globe, Star, Building2, Landmark, GraduationCap,
  Heart, Zap, FileText, Target
} from 'lucide-react'

export default function OutsourcingManagedServicesPage() {
  const services = [
    {
      icon: Server,
      title: 'Managed ICT Infrastructure Services',
      description: 'Let KNS manage your IT environment while you focus on your core business. End-to-end management of servers, storage, networks, cloud environments, and endpoints.',
      tagline: 'Focus on Your Core Business',
      link: '/outsourcing-managed-services/ict-infrastructure'
    },
    {
      icon: Headphones,
      title: 'Managed Service Desk & Helpdesk Outsourcing',
      description: 'Reliable first- and second-line technical support for your users. Tier 1 & Tier 2 support, ticketing, remote troubleshooting, and 24/7 coverage options.',
      tagline: 'Reliable Technical Support',
      link: '/outsourcing-managed-services/service-desk'
    },
    {
      icon: Wrench,
      title: 'Telecom Field Maintenance & Network Operations',
      description: 'Ensuring your telecom infrastructure remains online, always. Tower maintenance, radio alignment, fiber optic maintenance, and emergency break-fix.',
      tagline: 'Always Online Infrastructure',
      link: '/outsourcing-managed-services/telecom-maintenance'
    },
    {
      icon: ShieldCheck,
      title: 'Preventive & Corrective Maintenance Services',
      description: 'Proactive maintenance that prevents system failures before they occur. Routine maintenance cycles with SLA-based corrective maintenance guarantees.',
      tagline: 'Prevent Before It Fails',
      link: '/outsourcing-managed-services/maintenance'
    },
    {
      icon: Activity,
      title: 'Network Monitoring & NOC-lite Services',
      description: 'Visibility and control over your network, 24/7. Monitor connectivity, server health, security logs, and bandwidth utilization with early failure detection.',
      tagline: '24/7 Network Visibility',
      link: '/outsourcing-managed-services/network-monitoring'
    },
    {
      icon: Users,
      title: 'Field Engineering & Onsite Technical Support',
      description: 'Skilled engineers deployed where you need them. System installations, hardware replacement, cabling, site surveys, and onsite troubleshooting.',
      tagline: 'Engineers Where You Need Them',
      link: '/outsourcing-managed-services/field-engineering'
    },
    {
      icon: Package,
      title: 'Spare Parts, Inventory & Asset Management',
      description: 'Efficient control over your ICT and telecom assets. Spare parts stock, asset tracking, warranty management, and lifecycle documentation.',
      tagline: 'Efficient Asset Control',
      link: '/outsourcing-managed-services/asset-management'
    },
    {
      icon: Briefcase,
      title: 'Business Process Outsourcing (BPO) Support',
      description: 'Operational excellence behind the scenes. Data entry, document verification, case processing, order fulfilment, and administrative processes.',
      tagline: 'Operational Excellence',
      link: '/outsourcing-managed-services/bpo-support'
    },
  ]

  const engagementModels = [
    {
      title: 'Fully Managed Services',
      description: 'KNS provides and manages the entire operation end-to-end.'
    },
    {
      title: 'Co-Managed Services',
      description: 'Shared responsibility between your internal team and KNS.'
    },
    {
      title: 'Onsite Staffing & Dedicated Technicians',
      description: 'Full-time staff deployed to your offices.'
    },
    {
      title: 'Remote Support + Onsite Dispatch',
      description: '24/7 remote monitoring with onsite escalation capability.'
    },
  ]

  const whyChoose = [
    {
      icon: Award,
      title: 'Highly Skilled Technical Teams',
      description: 'Experienced engineers, technicians, helpdesk agents, and ICT specialists.'
    },
    {
      icon: Target,
      title: 'SLA-Driven Service Delivery',
      description: 'Predictable, measurable, and guaranteed service levels.'
    },
    {
      icon: Globe,
      title: 'National Presence Across Sierra Leone',
      description: 'With rapid field response to regional cities and rural districts.'
    },
    {
      icon: Star,
      title: 'Multidisciplinary Expertise',
      description: 'ICT, telecoms, cybersecurity, digital transformation, and CX operations.'
    },
    {
      icon: Zap,
      title: 'Cost-Effective Outsourcing Models',
      description: 'Optimised staffing and operational savings.'
    },
    {
      icon: CheckCircle,
      title: 'Compliance-Ready',
      description: 'Aligned with the Cybersecurity Act, ITIL, ISO frameworks, and industry best practices.'
    },
  ]

  const industries = [
    { icon: Briefcase, label: 'Telecoms & ISP Operators' },
    { icon: Landmark, label: 'Banks & Financial Institutions' },
    { icon: Building2, label: 'Government MDAs' },
    { icon: Zap, label: 'Utilities & Service Providers' },
    { icon: Users, label: 'NGOs & Development Partners' },
    { icon: Briefcase, label: 'Enterprises & Corporate Organisations' },
    { icon: GraduationCap, label: 'Universities & Educational Institutions' },
    { icon: Heart, label: 'Healthcare Facilities' },
    { icon: Globe, label: 'Public Service Portals & Citizen Support Systems' },
  ]

  const framework = [
    'Assessment & Onboarding',
    'Design & SLA Agreement',
    'Deployment & Knowledge Transfer',
    'Monitoring & Continuous Improvement',
    'Reporting & Governance'
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1A3A] via-[#0A1A3A] to-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 15 }).map((_, i) => (
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Outsourcing & Managed Services
            </h1>
            <p className="text-xl md:text-2xl text-mauve-light font-semibold mb-8 max-w-4xl">
              Operational Excellence. Cost Efficiency. Reliable 24/7 Support.
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
                Running modern ICT, telecom, and digital infrastructures requires skilled teams, continuous monitoring, proactive maintenance, and well-structured processes. Yet many organisations struggle with limited internal capacity, rising operational costs, skills shortages, or the need for 24/7 support.
              </p>
              <p className="text-lg text-mauve-light leading-relaxed font-semibold">
                Knowledge Network Solutions (KNS) provides comprehensive Outsourcing & Managed Services that help organisations reduce operational burden, increase availability, improve service quality, and focus on their core mission.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We take on the day-to-day management of IT, telecoms, service desks, field engineering, and support operations, delivering reliability, predictability, and measurable results.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our managed services are trusted by government agencies, banks, telcos, NGOs, hospitals, universities, and enterprises across Sierra Leone and the Mano River region.
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
                  src="https://callforceoutsourcing.com/wp-content/uploads/2022/01/The-South-African-GBS-sector-1024x724.jpg"
                  alt="Outsourcing & Managed Services"
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
              Our Managed Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete suite of outsourcing and managed services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-mauve-light text-xs font-medium mb-3">
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

      {/* Engagement Models Section */}
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
              Engagement Models
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the model that fits your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-mauve/20 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {model.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {model.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose KNS Section */}
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
              Why Organisations Choose KNS
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

      {/* Industries We Serve Section */}
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
              Industries We Serve
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon
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
                    {industry.label}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Framework Section */}
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
              Our Managed Services Operation Framework
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {framework.map((step, index) => (
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
              Ready to Improve Your Operational Efficiency?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              KNS is ready to become your trusted partner for stable, secure, and cost-effective ICT and telecom operations. Let's help you reduce downtime, manage complexity, and deliver uninterrupted services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Request a Managed Services Proposal
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Book an Infrastructure Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


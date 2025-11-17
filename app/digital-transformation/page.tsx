'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, Briefcase, Target, Network, Cloud, Zap, BarChart, ShieldCheck,
  Building2, CheckCircle, Award, Users, Globe, Star, FileText
} from 'lucide-react'

export default function DigitalTransformationPage() {
  const services = [
    {
      icon: Target,
      title: 'Digital Transformation Strategy & Roadmapping',
      description: 'Plan your digital future with confidence. KNS helps organisations evaluate their current digital maturity, define a vision, and build practical roadmaps that align technology with business goals.',
      tagline: 'Plan Your Digital Future',
      link: '/digital-transformation/transformation-strategy'
    },
    {
      icon: Network,
      title: 'Enterprise Architecture (Business, Data, Applications, Technology)',
      description: 'Build systems that work together, not in silos. We design enterprise-wide architecture frameworks that streamline processes, reduce duplication, and ensure coherent, integrated digital operations.',
      tagline: 'Align Your Systems',
      link: '/digital-transformation/enterprise-architecture'
    },
    {
      icon: Cloud,
      title: 'Cloud & Hybrid Infrastructure Modernisation',
      description: 'Secure, scalable infrastructure for the modern organisation. Whether migrating email, applications, or full data centers, KNS modernises your environment with cloud and hybrid solutions for reliability, flexibility, and efficiency.',
      tagline: 'Modernize Your Infrastructure',
      link: '/digital-transformation/cloud-infrastructure'
    },
    {
      icon: Zap,
      title: 'Business Process Automation & Workflow Redesign',
      description: 'Automate the routine. Accelerate performance. We map, redesign, and automate workflows using low-code and no-code platforms to eliminate paper processes, reduce delays, and improve productivity.',
      tagline: 'Digitize Your Processes',
      link: '/digital-transformation/process-automation'
    },
    {
      icon: BarChart,
      title: 'Data, Analytics & Reporting (Power BI & More)',
      description: 'Turn data into decisions, fast. KNS builds data strategies, integration pipelines, and Power BI dashboards that create a single source of truth for leadership, operations, and performance tracking.',
      tagline: 'Decisions Powered by Data',
      link: '/digital-transformation/data-analytics'
    },
    {
      icon: ShieldCheck,
      title: 'IT Governance, Risk & Compliance (GRC)',
      description: 'Strong governance for sustainable technology. From policy development to risk frameworks and compliance alignment (ISO, NIST, COBIT), we help organisations manage ICT responsibly and securely.',
      tagline: 'Govern Technology Wisely',
      link: '/digital-transformation/it-governance'
    },
    {
      icon: Building2,
      title: 'Smart Government & Digital Public Services',
      description: 'Citizen-centered digital services for modern governance. KNS supports e-services, portals, digital identity integration, interoperability, and digital records, empowering governments to deliver faster, transparent, and accessible services.',
      tagline: 'Digital Public Service Excellence',
      link: '/digital-transformation/smart-government'
    },
  ]

  const whyChoose = [
    {
      icon: Award,
      title: 'End-to-End Solutions',
      description: 'From strategy to implementation, we deliver complete digital transformation services.'
    },
    {
      icon: Users,
      title: 'People-Centered Approach',
      description: 'Technology that works for people, not the other way around.'
    },
    {
      icon: Globe,
      title: 'Regional Expertise',
      description: 'Deep understanding of Sierra Leone and Mano River region digital transformation needs.'
    },
    {
      icon: Star,
      title: 'Proven Track Record',
      description: 'Successfully supporting government, enterprise, and development partner initiatives.'
    },
    {
      icon: Zap,
      title: 'Accelerated Transformation',
      description: 'Expertise, structure, and support to accelerate your digital journey.'
    },
    {
      icon: CheckCircle,
      title: 'Strategic Alignment',
      description: 'Technology solutions that align with business goals and operational realities.'
    },
  ]

  const whoWeServe = [
    { icon: Building2, label: 'Government Ministries & Agencies' },
    { icon: Briefcase, label: 'Private Enterprises' },
    { icon: Users, label: 'Development Partners & NGOs' },
    { icon: Globe, label: 'International Organizations' },
    { icon: Building2, label: 'Public Sector Institutions' },
    { icon: Briefcase, label: 'Financial Institutions' },
    { icon: Users, label: 'Educational Institutions' },
    { icon: Building2, label: 'Healthcare Organizations' },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1A3A] via-[#0A1A3A] to-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Background Effects */}
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
              Digital Transformation & Enterprise Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-mauve-light font-semibold mb-8 max-w-4xl">
              The Foundation of Modern Service Delivery, Organisational Efficiency, and National Competitiveness
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
                Digital transformation is no longer optional. It's the foundation of modern service delivery, organisational efficiency, and national competitiveness. As organisations across Sierra Leone and the Mano River region adopt cloud platforms, digital public services, workflow automation, and data-driven decision-making, they need trusted partners who can bridge strategy and technology seamlessly.
              </p>
              <p className="text-lg text-mauve-light leading-relaxed font-semibold">
                KNS helps organisations modernise their systems, redesign processes, strengthen governance, migrate to the cloud, and build integrated digital ecosystems that unlock real operational and strategic value.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From enterprise architecture and cloud infrastructure to automation, data analytics, IT governance, and smart government services, we deliver end-to-end solutions that make technology work for people, not the other way around.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you're beginning your digital journey or scaling existing systems, KNS provides the expertise, structure, and support to accelerate your transformation.
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
                  src="https://cioafrica.co/wp-content/uploads/2023/10/Digital-Transformation-1.jpg"
                  alt="Digital Transformation & Enterprise Technology Solutions"
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
              Our Digital Transformation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions for modern organizations
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
              Why Choose KNS
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
              Supporting organizations across all sectors with digital transformation
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
              Accelerate Your Digital Transformation
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              From strategy to implementation, KNS provides the expertise, structure, and support to transform your organization.
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


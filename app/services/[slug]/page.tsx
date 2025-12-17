'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CybersecurityHero from '@/components/CybersecurityHero'
import TelecommunicationsHero from '@/components/TelecommunicationsHero'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield, Server, Headphones, Briefcase, GraduationCap, PhoneCall } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface ServiceDetail {
  slug: string
  title: string
  icon: string
  fallbackIcon: any
  shortDescription: string
  fullDescription: string
  features: string[]
  benefits: string[]
  useCases: string[]
  image?: string
}

const servicesData: Record<string, ServiceDetail> = {
  'cybersecurity-digital-resilience': {
    slug: 'cybersecurity-digital-resilience',
    title: 'Cybersecurity & Digital Resilience',
    icon: '/icons/cybersecurity-icon.svg',
    fallbackIcon: Shield,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80',
    shortDescription: 'Protect your organization\'s digital environment with advanced cybersecurity and information assurance solutions.',
    fullDescription: 'KNS protects your organization\'s digital environment with advanced cybersecurity and information assurance solutions. We strengthen your digital defences, enhance regulatory compliance, and ensure secure business continuity in a rapidly evolving threat landscape.',
    features: [
      'Penetration Testing & Vulnerability Assessments',
      'IT/IS Audit & Security Compliance Reviews (ITGC, Application Controls, ISO 27001, NIST, CIS)',
      'Security Risk Identification & Mitigation Planning',
      'Security Operations Oversight & Advisory',
      'Data Protection, Privacy & Information Security Governance',
      'Cybersecurity Awareness & Professional Certification Training'
    ],
    benefits: [
      'Strengthened digital defences against evolving threats',
      'Enhanced regulatory compliance (ISO 27001, NIST, CIS)',
      'Secure business continuity and resilience',
      'Comprehensive risk identification and mitigation',
      'Expert security operations oversight',
      'Data protection and privacy governance',
      'Professional cybersecurity training and certification'
    ],
    useCases: [
      'Protecting sensitive customer and business data',
      'Meeting regulatory compliance requirements',
      'Securing critical business systems and operations',
      'Building robust security postures',
      'Cybersecurity capacity building and training',
      'Incident response and threat management'
    ]
  },
  'telecommunications-engineering-network-services': {
    slug: 'telecommunications-engineering-network-services',
    title: 'Telecommunications Engineering & Network Services',
    icon: '/icons/telecom-icon.svg',
    fallbackIcon: PhoneCall,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
    shortDescription: 'Design, deploy, and maintain mission-critical telecom infrastructure for seamless connectivity.',
    fullDescription: 'We design, deploy, and maintain mission-critical telecom infrastructure. Our comprehensive services cover fiber optic deployment, GSM tower deployment, LAN/WAN networks, enterprise Wi-Fi, structured cabling, QoS monitoring, and field maintenance. We also provide solar and hybrid-powered telecom sites for sustainable operations.',
    features: [
      'Fiber optic deployment (FTTX, metro fiber, aerial & underground)',
      'GSM tower deployment, radio planning & microwave links',
      'LAN/WAN, Enterprise Wi-Fi & structured cabling',
      'QoS monitoring & telecom compliance',
      'Field maintenance & network optimization',
      'Solar & hybrid-powered telecom sites'
    ],
    benefits: [
      'Reliable and scalable telecom infrastructure',
      'Optimized network performance and QoS',
      'Compliance with telecom regulations',
      'Sustainable and energy-efficient solutions',
      'Comprehensive field maintenance and support',
      'Mission-critical connectivity assurance',
      'Cost-effective network optimization'
    ],
    useCases: [
      'Enterprise voice and data network deployment',
      'GSM network expansion and optimization',
      'Fiber optic infrastructure development',
      'Wireless network design and deployment',
      'Network performance monitoring and optimization',
      'Sustainable telecom site deployment'
    ]
  },
  'digital-skills-development-capacity-building': {
    slug: 'digital-skills-development-capacity-building',
    title: 'Digital Skills Development & Capacity Building',
    icon: '/icons/training-icon.svg',
    fallbackIcon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80',
    shortDescription: 'Sierra Leone\'s Digital Skills Champion 2025 - delivering comprehensive certification and training programs.',
    fullDescription: 'As Sierra Leone\'s Digital Skills Champion 2025, we deliver comprehensive digital skills development and capacity building programs. Our services include IC3 Digital Literacy, Microsoft, Cisco, CompTIA, ISO, and ISC2 certifications. We also provide university and TVET programme design, youth digital empowerment programmes, civil service digital upskilling, and national digital literacy campaigns.',
    features: [
      'IC3 Digital Literacy',
      'Microsoft, Cisco, CompTIA, ISO, ISC2 certifications',
      'University and TVET programme design',
      'Youth digital empowerment programmes',
      'Civil service digital upskilling',
      'National digital literacy campaigns'
    ],
    benefits: [
      'Globally recognized certifications',
      'Enhanced workforce capabilities',
      'Improved job performance and career advancement',
      'National digital transformation support',
      'Youth empowerment and skill development',
      'Institutional capacity building',
      'Comprehensive training aligned with industry needs'
    ],
    useCases: [
      'Employee skill development and upskilling',
      'University and TVET curriculum development',
      'Youth digital empowerment initiatives',
      'Civil service digital transformation',
      'National digital literacy campaigns',
      'Professional certification preparation'
    ]
  },
  'customer-experience-call-center-services': {
    slug: 'customer-experience-call-center-services',
    title: 'Customer Experience & Call Center Services',
    icon: '/icons/call-center-icon.svg',
    fallbackIcon: Headphones,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80',
    shortDescription: 'Build and manage high-performance customer-experience operations across multiple channels.',
    fullDescription: 'We build and manage high-performance customer-experience operations. Our comprehensive services include inbound and outbound call centres, helpdesk and technical support, voice, SMS, chat, email and social channels. We also provide CX strategy and KPI frameworks, customer journey redesign, BPO setup, and 24/7 managed support environments.',
    features: [
      'Inbound & outbound call centres',
      'Helpdesk & technical support',
      'Voice, SMS, chat, email & social channels',
      'CX strategy & KPI frameworks',
      'Customer journey redesign & BPO setup',
      '24/7 managed support environments'
    ],
    benefits: [
      'Improved customer satisfaction and retention',
      'Enhanced customer service efficiency',
      'Multi-channel customer communication',
      'Data-driven CX strategy and optimization',
      '24/7 customer support availability',
      'Scalable support operations',
      'Professional customer service delivery'
    ],
    useCases: [
      'Customer support center setup and management',
      'Help desk and technical support services',
      'Sales and lead generation call centers',
      'Customer onboarding and retention programs',
      'Multi-channel customer communication',
      'BPO and outsourced customer service operations'
    ]
  },
  'digital-transformation-enterprise-technology-solutions': {
    slug: 'digital-transformation-enterprise-technology-solutions',
    title: 'Digital Transformation & Enterprise Technology Solutions',
    icon: '/icons/it-consultancy-icon.svg',
    fallbackIcon: Briefcase,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
    shortDescription: 'Modernize organizational systems through strategic digital transformation and enterprise architecture.',
    fullDescription: 'We modernize organizational systems through comprehensive digital transformation and enterprise technology solutions. Our services include digital transformation strategy, Enterprise Architecture (Business, Data, Application, Technology), cloud and hybrid infrastructure, process automation and workflow redesign, governance, risk and compliance frameworks, and public-sector ICT modernization advisory.',
    features: [
      'Digital transformation strategy',
      'Enterprise Architecture (Business, Data, Application, Technology)',
      'Cloud & hybrid infrastructure',
      'Process automation & workflow redesign',
      'Governance, risk & compliance frameworks',
      'Public-sector ICT modernization advisory'
    ],
    benefits: [
      'Streamlined business processes and improved efficiency',
      'Enhanced organizational agility and scalability',
      'Modernized technology infrastructure',
      'Improved data management and analytics',
      'Better integration between systems',
      'Compliance with governance frameworks',
      'Future-proof technology solutions'
    ],
    useCases: [
      'Enterprise digital transformation initiatives',
      'Legacy system modernization',
      'Cloud migration and hybrid infrastructure',
      'Business process automation',
      'Public-sector ICT modernization',
      'Enterprise architecture design and implementation'
    ]
  },
  'outsourcing-managed-services': {
    slug: 'outsourcing-managed-services',
    title: 'Outsourcing & Managed Services',
    icon: '/icons/cloud-icon.svg',
    fallbackIcon: Server,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    shortDescription: 'Scalable operational support with IT and telecom equipment maintenance and managed services.',
    fullDescription: 'We provide scalable operational support through comprehensive outsourcing and managed services. Our services include IT and telecom equipment maintenance, preventive and corrective support, helpdesk and field services, spare-parts and asset management, and SLA-driven reporting and dashboards.',
    features: [
      'IT and telecom equipment maintenance',
      'Preventive & corrective support',
      'Helpdesk & field services',
      'Spare-parts & asset management',
      'SLA-driven reporting and dashboards'
    ],
    benefits: [
      'Reduced operational costs',
      '24/7 support and maintenance',
      'Improved equipment reliability and uptime',
      'Comprehensive asset management',
      'SLA-driven service delivery',
      'Scalable operational support',
      'Expert technical support and maintenance'
    ],
    useCases: [
      'IT infrastructure maintenance and support',
      'Telecom equipment maintenance',
      'Helpdesk and field service operations',
      'Asset and spare parts management',
      'Managed IT services',
      'Outsourced technical support'
    ]
  }
}

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const [service, setService] = useState<ServiceDetail | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [slug, setSlug] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    const getSlug = async () => {
      const resolvedParams = params instanceof Promise ? await params : params
      setSlug(resolvedParams.slug)
    }
    getSlug()
  }, [params])

  useEffect(() => {
    if (!slug) return
    
    // Redirect digital skills to dedicated landing page
    if (slug === 'digital-skills-development-capacity-building') {
      router.push('/digital-skills')
      return
    }
    
    // Redirect customer experience to dedicated landing page
    if (slug === 'customer-experience-call-center-services') {
      router.push('/customer-experience')
      return
    }
    
    // Redirect digital transformation to dedicated landing page
    if (slug === 'digital-transformation-enterprise-technology-solutions') {
      router.push('/digital-transformation')
      return
    }
    
    // Redirect outsourcing & managed services to dedicated landing page
    if (slug === 'outsourcing-managed-services') {
      router.push('/outsourcing-managed-services')
      return
    }
    
    const serviceData = servicesData[slug]
    if (!serviceData) {
      router.push('/services')
      return
    }
    setService(serviceData)
    setImageError(false)
    setImageLoaded(false)
  }, [slug, router])

  if (!service) {
    return null
  }

  const IconComponent = service.fallbackIcon
  const isCybersecurity = slug === 'cybersecurity-digital-resilience'
  const isTelecommunications = slug === 'telecommunications-engineering-network-services'

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      {isCybersecurity ? (
        <CybersecurityHero />
      ) : isTelecommunications ? (
        <TelecommunicationsHero />
      ) : (
      <section className="pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-16 md:pb-20 bg-gradient-to-b from-mauve-light/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/" 
              className="inline-flex items-center text-mauve hover:text-mauve-dark mb-6"
            >
              <ArrowRight size={16} className="mr-2" />
              Go to Home
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-mauve-light rounded-lg flex items-center justify-center relative overflow-hidden p-3">
                  {!imageLoaded && <IconComponent className="text-mauve" size={40} />}
                  <img
                    src={service.icon}
                    alt={service.title}
                    className={`object-contain w-full h-full p-2 ${imageLoaded ? 'block' : 'hidden'}`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageLoaded(false)}
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-charcoal">
                  {service.title}
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {service.fullDescription}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-mauve text-white rounded-lg font-semibold text-lg hover:bg-mauve-dark transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-mauve-light to-mauve/20"
            >
              {service.image && !imageError ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageError(true)
                    setImageLoaded(false)
                  }}
                  style={{ display: imageLoaded ? 'block' : 'none' }}
                />
              ) : null}
              {(imageError || !service.image || !imageLoaded) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <IconComponent className="text-mauve/30" size={200} />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      )}

      {/* Features Section */}
      <section id="services" className={`py-14 sm:py-16 md:py-20 ${isCybersecurity ? 'bg-gradient-to-b from-black via-slate-900 to-slate-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isCybersecurity ? 'text-white' : 'text-charcoal'}`}>
              Key Features
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isCybersecurity ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive solutions designed to meet your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl shadow-lg border hover:shadow-xl transition-all ${isCybersecurity ? 'bg-slate-800/50 border-cyan-500/20 hover:border-cyan-400/40' : 'bg-white border-gray-100'}`}
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className={`flex-shrink-0 mt-1 ${isCybersecurity ? 'text-cyan-400' : 'text-mauve'}`} size={24} />
                  <p className={`font-medium ${isCybersecurity ? 'text-gray-200' : 'text-gray-700'}`}>{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`py-14 sm:py-16 md:py-20 ${isCybersecurity ? 'bg-slate-900' : 'bg-gradient-to-b from-white to-mauve-light/20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isCybersecurity ? 'text-white' : 'text-charcoal'}`}>
              Benefits
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isCybersecurity ? 'text-gray-300' : 'text-gray-600'}`}>
              Why choose our {service.title} service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-start gap-4 p-6 rounded-xl shadow-lg ${isCybersecurity ? 'bg-slate-800/50 border border-cyan-500/20' : 'bg-white'}`}
              >
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${isCybersecurity ? 'bg-cyan-400' : 'bg-mauve'}`}></div>
                <p className={isCybersecurity ? 'text-gray-200' : 'text-gray-700'}>{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className={`py-14 sm:py-16 md:py-20 ${isCybersecurity ? 'bg-gradient-to-b from-slate-800 to-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isCybersecurity ? 'text-white' : 'text-charcoal'}`}>
              Use Cases
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isCybersecurity ? 'text-gray-300' : 'text-gray-600'}`}>
              Common scenarios where our service delivers value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl shadow-lg border ${isCybersecurity ? 'bg-slate-800/50 border-cyan-500/20' : 'bg-gradient-to-br from-mauve-light to-white border-mauve/20'}`}
              >
                <p className={`font-medium ${isCybersecurity ? 'text-gray-200' : 'text-gray-700'}`}>{useCase}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-r from-mauve to-mauve-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today to discuss how our {service.title} can help transform your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-mauve rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


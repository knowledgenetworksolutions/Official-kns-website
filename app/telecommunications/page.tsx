'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, Phone, Wifi, Radio, Network, Activity, Wrench, Sun,
  CheckCircle, Target, FileText, Users, Building2, Landmark, 
  GraduationCap, Heart, Briefcase, Server, Award, Globe, Zap
} from 'lucide-react'

export default function TelecommunicationsPage() {
  const services = [
    {
      icon: Wifi,
      title: 'Fiber Optic Deployment & Metro Backbone Engineering',
      description: 'Building high-speed fiber networks for national and enterprise connectivity. We design and deploy FTTX, metro fiber rings, long-haul backbones, and enterprise fiber solutions. KNS ensures high availability, low latency, and efficient scalability for operators, MDAs, banks, universities, and enterprises.',
      tagline: 'High-speed connectivity for the digital era.',
      link: '/telecommunications/fiber-optic'
    },
    {
      icon: Radio,
      title: 'GSM Tower Deployment, Radio Planning & Microwave Links',
      description: 'Expanding mobile coverage with world-class RF and backhaul engineering. KNS delivers complete tower erection, antenna installation, RF planning, microwave backhaul design, drive testing, and performance optimization, supporting 2G/3G/4G/5G networks across diverse terrains.',
      tagline: 'Expanding mobile coverage across the region.',
      link: '/telecommunications/gsm-rf'
    },
    {
      icon: Network,
      title: 'Enterprise Network Design, LAN/WAN & Structured Cabling',
      description: 'Secure and scalable enterprise networks for modern organizations. We build robust LAN/WAN architectures, structured cabling systems, and enterprise-grade Wi-Fi for corporations, schools, hospitals, banks, NGOs, and MDAs. Our networks support mission-critical and day-to-day operations with high reliability.',
      tagline: 'Enterprise networks built for reliability.',
      link: '/telecommunications/enterprise-networks'
    },
    {
      icon: Activity,
      title: 'QoS Monitoring, Regulatory Compliance & Network Analytics',
      description: 'Ensuring quality, availability, and regulatory compliance. KNS supports telecom operators and enterprises with NaTCA-compliant QoS reporting, KPI analytics, drive testing, benchmarking, and performance dashboards that improve service quality and operational efficiency.',
      tagline: 'Quality assurance and compliance excellence.',
      link: '/telecommunications/qos-compliance'
    },
    {
      icon: Wrench,
      title: 'Field Maintenance, Network Optimization & Hybrid/Solar Site Solutions',
      description: 'Keeping your infrastructure running 24/7. Our nationwide field teams provide preventive maintenance, corrective repairs, emergency restorations, microwave realignment, fiber-cut repair, and solar/hybrid power deployment, ensuring maximum uptime and service continuity.',
      tagline: '24/7 support for maximum uptime.',
      link: '/telecommunications/field-maintenance'
    },
  ]

  const whyChoose = [
    {
      icon: Award,
      title: 'Proven Engineering Expertise',
      description: 'Decades of experience deploying metro fiber, GSM towers, microwave links, LAN/WAN networks, and enterprise-grade ICT infrastructure.'
    },
    {
      icon: Globe,
      title: 'Strong Local Presence & Regional Reach',
      description: 'With teams in Sierra Leone and extended services in Guinea and Liberia, we understand local terrain, regulations, and infrastructure challenges.'
    },
    {
      icon: Server,
      title: 'Vendor-Neutral & Multivendor Capable',
      description: 'Experienced with Huawei, ZTE, Ericsson, Nokia, Ubiquiti, Cambium, Mimosa, HP Aruba, Cisco, Mikrotik, and more.'
    },
    {
      icon: Zap,
      title: 'Reliable 24/7 Support & SLA-Driven Delivery',
      description: 'Our teams respond quickly to faults, fiber cuts, power failures, and network issues, ensuring uptime and customer satisfaction.'
    },
    {
      icon: FileText,
      title: 'Regulatory & Compliance Expertise',
      description: 'Deep knowledge of NaTCA telecom requirements and international engineering standards.'
    },
    {
      icon: Target,
      title: 'End-to-End Delivery Model',
      description: 'From design to deployment to monitoring and maintenance, KNS provides a complete telecom engineering lifecycle.'
    },
  ]

  const whoWeServe = [
    { icon: Phone, label: 'Telecom Operators & ISPs' },
    { icon: Building2, label: 'Government Ministries, Departments & Agencies' },
    { icon: Landmark, label: 'Banks, MFIs & Digital Financial Providers' },
    { icon: GraduationCap, label: 'Universities, Schools & Education Networks' },
    { icon: Heart, label: 'Hospitals & Healthcare Systems' },
    { icon: Users, label: 'NGOs & Development Partners' },
    { icon: Briefcase, label: 'Large Enterprises & SMEs' },
    { icon: Server, label: 'ICT/Telecom Infrastructure Companies' },
  ]

  const methodology = [
    'Survey & Feasibility Study',
    'Design & Network Architecture',
    'Implementation & Quality Assurance',
    'Testing & Validation',
    'Regulatory Compliance Review',
    'Monitoring & Optimization',
    'Maintenance & Lifecycle Support'
  ]

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16 bg-gradient-to-b from-[#0A1A3A] via-[#0A1A3A] to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(4, 217, 255, 0.1) 0%, transparent 50%)`
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
              Telecommunications Engineering & Network Services
            </h1>
            <p className="text-2xl md:text-3xl text-mauve-light font-semibold mb-8 max-w-4xl mx-auto">
              Connecting Nations. Powering Institutions. Enabling Digital Growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-black to-[#0A1A3A]">
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
                As Sierra Leone, Guinea, and Liberia expand their digital economies, reliable telecommunications infrastructure has become the backbone of national development, supporting mobile communication, internet access, digital banking, e-government systems, cloud adoption, online education, and private-sector innovation.
              </p>
              <p className="text-lg text-mauve-light leading-relaxed font-semibold">
                Knowledge Network Solutions (KNS) delivers end-to-end telecommunications services designed to build resilient, scalable, and high-performance communication networks across the Mano River region.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We combine engineering expertise, field-tested experience, and global best practices to provide telecom solutions that meet the needs of operators, enterprises, and government institutions.
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
                  src="https://framerusercontent.com/images/ndofApZRwYuRZFgshrujJKr150.png"
                  alt="Telecommunications Engineering & Network Services"
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
      <section className="py-10 sm:py-12 md:py-16 bg-[#0A1A3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We Deliver
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A complete ecosystem of telecommunications engineering, deployment, maintenance, and compliance services.
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
                  className="bg-slate-800/50 border border-mauve/30 rounded-xl p-6 hover:border-mauve-light/50 hover:bg-slate-800/70 transition-all"
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
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-[#0A1A3A] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Organizations Choose KNS
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

      {/* Who We Serve Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-[#0A1A3A]">
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
              KNS supports organizations that rely on high-performance networks, including:
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
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-black to-[#0A1A3A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Telecom Methodology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our engineering and deployment approach is grounded in:
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
                  <p className="text-gray-300 font-medium">{step}</p>
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
              This ensures high-quality service, predictable performance, and sustainable infrastructure.
            </motion.p>
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
              Ready to Build the Future of Connectivity?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              From fiber deployment to mobile coverage expansion and network optimization, KNS provides the expertise and reliability required for resilient telecommunications infrastructure.
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
                href="/services/telecommunications-engineering-network-services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                View Service Details
              </Link>
            </div>
            <p className="text-white/90 mt-8 text-sm">
              Let's help you build, expand, and optimize your network for the digital era.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


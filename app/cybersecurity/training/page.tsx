'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, ShieldCheck, GraduationCap, Users, Briefcase, Globe, 
  CheckCircle, Target, FileText, Search, Building2, Landmark, Phone,
  Heart, Server, Award, BookOpen, Monitor, Award as Certificate
} from 'lucide-react'

export default function CybersecurityTrainingPage() {
  const services = [
    {
      icon: Users,
      title: 'Employee Cybersecurity Awareness Training',
      description: 'We help staff understand day-to-day cyber risks and safe practices.',
      items: [
        'Safe internet and email use',
        'Detecting phishing and fraud',
        'Secure password and authentication habits',
        'Protecting devices and digital identities',
        'Safe use of organizational systems',
        'Data protection basics',
        'Insider threat awareness',
        'Safe remote work practices'
      ]
    },
    {
      icon: Briefcase,
      title: 'Executive Cybersecurity Briefings',
      description: 'Leadership plays a critical role in cybersecurity governance.',
      items: [
        'Risk oversight and strategic decision-making',
        'Regulatory and compliance expectations',
        'Incident reporting obligations',
        'Crisis communication and response',
        'Governance roles and responsibilities',
        'Understanding cyber business impact'
      ]
    },
    {
      icon: Monitor,
      title: 'Technical Cybersecurity Training for IT Teams',
      description: 'Our advanced technical training equips IT and security staff with hands-on skills required for modern cyber defence.',
      items: [
        'Network security fundamentals',
        'Incident response and threat handling',
        'Vulnerability identification and management',
        'Security operations and monitoring',
        'SIEM and log analysis',
        'Hardening servers, cloud, and applications',
        'Malware analysis basics'
      ]
    },
    {
      icon: Globe,
      title: 'National-Scale Cybersecurity Awareness Campaigns',
      description: 'KNS is recognized as a leader in designing and delivering large-scale public awareness campaigns across Sierra Leone.',
      items: [
        'Multilingual awareness messages (English, Krio, Mende, Temne)',
        'Social media, radio, TV, and community outreach',
        'Youth and school-based cyber awareness programs',
        'Cyber hygiene messaging for rural communities',
        'Child online safety campaigns',
        'Women and girls digital safety training'
      ]
    },
    {
      icon: Certificate,
      title: 'Professional Certification Preparation (Global Standards)',
      description: 'We prepare learners for internationally recognized cybersecurity and IT certifications.',
      items: [
        'ISC2 Certified in Cybersecurity (CC)',
        'CompTIA Security+',
        'CompTIA CySA+',
        'CEH (Certified Ethical Hacker)',
        'ISO 27001 Lead Implementer / Lead Auditor',
        'Cisco CyberOps',
        'Microsoft SC-900, SC-200, SC-300, SC-100',
        'Cybersecurity Analyst and SOC Analyst career paths'
      ]
    },
    {
      icon: Building2,
      title: 'Sector-Specific Cybersecurity Training',
      description: 'We tailor training to specific industry needs.',
      sectors: [
        {
          name: 'Banking & Financial services',
          items: ['Fraud prevention', 'Secure mobile money operations', 'ATM and POS security', 'PCI-DSS awareness']
        },
        {
          name: 'Government & Public sector (MDAs)',
          items: ['Secure data handling', 'Incident response and reporting', 'Compliance with national frameworks']
        },
        {
          name: 'Telecom & ISP sector',
          items: ['Network & infrastructure security', 'SOC-capability development']
        },
        {
          name: 'NGOs & Development partners',
          items: ['Data privacy for humanitarian data', 'Secure communication for field operations']
        },
        {
          name: 'Education & Health sectors',
          items: ['Student data protection', 'Digital platform safety', 'Medical record confidentiality']
        }
      ]
    },
  ]

  const benefits = [
    'Reduced risk of cyber incidents caused by human error',
    'Stronger compliance with regulators and donors',
    'Increased employee responsibility and behavioural change',
    'Improved incident detection and response speed',
    'Strengthened organizational resilience',
    'Long-term cultural transformation',
    'Enhanced public trust for digitally enabled organizations'
  ]

  const deliverables = [
    'Training curriculum & customized content',
    'Participant materials (handbooks, cheat sheets, awareness posters)',
    'Online resources and video modules',
    'Cyber hygiene toolkits',
    'Pre- and post-training assessments',
    'Certificates of completion',
    'Executive summary reports'
  ]

  const whyChoose = [
    'Deep understanding of Sierra Leone\'s cyber threat environment',
    'Proven record delivering national awareness campaigns',
    'Certified cybersecurity trainers with global credentials',
    'Tailored, culturally relevant content',
    'Hands-on and practical training approach',
    'Strong focus on behaviour change and long-term impact',
    'Recognized nationally as a Digital Skills Champion'
  ]

  const whoWeTrain = [
    { icon: Building2, label: 'Government ministries, departments & agencies' },
    { icon: Landmark, label: 'Financial institutions & mobile money operators' },
    { icon: Phone, label: 'Telecom operators & internet providers' },
    { icon: Users, label: 'NGOs and development partners' },
    { icon: Briefcase, label: 'Private enterprises of all sizes' },
    { icon: GraduationCap, label: 'Schools, universities & academic institutions' },
    { icon: Heart, label: 'Healthcare facilities' },
    { icon: Server, label: 'Cloud-first and remote-work organizations' },
  ]

  const attacks = [
    'Phishing and business email compromise',
    'Mobile money fraud',
    'Social engineering and impersonation attacks',
    'WhatsApp-based scams',
    'Data leakage and unauthorized access',
    'Password-related breaches',
    'Malware infections and ransomware',
    'Insider threats'
  ]

  const methodology = [
    'Instructor-led sessions (in-person or virtual)',
    'Practical hands-on labs',
    'Scenario-based simulations',
    'Real-life case studies from Sierra Leone and the region',
    'Mobile-friendly learning resources',
    'Assessments and progress tracking',
    'Training dashboards and reporting'
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
              Cybersecurity Awareness & Professional Training
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-8 max-w-4xl">
              Building a Cyber-Aware Workforce and Strengthening National Capacity Across Sierra Leone, Guinea & Liberia
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
                Cybersecurity is no longer just a technical issue. It is a human issue. In Sierra Leone and the wider Mano River region, most cyber incidents originate from human error: phishing, unsafe browsing, weak passwords, misconfigured systems, insider threats, and lack of cyber hygiene.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                To address this, organizations must build a culture where every employee understands their role in protecting data, systems, and services.
              </p>
              <p className="text-lg text-mauve-light leading-relaxed font-semibold">
                Knowledge Network Solutions (KNS) delivers expert-led Cybersecurity Awareness & Professional Training programs tailored to the unique operational, cultural, and digital realities of Sierra Leone, Guinea, and Liberia.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-medium">
                Our programs combine global best practices with local threat intelligence, ensuring your workforce becomes your first line of defence.
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
                  src="https://tenece.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-11-at-12.51.56-PM-1-1024x766.jpeg"
                  alt="Cybersecurity Awareness & Professional Training"
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
              Why Cybersecurity Awareness Is Critical in Sierra Leone
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
                Digital growth across the region has created new opportunities, but also exposed institutions to attacks such as:
              </p>
              <ul className="space-y-3 text-gray-300 mb-8">
                {attacks.map((attack, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold mt-1">·</span>
                    <span>{attack}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-8"
            >
              <p className="text-lg text-gray-300 mb-4">
                In many cases, attacks succeed not because of technical failure, but because employees are not prepared.
              </p>
              <p className="text-xl text-cyan-300 font-semibold">
                KNS solves this by providing structured awareness and skill-building programs for all levels of your organization.
              </p>
            </motion.div>
          </div>
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
              Our Training & Awareness Services
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
                      {service.items ? (
                        <div className="grid md:grid-cols-2 gap-3">
                          {service.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-2">
                              <span className="text-cyan-400 font-bold mt-1">·</span>
                              <span className="text-gray-300 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      ) : service.sectors ? (
                        <div className="space-y-4">
                          {service.sectors.map((sector, sectorIndex) => (
                            <div key={sectorIndex} className="bg-slate-900/50 rounded-lg p-4 border border-cyan-500/10">
                              <h4 className="text-cyan-300 font-semibold mb-2">{sector.name}</h4>
                              <ul className="space-y-2">
                                {sector.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                                    <span className="text-cyan-400 font-bold mt-1">·</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : null}
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
              Our Methodology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              KNS uses a blended training model designed for maximum impact:
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {methodology.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-4 text-center"
                >
                  <p className="text-gray-300 text-sm">{method}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-400 text-center">
              We tailor our approach based on audience, maturity, and organizational needs.
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
                Key Benefits for Organizations
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

      {/* Who We Train Section */}
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
              Who We Train
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our programs are designed for:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whoWeTrain.map((item, index) => {
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
              Empower Your People. Protect Your Future. Build Cyber Resilience.
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Cybersecurity begins with people. KNS builds the skills, awareness, and professional capacity your organization needs to stay secure in a rapidly evolving digital environment.
            </p>
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto font-semibold">
              Let us help you train your workforce, strengthen your defences, and build lasting cybersecurity readiness.
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


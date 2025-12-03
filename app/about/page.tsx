'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, TrendingUp, Linkedin, Shield, Heart, Lightbulb, Handshake, Leaf } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

// Executive Image Component with error handling
function ExecutiveImage({ src, alt }: { src: string; alt: string }) {
  const [imgError, setImgError] = useState(false)
  const [imgSrc, setImgSrc] = useState(src)

  // Use a regular img to detect errors since Next.js Image doesn't support onError
  const handleImgError = () => {
    if (!imgError) {
      // Try different file extensions
      const basePath = src.replace(/\.(jpg|jpeg|png|webp)$/i, '')
      const extensions = ['.jpg', '.jpeg', '.png', '.webp']
      const currentExt = src.match(/\.(jpg|jpeg|png|webp)$/i)?.[0] || '.jpg'
      const otherExts = extensions.filter(ext => ext !== currentExt)
      
      if (otherExts.length > 0) {
        setImgSrc(basePath + otherExts[0])
      } else {
        setImgError(true)
      }
    }
  }

  if (imgError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-mauve-light to-mauve/20">
        <div className="text-center p-4">
          <Users className="w-16 h-16 text-mauve mx-auto mb-2" />
          <p className="text-mauve font-semibold">{alt}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hidden img for error detection */}
      <img
        src={imgSrc}
        alt=""
        className="hidden"
        onError={handleImgError}
      />
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </>
  )
}

export default function AboutPage() {
  const executives = [
    {
      name: 'Desmond Macfoy',
      role: 'Co-Founder & Chief Executive Officer (CEO)',
      credentials: 'BEng (Hons), MBA, PMP, CCISO, CASP+, CISA, CAPM, ISO 27001 Lead Implementer, Microsoft Cybersecurity Architect Expert',
      image: '/Staffs/WhatsApp Image 2025-11-14 at 8.28.08 PM.jpeg',
      bio: 'Desmond Macfoy is a distinguished executive with over 25 years of leadership experience in information and communications technology, cybersecurity strategy, and digital transformation across Africa and the Middle East. As the Co-Founder and Chief Executive Officer of KNS, Mr. Macfoy sets the strategic direction of the organization, cultivates high-level partnerships, and drives national-level initiatives to advance organizational growth and impact. His visionary leadership has positioned KNS as the 2025 Digital Skills Champion and the only Pearson VUE Select and Certiport Authorized Testing Center in Sierra Leone, enabling thousands of professionals to earn globally recognized certifications.',
      career: 'Throughout his career, Mr. Macfoy has held senior leadership roles in both the public and private sectors, providing strategic guidance to telecommunications and IT organizations in more than 15 countries throughout the Middle East and Africa.',
      keyFocusAreas: [
        'Cybersecurity strategy',
        'National digital transformation',
        'Executive partnerships',
        'Education & curriculum leadership'
      ],
      linkedin: '#',
    },
    {
      name: 'Chinedu D. G. Nwaefuna',
      role: 'Co-Founder & Chief Information Security Officer (CISO)',
      credentials: 'MSc IT, BSc IT, Microsoft Certified Trainer (MCT), PMP, EC-Council "CCISO, CEH & ECSA", ISACA "CISA & GCEIT", ISO 27032 Senior Lead Cybersecurity Manager, CCNP x4 (Collaboration, Service Provider, Security & Enterprise), VMware VCP "Network & Data Virtualization", CompTIA "SecurityX, Security+, Pentest+, CySA+, CSAE, CNSP & CNVP", Fortinet NSE-7 and more.',
      image: '/Staffs/WhatsApp Image 2025-11-14 at 8.28.08 PM (1).jpeg',
      bio: 'Chinedu D. G. Nwaefuna is an accomplished cybersecurity leader and enterprise network architect with over 20 years of experience in designing, implementing, and securing telecommunications and ICT infrastructure. As the Co-Founder and Chief Information Security Officer (CISO) of KNS, Chinedu oversees the organization\'s cybersecurity architecture, risk management strategies, incident response planning, secure network design, and national cyber capacity-building initiatives.',
      career: 'His expertise spans leading large-scale projects, including fiber backbone deployments, MPLS networks, and national emergency call-center infrastructure. Chinedu\'s extensive background includes serving as CTO at Afcom Sierra Leone, Cyber Security Specialist at Base SL, and co-owner/CTO at KNS, where he has played a pivotal role in advancing secure digital transformation for clients and national stakeholders.',
      keyFocusAreas: [
        'Cybersecurity architecture',
        'Network security',
        'Incident response',
        'Telecom security',
        'Skills training'
      ],
      linkedin: 'https://www.linkedin.com/in/chinedu-nwaefuna-5893835/',
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-mauve-light/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4">
              About Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Empowering a Smarter Digital Future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="https://vellum.co.ke/wp-content/uploads/2024/08/SF2-1.jpg"
                alt="KNS Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal">Who We Are</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Knowledge Network Solutions (KNS) is a premier technology, telecommunications, digital skills, and cybersecurity consulting company transforming how organizations operate, connect, and secure their digital environments across Sierra Leone and West Africa. As a trusted partner to government ministries, development agencies, universities, banks, telecom operators, and private-sector enterprises, we deliver solutions that bridge the digital divide, enhance operational efficiency, and strengthen national competitiveness.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Recognized by the Ministry of Communication, Technology & Innovation (MoCTI) as "Digital Skills Champion 2025," KNS stands at the frontline of Sierra Leone's digital evolution. We empower citizens with globally recognized certifications, support digital transformation across institutions, and deliver secure, scalable, and future-ready technologies for organizations of all sizes.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                With an integrated portfolio of digital-skills development, cybersecurity advisory, enterprise technology solutions, telecommunications engineering, customer-experience & call-centre operations, and managed services, KNS serves as a one-stop digital transformation partner. Our approach blends innovation, hands-on expertise, and global best practices to create meaningful impact and long-term sustainability.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                With over 20 years of experience across national ICT programmes, education reform, enterprise architecture, telecom infrastructure, and cybersecurity initiatives, KNS continues to build Africa's next generation of digital professionals, resilient institutions, and secure digital ecosystems.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-mauve-light rounded-lg">
                  <Target className="text-mauve" size={32} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-charcoal mb-3">Our Mission</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    To empower organizations and communities across Africa with innovative, secure, and human-centered digital solutions, strengthening institutional capacity, elevating customer experience, and driving sustainable digital transformation.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-mauve-light rounded-lg">
                  <Eye className="text-mauve" size={32} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-charcoal mb-3">Our Vision</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    To be West Africa's most trusted digital transformation partner leading in cybersecurity, telecommunications, digital skills, and customer experience while shaping a secure, connected, and digitally empowered future.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-mauve rounded-full mx-auto mb-4">
                <Award className="text-white" size={40} />
              </div>
              <p className="text-4xl font-bold text-mauve mb-2">20+</p>
              <p className="text-gray-600">Years of Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-mauve rounded-full mx-auto mb-4">
                <Users className="text-white" size={40} />
              </div>
              <p className="text-4xl font-bold text-mauve mb-2">500+</p>
              <p className="text-gray-600">Trained Professionals</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-mauve rounded-full mx-auto mb-4">
                <TrendingUp className="text-white" size={40} />
              </div>
              <p className="text-4xl font-bold text-mauve mb-2">200+</p>
              <p className="text-gray-600">Successful Projects</p>
            </motion.div>
          </div>

          {/* Our Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-20 mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-charcoal mb-4">Our Values</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-mauve-light rounded-lg">
                    <Shield className="text-mauve" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-charcoal mb-2">Integrity & Accountability</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      We operate with transparency, professionalism, and ethical leadership.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-mauve-light rounded-lg">
                    <Heart className="text-mauve" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-charcoal mb-2">Customer-Centricity</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      We design solutions around people, ensuring every service enhances user experience.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-mauve-light rounded-lg">
                    <Lightbulb className="text-mauve" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-charcoal mb-2">Innovation & Excellence</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      We deliver world-class solutions driven by global standards and continuous improvement.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-mauve-light rounded-lg">
                    <Handshake className="text-mauve" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-charcoal mb-2">Collaboration & Partnership</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      We work closely with clients, stakeholders, and communities to co-create long-lasting value.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 md:col-span-2 lg:col-span-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-mauve-light rounded-lg">
                    <Leaf className="text-mauve" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-charcoal mb-2">Resilience & Sustainability</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      We build secure, scalable, and future-proof solutions that support long-term development.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Our Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-20 mb-20"
          >
            <div className="bg-gradient-to-r from-mauve-light/30 to-mauve/20 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-4xl font-bold text-charcoal mb-6">Our Commitment</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                We are dedicated to building a digitally skilled, secure, and competitive Sierra Leone and West Africa one institution, one community, and one citizen at a time. Through innovation, partnership, and excellence, KNS continues to shape the region's digital future.
              </p>
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-charcoal mb-4">Leadership</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-3 max-w-4xl mx-auto leading-relaxed">
                Our leadership team consists of experienced cybersecurity specialists, telecom engineers, enterprise architects, educators, and digital transformation experts with over two decades of regional and international experience. They have led initiatives for:
              </p>
            </div>
            <div className="max-w-4xl mx-auto mb-12">
              <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <span className="text-mauve font-bold mt-1">·</span>
                  <p className="text-sm sm:text-base">Government ministries & regulators</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-mauve font-bold mt-1">·</span>
                  <p className="text-sm sm:text-base">World Bank–funded national ICT and digital transformation projects</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-mauve font-bold mt-1">·</span>
                  <p className="text-sm sm:text-base">Telecom operators & network infrastructure providers</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-mauve font-bold mt-1">·</span>
                  <p className="text-sm sm:text-base">Universities & TVET institutions</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-mauve font-bold mt-1">·</span>
                  <p className="text-sm sm:text-base">Financial institutions & enterprise organizations</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-mauve font-bold mt-1">·</span>
                  <p className="text-sm sm:text-base">National cybersecurity capacity-building campaigns</p>
                </div>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-8 text-center leading-relaxed">
                Their combined expertise ensures every KNS engagement is strategic, actionable, and impactful.
              </p>
            </div>

            {/* Executive Team Grid */}
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Board Members</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {executives.map((exec, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                  >
                    <div className="relative h-72 bg-gray-100">
                      <ExecutiveImage src={exec.image} alt={exec.name} />
                    </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-charcoal mb-2">{exec.name}</h3>
                    <p className="text-mauve font-semibold mb-2">{exec.role}</p>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{exec.credentials}</p>
                    
                    <div className="space-y-4 mb-6">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{exec.bio}</p>
                      {exec.career && (
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{exec.career}</p>
                      )}
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-charcoal mb-3">Key Focus Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exec.keyFocusAreas.map((area, areaIdx) => (
                          <span
                            key={areaIdx}
                            className="px-3 py-1.5 bg-mauve-light text-mauve-dark rounded-lg text-sm font-medium"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <a
                        href={exec.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${exec.name} LinkedIn`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-mauve text-white rounded-lg hover:bg-mauve-dark transition-colors"
                      >
                        <Linkedin size={18} />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


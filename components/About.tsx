'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Target, Eye, Award } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="https://vellum.co.ke/wp-content/uploads/2024/08/SF2-1.jpg"
              alt="KNS Team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
              About KNS
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Knowledge Network Solutions (KNS) is a premier technology, telecommunications, digital skills, and cybersecurity consulting company transforming how organizations operate, connect, and secure their digital environments across Sierra Leone and West Africa. As a trusted partner to government ministries, development agencies, universities, banks, telecom operators, and private-sector enterprises, we deliver solutions that bridge the digital divide, enhance operational efficiency, and strengthen national competitiveness.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Recognized by the Ministry of Communication, Technology & Innovation (MoCTI) as "Digital Skills Champion 2025," KNS stands at the frontline of Sierra Leone's digital evolution. With over 20 years of experience, we empower citizens with globally recognized certifications and deliver secure, scalable, and future-ready technologies for organizations of all sizes.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mauve-light rounded-lg">
                  <Target className="text-mauve" size={24} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-charcoal mb-2">Our Mission</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    To empower organizations and communities across Africa with innovative, secure, and human-centered digital solutions, strengthening institutional capacity, elevating customer experience, and driving sustainable digital transformation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-mauve-light rounded-lg">
                  <Eye className="text-mauve" size={24} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-charcoal mb-2">Our Vision</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    To be West Africa's most trusted digital transformation partner leading in cybersecurity, telecommunications, digital skills, and customer experience while shaping a secure, connected, and digitally empowered future.
                  </p>
                </div>
              </div>
            </div>

            {/* Years of Experience */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-mauve rounded-full mb-2">
                  <Award className="text-white" size={32} />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-mauve">20+</p>
                <p className="text-xs sm:text-sm text-gray-600">Years of Experience</p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-mauve text-white rounded-lg font-semibold hover:bg-mauve-dark transition-colors duration-300 mt-4"
            >
              Learn More About Us
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


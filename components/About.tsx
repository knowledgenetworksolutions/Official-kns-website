'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Target, Eye, Award } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-10 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/Mocti-recongnizeKNS.jpg"
                alt="KNS Recognition"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/CEO-Desmond.jpg"
                alt="CEO Desmond"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
              About KNS
            </h2>
            <div className="space-y-4">
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Knowledge Network Solutions (KNS) is a premier technology, telecommunications, digital skills, and cybersecurity consulting company transforming how organizations operate, connect, and secure their digital environments across Sierra Leone and West Africa.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Recognized by the Ministry of Communication, Technology &amp; Innovation (MoCTI) as &quot;Digital Skills Champion 2025,&quot; KNS stands at the frontline of Sierra Leone&apos;s digital evolution. With over 20 years of experience, we empower citizens with globally recognized certifications and deliver secure, scalable, and future-ready technologies for organizations of all sizes.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid gap-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mauve-light rounded-xl flex-shrink-0">
                  <Target className="text-mauve" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-1">Our Mission</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    To empower organizations and communities across Africa with innovative, secure, and human-centered digital solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-mauve-light rounded-xl flex-shrink-0">
                  <Eye className="text-mauve" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-1">Our Vision</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    To be West Africa&apos;s most trusted digital transformation partner leading in cybersecurity and innovation.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 bg-mauve/10 rounded-full">
                  <Award className="text-mauve" size={24} />
                </div>
                <div>
                  <p className="text-xl font-bold text-mauve">20+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Years Exp.</p>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-mauve font-bold hover:text-mauve-dark transition-colors group"
              >
                Learn More
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      </section>
    )
}


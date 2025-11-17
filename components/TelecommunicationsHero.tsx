'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Wifi, Radio, Network, Activity, Wrench, Sun } from 'lucide-react'

export default function TelecommunicationsHero() {
  const serviceIcons = [
    { icon: Wifi, label: 'Fiber Networks' },
    { icon: Radio, label: 'Tower Deployment' },
    { icon: Network, label: 'LAN/WAN' },
    { icon: Activity, label: 'QoS Analytics' },
    { icon: Wrench, label: 'Maintenance & Solar' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A1A3A] via-[#0A1A3A] to-black pt-24 md:pt-32">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Map Grid Background - Sierra Leone Outline */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#04D9FF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#04D9FF" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            
            {/* Grid Lines */}
            {Array.from({ length: 15 }).map((_, i) => (
              <g key={i}>
                <line
                  x1={i * 80}
                  y1="0"
                  x2={i * 80}
                  y2="800"
                  stroke="url(#mapGradient)"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <line
                  x1="0"
                  y1={i * 53}
                  x2="1200"
                  y2={i * 53}
                  stroke="url(#mapGradient)"
                  strokeWidth="1"
                  opacity="0.3"
                />
              </g>
            ))}
            
            {/* City Nodes */}
            {[
              { x: 300, y: 200 },
              { x: 400, y: 250 },
              { x: 500, y: 300 },
              { x: 600, y: 350 },
              { x: 700, y: 400 },
            ].map((point, i) => (
              <g key={i}>
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r="6"
                  fill="#04D9FF"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.6,
                  }}
                />
                {/* Connecting Lines */}
                {i > 0 && (
                  <line
                    x1={point.x}
                    y1={point.y}
                    x2={300 + (i - 1) * 100}
                    y2={200 + (i - 1) * 50}
                    stroke="#04D9FF"
                    strokeWidth="2"
                    opacity="0.3"
                  />
                )}
              </g>
            ))}
          </svg>
        </div>

        {/* Binary Code Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full font-mono text-xs text-cyan-400/20 whitespace-pre-wrap">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="absolute" style={{ 
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `fall ${8 + Math.random() * 8}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}>
                {Math.random().toString(2).substring(2, 10)}
              </div>
            ))}
          </div>
        </div>

        {/* Radio Waves */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: '20%',
              top: '60%',
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              border: `2px solid #04D9FF`,
              borderRadius: '50%',
              opacity: 0.2,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-cyan-400 font-semibold text-sm md:text-base mb-4 tracking-wider uppercase"
            >
              Reliable. Scalable. Future-Ready Telecommunications Engineering.
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Building the Future of Connectivity
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
            >
              High-performance fiber, mobile, and enterprise network solutions powering digital transformation across Sierra Leone and the Mano River region.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/telecommunications"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#04D9FF] hover:bg-cyan-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
              >
                Explore Telecom Services
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Contact Our Engineering Team
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual - Tower & Fiber */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Telecom Tower */}
            <div className="relative w-full h-full">
              {/* Tower Base */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <svg width="200" height="400" viewBox="0 0 200 400" className="w-48 h-96">
                  <defs>
                    <linearGradient id="towerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#04D9FF" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#04D9FF" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#04D9FF" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  
                  {/* Tower Structure */}
                  <rect x="90" y="0" width="20" height="400" fill="url(#towerGradient)" />
                  <rect x="85" y="0" width="30" height="20" fill="#04D9FF" opacity="0.6" />
                  
                  {/* Antennas */}
                  {[
                    { x: 70, y: 50 },
                    { x: 130, y: 50 },
                    { x: 60, y: 100 },
                    { x: 140, y: 100 },
                  ].map((antenna, i) => (
                    <g key={i}>
                      <rect
                        x={antenna.x}
                        y={antenna.y}
                        width="4"
                        height="30"
                        fill="#04D9FF"
                        opacity="0.8"
                      />
                      <motion.circle
                        cx={antenna.x + 2}
                        cy={antenna.y + 15}
                        r="8"
                        fill="none"
                        stroke="#04D9FF"
                        strokeWidth="1"
                        opacity="0.4"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.4, 0.1, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    </g>
                  ))}
                </svg>
              </div>

              {/* Fiber Optic Lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      width: '4px',
                      height: '300px',
                      background: `linear-gradient(to right, transparent, #04D9FF, transparent)`,
                      transform: `rotate(${-30 + i * 15}deg)`,
                      transformOrigin: 'bottom center',
                      left: `${40 + i * 5}%`,
                      bottom: '20%',
                      opacity: 0.6,
                    }}
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>

              {/* Glowing Fiber Streaks */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                  style={{
                    width: '60%',
                    left: '20%',
                    top: `${30 + i * 20}%`,
                    opacity: 0.5,
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Service Icons Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 pt-8 border-t border-cyan-500/20"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {serviceIcons.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className="p-3 rounded-lg border border-cyan-500/30 group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-all duration-300">
                    <Icon className="text-cyan-400 group-hover:text-cyan-300" size={24} />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-cyan-300 transition-colors">
                    {item.label}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes fall {
          from {
            transform: translateY(-100vh);
          }
          to {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </section>
  )
}


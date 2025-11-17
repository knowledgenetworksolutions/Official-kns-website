'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ShieldCheck, Search, FileCheck, AlertTriangle, Activity, Lock, GraduationCap, ArrowRight } from 'lucide-react'

export default function CybersecurityHero() {
  const serviceIcons = [
    { icon: Search, label: 'PenTesting' },
    { icon: FileCheck, label: 'IT Audit' },
    { icon: AlertTriangle, label: 'Risk Management' },
    { icon: Activity, label: 'SecOps' },
    { icon: Lock, label: 'Data Governance' },
    { icon: GraduationCap, label: 'Training' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-black pt-24 md:pt-32">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Binary Code Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full font-mono text-xs text-cyan-400/20 whitespace-pre-wrap">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="absolute" style={{ 
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `fall ${10 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}>
                {Math.random().toString(2).substring(2, 10)}
              </div>
            ))}
          </div>
        </div>

        {/* Circuit Patterns */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ffff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0066ff" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M 100 200 L 300 200 L 300 400 L 500 400 L 500 200 L 700 200 L 700 600 L 900 600 L 900 400 L 1100 400"
              stroke="url(#circuitGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <circle cx="300" cy="200" r="4" fill="#00ffff" opacity="0.5" />
            <circle cx="500" cy="400" r="4" fill="#00ffff" opacity="0.5" />
            <circle cx="700" cy="600" r="4" fill="#00ffff" opacity="0.5" />
          </svg>
        </div>

        {/* Light Streaks */}
        <div className="absolute inset-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-full w-1 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
              initial={{ x: `${20 + i * 30}%`, opacity: 0 }}
              animate={{
                x: [`${20 + i * 30}%`, `${80 + i * 10}%`, `${20 + i * 30}%`],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Bokeh Dots */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/20 blur-sm"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
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
            {/* Theme Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-cyan-400 font-semibold text-lg mb-4 tracking-wider"
            >
              DEFEND. PROTECT. RESILIENT.
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Cybersecurity & Digital Resilience
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              Protecting institutions, empowering people, and strengthening national digital security across Sierra Leone, Guinea & Liberia.
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-cyan-300 mb-10 font-medium"
            >
              Identify threats. Strengthen defences. Build resilient systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/cybersecurity"
                className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
              >
                Explore Cybersecurity Services
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Speak with a Cybersecurity Expert
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual - Shield & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Shield Visualization */}
            <div className="relative w-full h-full">
              {/* Shield Base */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative">
                  {/* Network Nodes Shield */}
                  <svg width="400" height="400" viewBox="0 0 400 400" className="w-full h-full">
                    <defs>
                      <radialGradient id="shieldGradient" cx="50%" cy="50%">
                        <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#0066ff" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#0033ff" stopOpacity="0.3" />
                      </radialGradient>
                    </defs>
                    
                    {/* Shield Shape */}
                    <path
                      d="M 200 50 L 300 100 L 300 200 L 200 350 L 100 200 L 100 100 Z"
                      fill="url(#shieldGradient)"
                      stroke="#00ffff"
                      strokeWidth="2"
                      opacity="0.6"
                    />
                    
                    {/* Network Nodes */}
                    {[
                      { x: 200, y: 100 },
                      { x: 250, y: 150 },
                      { x: 200, y: 200 },
                      { x: 150, y: 150 },
                      { x: 200, y: 250 },
                    ].map((node, i) => (
                      <g key={i}>
                        <motion.circle
                          cx={node.x}
                          cy={node.y}
                          r="8"
                          fill="#00ffff"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.4,
                          }}
                        />
                        {/* Connecting Lines */}
                        {i > 0 && (
                          <line
                            x1={node.x}
                            y1={node.y}
                            x2={200}
                            y2={200}
                            stroke="#00ffff"
                            strokeWidth="1"
                            opacity="0.4"
                          />
                        )}
                      </g>
                    ))}
                  </svg>
                </div>
              </motion.div>

              {/* Map Overlay (Simplified Sierra Leone representation) */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-30"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <div className="relative w-64 h-64">
                  {/* Simplified map grid */}
                  <svg width="256" height="256" viewBox="0 0 256 256" className="w-full h-full">
                    <defs>
                      <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00ffff" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#0066ff" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    {Array.from({ length: 8 }).map((_, i) => (
                      <g key={i}>
                        <line
                          x1={i * 32}
                          y1="0"
                          x2={i * 32}
                          y2="256"
                          stroke="url(#mapGradient)"
                          strokeWidth="1"
                        />
                        <line
                          x1="0"
                          y1={i * 32}
                          x2="256"
                          y2={i * 32}
                          stroke="url(#mapGradient)"
                          strokeWidth="1"
                        />
                      </g>
                    ))}
                    {/* Pulsing nodes */}
                    {[
                      { x: 100, y: 120 },
                      { x: 120, y: 100 },
                      { x: 140, y: 130 },
                      { x: 110, y: 150 },
                    ].map((point, i) => (
                      <motion.circle
                        key={i}
                        cx={point.x}
                        cy={point.y}
                        r="4"
                        fill="#00ffff"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </svg>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Service Icons Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
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


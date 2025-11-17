'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Partner Services', href: '/partner-services' },
    { name: 'Training', href: '/training' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 relative ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Logo + Name */}
      <Link
        href="/"
        className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 flex items-center gap-1 z-10"
      >
        {logoError ? (
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-mauve to-mauve-dark bg-clip-text text-transparent">
            KNS
          </div>
        ) : (
          <div className="relative h-20 w-20 md:h-24 md:w-24 flex-shrink-0">
            <Image
              src="/IMG_2498-removebg-preview.png"
              alt="KNS Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 80px, 96px"
              onError={() => setLogoError(true)}
            />
          </div>
        )}

        {/* Text now close to logo */}
        <div className="flex flex-col text-sm lg:text-base font-semibold text-charcoal leading-tight ml-1 sm:ml-2">
          <span>Knowledge</span>
          <span>Network</span>
          <span>Solutions</span>
        </div>
      </Link>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-end h-24 md:h-28">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group px-4 py-2.5 text-charcoal font-semibold hover:text-mauve transition-all duration-300 text-sm lg:text-base rounded-lg hover:bg-mauve-light/10"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-mauve group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-charcoal hover:text-mauve transition-colors p-2 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-5 py-3.5 text-charcoal hover:text-mauve hover:bg-mauve-light/20 rounded-lg transition-all duration-300 font-semibold text-base border-l-4 border-transparent hover:border-mauve"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
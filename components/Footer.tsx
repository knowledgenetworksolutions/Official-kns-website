'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const [logoError, setLogoError] = useState(false)
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Training', href: '/training' },
    { name: 'Partner Services', href: '/partner-services' },
    { name: 'Contact', href: '/contact' },
  ]

  const tags = [
    'Cisco',
    'Microsoft',
    'CIW',
    'Fortinet',
    'VMWare',
    'Linux',
    'CWNP',
    'Comptia',
    'Exin',
    'Ec - Council',
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gradient-to-r from-mauve-dark to-mauve text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            {logoError ? (
              <div className="text-xl sm:text-2xl font-bold text-white mb-4">
                KNS
              </div>
            ) : (
              <div className="relative h-10 w-24 sm:h-12 sm:w-32 mb-4">
                <Image
                  src="/IMG_2498-removebg-preview.png"
                  alt="KNS Logo"
                  fill
                  className="object-contain"
                  sizes="128px"
                  onError={() => setLogoError(true)}
                />
              </div>
            )}
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Knowledge Network Solutions - Sierra Leone
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm md:text-base text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Tags</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
              {tags.map((tag) => (
                <span key={tag} className="inline-block px-2 sm:px-3 py-1 bg-white/10 rounded text-white/80 text-xs sm:text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Keep in Touch */}
          <div>
            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">Keep in Touch</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 text-xs sm:text-sm md:text-base text-white/80">
                <Mail size={16} className="sm:w-[18px] sm:h-[18px] mt-0.5 sm:mt-1 flex-shrink-0" />
                <span>info@kns.sl</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm md:text-base text-white/80">
                <Phone size={16} className="sm:w-[18px] sm:h-[18px] mt-0.5 sm:mt-1 flex-shrink-0" />
                <span>232 79 442 442</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm md:text-base text-white/80">
                <Phone size={16} className="sm:w-[18px] sm:h-[18px] mt-0.5 sm:mt-1 flex-shrink-0" />
                <span>+1 301 9413 774</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm md:text-base text-white/80">
                <MapPin size={16} className="sm:w-[18px] sm:h-[18px] mt-0.5 sm:mt-1 flex-shrink-0" />
                <span>
                  29A Charles Street and 18 Dundas Street,<br />
                  Freetown, Sierra Leone
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-6 sm:mt-10 md:mt-12 grid md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Newsletter</h4>
            <p className="text-xs sm:text-sm md:text-base text-white/80 mb-3 sm:mb-4">
              Keep up on our always evolving product features and technology. Enter your e-mail and subscribe to our newsletter.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Enter your e-mail" className="flex-1 px-4 py-2 rounded-lg text-charcoal focus:outline-none text-sm sm:text-base" />
              <button type="button" className="px-4 sm:px-6 py-2 bg-white text-mauve font-semibold rounded-lg hover:bg-white/90 text-sm sm:text-base whitespace-nowrap">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-6 sm:mt-10 md:mt-12 pt-4 sm:pt-6 md:pt-8 text-center text-white/80">
          <p className="text-xs sm:text-sm md:text-base">© Copyrights Knowledge Network Solutions 2014. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


'use client'

import { motion } from 'framer-motion'
import { Mail, PhoneCall, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    'Cybersecurity & Digital Resilience',
    'Telecommunications Engineering & Network Services',
    'Digital Skills Development & Capacity Building',
    'Customer Experience & Call Center Services',
    'Digital Transformation & Enterprise Technology Solutions',
    'Outsourcing & Managed Services',
    'General Inquiry',
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Form submitted:', formData)
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({ 
        name: '', 
        email: '', 
        phone: '',
        company: '',
        subject: '',
        service: '',
        message: '' 
      })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-mauve-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mauve focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mauve focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mauve focus:border-transparent transition-all duration-300"
                    placeholder="+232 79 442 442"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mauve focus:border-transparent transition-all duration-300"
                    placeholder="Your Company Name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mauve focus:border-transparent transition-all duration-300 bg-white"
                >
                  <option value="">Select a service (optional)</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mauve focus:border-transparent transition-all duration-300"
                  placeholder="What is your inquiry about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mauve focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-mauve text-white rounded-lg font-semibold hover:bg-mauve-dark transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="relative w-5 h-5">
                      <img
                        src="/icons/send-icon.svg"
                        alt="Send"
                        className="w-5 h-5 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement
                          if (fallback) fallback.style.display = 'block'
                        }}
                      />
                      <Send size={20} style={{ display: 'none' }} />
                    </span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-mauve-light rounded-lg relative w-12 h-12 flex items-center justify-center">
                    <img
                      src="/icons/email-icon.svg"
                      alt="Email"
                      className="w-6 h-6 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement
                        if (fallback) fallback.style.display = 'block'
                      }}
                    />
                    <Mail className="text-mauve" size={24} style={{ display: 'none' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Email</h4>
                    <p className="text-gray-600">info@kns.sl</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-mauve-light rounded-lg relative w-12 h-12 flex items-center justify-center">
                    <img
                      src="/icons/phone-icon.svg"
                      alt="Phone"
                      className="w-6 h-6 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement
                        if (fallback) fallback.style.display = 'block'
                      }}
                    />
                    <PhoneCall className="text-mauve" size={24} style={{ display: 'none' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Phone</h4>
                    <p className="text-gray-600">232 79 442 442</p>
                    <p className="text-gray-600">+1 301 9413 774</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-mauve-light rounded-lg relative w-12 h-12 flex items-center justify-center">
                    <img
                      src="/icons/location-icon.svg"
                      alt="Location"
                      className="w-6 h-6 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement
                        if (fallback) fallback.style.display = 'block'
                      }}
                    />
                    <MapPin className="text-mauve" size={24} style={{ display: 'none' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Address</h4>
                    <p className="text-gray-600">
                      29A Charles Street and 18 Dundas Street,<br />
                      Freetown, Sierra Leone
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="rounded-xl shadow-lg overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.985!2d-13.234!3d8.484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjknMDQuNCJOIDEzwrAxNCcwMi40Ilc!5e0!3m2!1sen!2ssl!4v1699999999999!5m2!1sen!2ssl&q=29A+Charles+Street+and+18+Dundas+Street,+Freetown,+Sierra+Leone"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KNS Office Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


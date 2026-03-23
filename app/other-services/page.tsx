'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import OtherServicesSection from '@/components/other-services-section'

const whatsappNumber = '254759256514'

const sendToWhatsApp = (message: string) => {
  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
}

export default function OtherServicesPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 border-b border-cyan-500/10 bg-background/80 backdrop-blur-xl glass-effect"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img
                src="/agentpluslogo.jpg"
                alt=""
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-lg font-bold text-white">AgentPlus</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/#features" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                Features
              </Link>
              <Link href="/#metrics" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                Analytics
              </Link>
              <Link href="/" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                Pricing
              </Link>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={() => sendToWhatsApp('Hi! I want to learn more about your other services.')}
                  size="sm" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
            <div className="md:hidden">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={() => sendToWhatsApp('Hi! I want to learn more about your other services.')}
                  size="sm" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                >
                  Contact
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Practical Digital
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              Services for SMEs
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-4"
          >
            Beyond AI agents, we provide affordable, done-for-you solutions designed specifically for small businesses who want results fast.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base text-cyan-300 font-semibold"
          >
            Mix and match services or create a custom package that fits your needs perfectly.
          </motion.p>
        </div>
      </section>

      {/* Main Services Section */}
      <OtherServicesSection />

      {/* Why Choose Our Services */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm text-cyan-300">Why Choose Us</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We understand small business challenges. That's why we built services that deliver real results.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              {
                title: 'Quick Setup',
                description: 'Most services are set up within 24-48 hours. Get started immediately without waiting weeks.',
                icon: '⚡',
              },
              {
                title: 'Affordable Pricing',
                description: 'Built specifically for SMEs. No enterprise pricing. Pay only for what you need.',
                icon: '💰',
              },
              {
                title: 'Done-for-You',
                description: 'We handle everything. No technical knowledge required. Just tell us your business info.',
                icon: '✨',
              },
              {
                title: 'Expert Support',
                description: 'Direct support from our team. We make sure everything is working perfectly for you.',
                icon: '🎯',
              },
              {
                title: 'Results-Focused',
                description: 'Every service is designed to increase visibility, capture leads, or boost engagement.',
                icon: '📈',
              },
              {
                title: 'Scalable',
                description: 'Start with one service, add more as your business grows. We grow with you.',
                icon: '🚀',
              },
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-8 group hover:border-cyan-400/50 transition-all cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Common Questions
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="space-y-4"
          >
            {[
              {
                q: 'How long does setup take?',
                a: 'Most services are set up within 24-48 hours. We handle everything so you can start seeing results immediately.',
              },
              {
                q: 'Do I need technical knowledge?',
                a: 'No technical knowledge required. Our team handles all the setup and configuration. You just provide your business information.',
              },
              {
                q: 'Can I combine services?',
                a: 'Absolutely! Most businesses combine multiple services. We can create a custom package tailored to your specific needs.',
              },
              {
                q: 'What if I need support?',
                a: 'We provide direct support via WhatsApp and email. Our team is here to help you succeed with every service.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 group hover:border-cyan-400/50 transition-all"
              >
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">❓</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                    <p className="text-gray-300 text-sm">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-cyan-500/5 pointer-events-none" />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        />
        
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-300 mb-8"
          >
            Chat with us on WhatsApp. We'll help you choose the perfect services for your business.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => sendToWhatsApp('Hi! I want to learn more about your services.')}
              size="lg"
              className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg"
            >
              Chat on WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

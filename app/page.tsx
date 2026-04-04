'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { OrbitHero } from '@/components/orbit-hero'
import { OrbitFeatures } from '@/components/orbit-features'
import { OrbitMetrics } from '@/components/orbit-metrics'
import { AgentPlusTestimonials } from '@/components/agentplus-testimonials'
import { PricingSectionNew } from '@/components/pricing-section-new'
import { TrustBanner } from '@/components/trust-banner'
import { AgentPlusTimeline } from '@/components/agentplus-timeline'
import GlobeFeatureSection from '@/components/ui/globe-feature-section'
import { MessageSquare } from 'lucide-react'

const whatsappNumber = '254759256514'

const sendToWhatsApp = () => {
  const message = encodeURIComponent('Hi! I want to learn more about AgentPlus AI agents.')
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
}

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 border-b border-primary/10 bg-background/80 backdrop-blur-xl glass-effect"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img
                src="/agentplus.logo.jpg"
                alt=""
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-lg font-bold text-white">AgentPlus</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Features
              </Link>
              <Link href="#metrics" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Analytics
              </Link>
              <Link href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Testimonials
              </Link>
              <Link href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Pricing
              </Link>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={sendToWhatsApp} size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Start Free
                </Button>
              </motion.div>
            </div>
            <div className="md:hidden">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={sendToWhatsApp} size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Start
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Trust Banner */}
      <TrustBanner />

      {/* Hero Section */}
      <OrbitHero />

      {/* Services Section */}
      <section id="features">
        <OrbitFeatures />
      </section>

      {/* Metrics Section */}
      <section id="metrics">
        <OrbitMetrics />
      </section>

      {/* Why AgentPlus Section */}
      <section>
        <AgentPlusTimeline />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <AgentPlusTestimonials />
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <PricingSectionNew />
      </section>

      {/* Globe Feature Section */}
      <div className="container mx-auto px-4">
        <GlobeFeatureSection />
      </div>

      {/* Footer */}
      <footer className="border-t border-primary/10 bg-background/50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <img src="/agentplus.logo.jpg" alt="" className="w-8 h-8 rounded-lg object-cover" />
                <span className="font-bold text-foreground">AgentPlus</span>
              </div>
              <p className="text-sm text-muted-foreground">AI agents that work 24/7 for your business.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#features" className="hover:text-cyan-400 transition-colors">Features</Link></li>
                <li><Link href="#metrics" className="hover:text-cyan-400 transition-colors">Analytics</Link></li>
                <li><Link href="/other-services" className="hover:text-cyan-400 transition-colors">Services</Link></li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
              </ul>
            </motion.div>
          </div>
          <div className="border-t border-primary/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 AgentPlus. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Sticky Button */}
      <motion.button
        onClick={sendToWhatsApp}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white p-4 rounded-full shadow-lg z-40 glow-cyan"
        title="Chat on WhatsApp"
        aria-label="Open WhatsApp chat"
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>
    </main>
  )
}

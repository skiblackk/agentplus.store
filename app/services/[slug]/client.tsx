'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import type { ServiceData } from '@/lib/services-data'

export default function ServiceDetailClient({ service }: { service: ServiceData }) {
  const whatsappNumber = '254759256514'
  const sendToWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the ${service.title} service. Can we discuss pricing and implementation?`
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3" />
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {service.shortDescription}
            </p>
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(92, 193, 174, 0.2)',
                  '0 0 40px rgba(92, 193, 174, 0.4)',
                  '0 0 20px rgba(92, 193, 174, 0.2)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block"
            >
              <Button
                onClick={sendToWhatsApp}
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-lg"
              >
                Get Started Today
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Returns & Benefits Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              What You'll Get
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The tangible returns and benefits your business will experience with {service.title}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {service.returns.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-8 group hover:border-primary/50 transition-all"
              >
                <div className="flex gap-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="w-12 h-12 rounded-lg bg-primary/30 flex items-center justify-center flex-shrink-0 text-primary"
                  >
                    <Check className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ROI Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 text-center border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5"
          >
            <p className="text-muted-foreground text-sm mb-2">REALISTIC ROI PROJECTION</p>
            <p className="text-2xl sm:text-3xl font-bold text-foreground">{service.roiHighlight}</p>
          </motion.div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Why This Matters for Your Business
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Understanding the critical importance of implementing this solution
            </p>
          </motion.div>

          <div className="space-y-6">
            {service.importance.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 border-l-4 border-primary/50 hover:border-primary transition-all"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-foreground text-lg leading-relaxed">{item.reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              What's Included
            </h2>
            <p className="text-muted-foreground text-lg">
              Complete set of features to maximize your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex items-start gap-4 p-6 glass-card"
              >
                <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm mt-1">
                  ✓
                </div>
                <p className="text-foreground text-lg">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Fair & Transparent Pricing
            </h2>
            <p className="text-muted-foreground text-lg">
              No hidden fees. What you see is what you pay.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 text-center"
          >
            <p className="text-muted-foreground text-sm mb-4">ONE-TIME PRICE</p>
            <p className="text-5xl sm:text-6xl font-bold text-primary mb-2">
              ${service.pricing.amount}
            </p>
            <p className="text-muted-foreground text-sm mb-8">{service.pricing.type === 'one-time' ? 'One-time payment' : 'Per month'}</p>
            <p className="text-foreground text-lg mb-8 max-w-2xl mx-auto">
              We offer flexible payment plans. Projects above $500 qualify for installment options. Our goal is to make enterprise-level solutions accessible to businesses of all sizes.
            </p>
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(92, 193, 174, 0.2)',
                  '0 0 40px rgba(92, 193, 174, 0.4)',
                  '0 0 20px rgba(92, 193, 174, 0.2)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block"
            >
              <Button
                onClick={sendToWhatsApp}
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg rounded-lg shadow-lg"
              >
                Schedule a Free Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how {service.title} can transform your business. Reach out on WhatsApp for a quick conversation—no sales pitch, just real solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={sendToWhatsApp}
                  className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg"
                >
                  {service.contactCTA}
                </Button>
              </motion.div>
              <Link href="/#pricing">
                <Button
                  variant="outline"
                  className="px-8 py-3 border-primary/30 text-primary hover:bg-primary/10 font-semibold rounded-lg"
                >
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  const sendToWhatsApp = () => {
    const message = encodeURIComponent('Hi! I want to learn more about AgentPlus.')
    window.open(`https://wa.me/254759256514?text=${message}`, '_blank')
  }

  const values = [
    { title: 'Affordable', description: 'Enterprise-grade AI solutions at prices African businesses can afford' },
    { title: 'Simple', description: 'Easy to use, no technical knowledge required' },
    { title: 'Reliable', description: '24/7 support and 99.9% uptime guarantee' },
    { title: 'Local', description: 'Built for African markets and payment systems' },
  ]

  return (
    <main className="bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-primary/10 bg-background/80 backdrop-blur-xl glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/agentplus-icon.jpg" alt="AgentPlus Logo" className="w-8 h-8 rounded-lg object-cover" />
            <span className="text-lg font-bold text-foreground">AgentPlus</span>
          </Link>
          <Link href="/" className="text-primary hover:text-primary/80 transition-colors font-semibold flex items-center gap-2">
            ← Back Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/3 pointer-events-none" />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground"
          >
            About AgentPlus
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            We're on a mission to democratize AI automation for businesses across Africa. Our platform makes enterprise-grade tools accessible and affordable.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              To empower African businesses with affordable, easy-to-use AI automation tools that save time, reduce costs, and drive growth. We believe every business, regardless of size or budget, deserves access to world-class technology.
            </p>
            <h2 className="text-3xl font-bold text-foreground mb-6">Why AgentPlus?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We understand the unique challenges African businesses face: limited budgets, staffing challenges, and the need for reliable customer service. AgentPlus solves these problems with AI agents that work 24/7, handling customer interactions, capturing leads, and automating repetitive tasks—all without requiring technical expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="glass-card p-6 text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-foreground"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={sendToWhatsApp}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3"
            >
              Get Started Today <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

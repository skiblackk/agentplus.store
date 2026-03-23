'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, TrendingUp, Zap, Shield } from 'lucide-react'

export function WhyAgentPlus() {
  const reasons = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Proven ROI',
      description: 'Customers see a 2-3x return on investment within the first 6 months through increased conversions and reduced operational costs.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Quick Implementation',
      description: 'Get up and running in days, not months. Our dedicated setup team handles everything so you can start earning immediately.',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Reliable Performance',
      description: 'No downtime. Our AI agents work 24/7/365, capturing every lead and opportunity while you sleep.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'African-First Solution',
      description: 'Built specifically for African businesses. Understands local currencies, languages, and business models.',
    },
  ]

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Why Businesses Choose AgentPlus
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join 500+ successful African businesses automating their customer interactions and scaling without limits.
          </p>
        </motion.div>

        {/* Reasons Grid */}
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="glass-card p-8 flex flex-col relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4 relative z-10"
              >
                {reason.icon}
              </motion.div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 relative z-10">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

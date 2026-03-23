'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassFeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export function GlassFeatureCard({ icon, title, description, delay = 0 }: GlassFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="group relative"
    >
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Card */}
      <div className="glass-card p-8 relative overflow-hidden h-full">
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10 space-y-4">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
            className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-primary/20 flex items-center justify-center text-primary"
          >
            {icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

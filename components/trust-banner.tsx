'use client'

import { motion } from 'framer-motion'
import { Award, Users, Zap } from 'lucide-react'

export function TrustBanner() {
  const stats = [
    {
      icon: <Users className="w-5 h-5" />,
      label: '500+ Businesses',
      value: 'Trust AgentPlus',
    },
    {
      icon: <Zap className="w-5 h-5" />,
      label: '1M+ Conversations',
      value: 'Handled Monthly',
    },
    {
      icon: <Award className="w-5 h-5" />,
      label: '98% Satisfaction',
      value: 'Customer Rating',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary/10 border-b border-primary/20 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3 text-center sm:text-left"
            >
              <div className="text-primary flex-shrink-0">{stat.icon}</div>
              <div>
                <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

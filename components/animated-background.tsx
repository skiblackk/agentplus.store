'use client'

import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient mesh */}
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
          </filter>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="1000" height="1000" fill="url(#grad1)" filter="url(#blur)" />

        {/* Animated circles */}
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="1"
          opacity="0.1"
          animate={{
            r: [150, 180, 150],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.circle
          cx="800"
          cy="300"
          r="120"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1"
          opacity="0.1"
          animate={{
            r: [120, 150, 120],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
        <motion.circle
          cx="500"
          cy="800"
          r="100"
          fill="none"
          stroke="#ec4899"
          strokeWidth="1"
          opacity="0.1"
          animate={{
            r: [100, 130, 100],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
      </svg>
    </div>
  )
}

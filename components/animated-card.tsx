'use client'

import React from "react"

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { ReactNode } from 'react'
import { useTouchDevice, usePrefersReducedMotion } from '@/hooks/use-scroll-animation'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const isTouch = useTouchDevice()
  const prefersReducedMotion = usePrefersReducedMotion()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || prefersReducedMotion) return

    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const boxShadow = useMotionTemplate`
    0 0 50px rgba(124, 58, 255, ${mouseX.get() > 0 ? 0.3 : 0})
  `

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={!isTouch && !prefersReducedMotion ? { y: -8 } : {}}
      whileTap={isTouch && !prefersReducedMotion ? { scale: 0.98 } : {}}
    >
      <Card
        className={`relative overflow-hidden transition-all duration-300 ${className}`}
        style={{
          boxShadow: prefersReducedMotion
            ? undefined
            : '0 4px 6px rgba(0, 0, 0, 0.05)'
        }}
      >
        {!prefersReducedMotion && !isTouch && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle 100px at var(--mouse-x) var(--mouse-y), rgba(124, 58, 255, 0.1), transparent 100%)',
              '--mouse-x': mouseX,
              '--mouse-y': mouseY
            } as any}
          />
        )}
        <div className="relative z-10">{children}</div>
      </Card>
    </motion.div>
  )
}

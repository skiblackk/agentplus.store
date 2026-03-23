'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { AnimatedGradientBg } from './animated-gradient-bg'
import { usePrefersReducedMotion, useTouchDevice } from '@/hooks/use-scroll-animation'

interface PremiumHeroProps {
  onWhatsApp: () => void
}

export function PremiumHero({ onWhatsApp }: PremiumHeroProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const isTouch = useTouchDevice()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative px-4 py-24 sm:px-6 sm:py-40 lg:px-8 bg-white overflow-hidden">
      {!prefersReducedMotion && <AnimatedGradientBg />}

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Trust Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200">
              <CheckCircle2 className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Trusted by 500+ Small Businesses</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            AI That Works
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              For Your Business
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="mt-8 text-center text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Set it up once. Your AI agent works 24/7 handling customer messages, capturing leads, and providing support—so you can focus on growing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={!isTouch && !prefersReducedMotion ? { scale: 1.05 } : {}}
              whileTap={isTouch && !prefersReducedMotion ? { scale: 0.95 } : {}}
            >
              <Button
                onClick={onWhatsApp}
                size="lg"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={!isTouch && !prefersReducedMotion ? { scale: 1.05 } : {}}
              whileTap={isTouch && !prefersReducedMotion ? { scale: 0.95 } : {}}
            >
              <Button
                onClick={onWhatsApp}
                variant="outline"
                size="lg"
                className="px-8 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 bg-transparent"
              >
                Chat with Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Proof */}
          <motion.p variants={itemVariants} className="mt-8 text-center text-sm text-gray-500">
            No credit card required • 7-day free trial • Full setup by our team
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

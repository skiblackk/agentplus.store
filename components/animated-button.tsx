'use client'

import { motion } from 'framer-motion'
import { Button, ButtonProps } from '@/components/ui/button'
import { usePrefersReducedMotion, useTouchDevice } from '@/hooks/use-scroll-animation'

interface AnimatedButtonProps extends ButtonProps {
  isGlow?: boolean
}

export function AnimatedButton({ isGlow = true, children, ...props }: AnimatedButtonProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const isTouch = useTouchDevice()

  return (
    <motion.div
      whileHover={!isTouch && !prefersReducedMotion ? { scale: 1.02 } : {}}
      whileTap={!prefersReducedMotion ? { scale: 0.98 } : {}}
      className="relative"
    >
      {isGlow && !prefersReducedMotion && !isTouch && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        />
      )}
      <Button {...props} className={`relative ${props.className}`}>
        {children}
      </Button>
    </motion.div>
  )
}

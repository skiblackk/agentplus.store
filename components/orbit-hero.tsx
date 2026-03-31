'use client'

import { motion, useMousePosition } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function OrbitHero() {
  const whatsappNumber = '254759256514'
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    setIsMobile(window.innerWidth < 768)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const sendToWhatsApp = () => {
    const message = encodeURIComponent('Hi! I want to learn more about AgentPlus AI agents.')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Video - AgentPlus Store Advertisement */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
        preload="metadata"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agentplusstore_Advertisement_Video_Ready-q9IS638rvjO3e1ubCfw63q9BK4tNBE.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for text readability - lighter for Spline visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-background/20 to-background/30" style={{ zIndex: 1 }} />

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3" style={{ zIndex: 2 }} />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-15" style={{ zIndex: 3 }}>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(92,193,174,.15)_25%,rgba(92,193,174,.15)_26%,transparent_27%,transparent_74%,rgba(92,193,174,.15)_75%,rgba(92,193,174,.15)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(92,193,174,.15)_25%,rgba(92,193,174,.15)_26%,transparent_27%,transparent_74%,rgba(92,193,174,.15)_75%,rgba(92,193,174,.15)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      {/* Premium 3D Orbs - Floating Glass Spheres */}
      {/* Main Hero Orb - Center */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          rotate: [0, 360],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          x: mousePosition.x * 0.03,
          y: mousePosition.y * 0.03,
          zIndex: 4,
        }}
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent rounded-full blur-2xl shadow-2xl"
      >
        {/* Inner glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-t from-primary/30 to-primary/0 rounded-full blur-xl"
        />
      </motion.div>

      {/* Secondary Orb - Bottom Left */}
      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -20, 0],
          rotate: [360, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.03,
          zIndex: 4,
        }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary/35 to-transparent rounded-full blur-2xl shadow-2xl"
      />

      {/* Accent Orb - Top Left */}
      <motion.div
        style={{ zIndex: 4 }}
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, -360],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-primary/25 to-transparent rounded-full blur-3xl"
      />

      {/* Premium Grid Pattern with Animation */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 opacity-15"
        style={{ zIndex: 3 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(92,193,174,.2)_25%,rgba(92,193,174,.2)_26%,transparent_27%,transparent_74%,rgba(92,193,174,.2)_75%,rgba(92,193,174,.2)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(92,193,174,.2)_25%,rgba(92,193,174,.2)_26%,transparent_27%,transparent_74%,rgba(92,193,174,.2)_75%,rgba(92,193,174,.2)_76%,transparent_77%,transparent)] bg-[length:40px_40px]" />
      </motion.div>

      {/* Spline 3D Model Embed */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
        <iframe
          src="https://my.spline.design/agentplus3d-c17e8e9e8f984d1fa58b7d95c35ede45/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
          style={{ pointerEvents: 'auto' }}
        ></iframe>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto relative" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* AgentPlus Store Branding */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="glass-card px-8 py-3 w-fit border-primary/40 bg-primary/10">
              <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary text-transparent bg-clip-text">
                AgentPlus.store
              </p>
            </div>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(92, 193, 174, 0.3)',
                  '0 0 40px rgba(92, 193, 174, 0.5)',
                  '0 0 20px rgba(92, 193, 174, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="glass-card px-6 py-2 w-fit border-primary/30"
            >
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-primary rounded-full"
                />
                <span className="text-xs sm:text-sm font-medium text-primary">Trusted by 500+ Businesses</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Headline with Premium 3D Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 100 }}
                className="block"
                style={{
                  textShadow: '0 10px 30px rgba(92, 193, 174, 0.2)',
                }}
              >
                AI Agents
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, type: 'spring', stiffness: 100 }}
                className="block bg-gradient-to-r from-primary via-primary/80 to-primary text-transparent bg-clip-text mt-2"
                style={{
                  filter: 'drop-shadow(0 10px 20px rgba(92, 193, 174, 0.15))',
                }}
              >
                That Never Sleep
              </motion.span>
            </h1>
            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 w-20 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full"
            />
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            24/7 AI agents handling customer messages, capturing leads, and providing support—all while you focus on growing your business.
          </motion.p>

          {/* Premium CTA Buttons with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            {/* Primary CTA Button */}
            <motion.div
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 10px 30px rgba(92, 193, 174, 0.25)',
                    '0 20px 50px rgba(92, 193, 174, 0.4)',
                    '0 10px 30px rgba(92, 193, 174, 0.25)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="rounded-lg"
              >
                <Button
                  onClick={sendToWhatsApp}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold rounded-lg shadow-2xl transform transition-all"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Secondary CTA Button */}
            <motion.div
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto"
            >
              <motion.div
                className="rounded-lg"
                animate={{
                  boxShadow: [
                    '0 5px 15px rgba(92, 193, 174, 0.1)',
                    '0 10px 25px rgba(92, 193, 174, 0.2)',
                    '0 5px 15px rgba(92, 193, 174, 0.1)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <Button
                  onClick={sendToWhatsApp}
                  className="w-full sm:w-auto px-8 py-4 border-2 border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 hover:border-primary/80 transition-all bg-primary/5 backdrop-blur-sm"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat Now
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="pt-6 space-y-3"
          >
            <p className="text-xs sm:text-sm text-muted-foreground">
              No credit card • 7-day free trial • Setup by our team
            </p>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="flex justify-center"
            >
              <div className="text-2xl">↓</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

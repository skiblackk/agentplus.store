'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-black/[0.96]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <Card className="w-full bg-transparent border-none shadow-none relative overflow-hidden">
          <div className="flex flex-col lg:flex-row h-full items-center">
            {/* Left content */}
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center text-left space-y-8">
              {/* AgentPlus Store Branding */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-start"
              >
                <div className="glass-card px-6 py-2 w-fit border-white/20 bg-white/5 flex items-center gap-3">
                  <img src="/agentplus.logo.jpg" alt="" className="w-6 h-6 rounded-lg object-cover" />
                  <p className="text-sm sm:text-base font-bold text-white">
                    AgentPlus.store
                  </p>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-tight">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="block text-white"
                  >
                    AI Agents
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="block bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mt-2"
                  >
                    That Never Sleep
                  </motion.span>
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lg lg:text-xl text-neutral-300 max-w-lg leading-relaxed"
              >
                24/7 AI agents handling customer messages, capturing leads, and providing support—all while you focus on growing your business.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button
                  onClick={sendToWhatsApp}
                  className="px-8 py-6 bg-white hover:bg-neutral-200 text-black font-semibold rounded-full shadow-lg transition-all"
                >
                  Start Free <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  onClick={sendToWhatsApp}
                  variant="outline"
                  className="px-8 py-6 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all bg-transparent"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat Now
                </Button>
              </motion.div>
            </div>

            {/* Right content - Spline Scene */}
            <div className="flex-1 relative w-full h-[400px] lg:h-[600px]">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}


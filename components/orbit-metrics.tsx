'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useEffect, useRef, useState } from 'react'

export function OrbitMetrics() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  const [animatedData, setAnimatedData] = useState<Array<{ time: string; value: number }>>([
    { time: '6 AM', value: 0 },
    { time: '9 AM', value: 0 },
    { time: '12 PM', value: 0 },
    { time: '3 PM', value: 0 },
    { time: '6 PM', value: 0 },
    { time: '9 PM', value: 0 },
  ])

  const finalData = [
    { time: '6 AM', value: 45 },
    { time: '9 AM', value: 89 },
    { time: '12 PM', value: 72 },
    { time: '3 PM', value: 58 },
    { time: '6 PM', value: 34 },
    { time: '9 PM', value: 12 },
  ]

  const chartRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          // Animate bars growing in sequentially
          finalData.forEach((item, idx) => {
            setTimeout(() => {
              setAnimatedData((prev) => {
                const newData = [...prev]
                newData[idx] = { ...newData[idx], value: item.value }
                return newData
              })
            }, idx * 100)
          })
        }
      },
      { threshold: 0.2 }
    )

    if (chartRef.current) {
      observer.observe(chartRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const [animatedStats, setAnimatedStats] = useState([
    { label: 'Response Time', value: 0, finalValue: 5, unit: 'ms', icon: '⚡' },
    { label: 'Uptime', value: 0, finalValue: 99.9, unit: '%', icon: '🛡️' },
    { label: 'Lead Capture', value: 0, finalValue: 340, unit: '%', icon: '📈' },
    { label: 'Cost Savings', value: 0, finalValue: 70, unit: '%', icon: '💰' },
  ])

  const statsRef = useRef(null)
  const statsAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsAnimated.current) {
          statsAnimated.current = true
          setAnimatedStats((prev) =>
            prev.map((stat) => {
              const duration = 2000
              const startTime = Date.now()

              const animate = () => {
                const elapsed = Date.now() - startTime
                const progress = Math.min(elapsed / duration, 1)
                const currentValue = Math.floor(stat.finalValue * progress)

                setAnimatedStats((current) =>
                  current.map((s) =>
                    s.label === stat.label ? { ...s, value: currentValue } : s
                  )
                )

                if (progress < 1) {
                  requestAnimationFrame(animate)
                }
              }

              animate()
              return stat
            })
          )
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const metricsData = animatedData; // Declare metricsData variable
  const stats = animatedStats; // Declare stats variable

  return (
    <section id="metrics" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Video - High Tech Digital World */}
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
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/High%20tech%20digital%20world%20background%204k-QbUTh8sG6uYoCEPjPgb2Z0B5OBTlfW.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/70" style={{ zIndex: 1 }} />

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" style={{ zIndex: 2 }} />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" style={{ zIndex: 2 }} />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-200" style={{ zIndex: 2 }} />

      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary">Live Analytics</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Watch Your AI Agents Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Real-time metrics and growth analytics showing how your AI agents are driving results for your business</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Chart - spans 2 columns on large screens */}
          <motion.div
            ref={chartRef}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass-card p-6 sm:p-8 min-h-80"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Response Activity</h3>
                <p className="text-sm text-muted-foreground mt-1">Messages handled per hour</p>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center"
              >
                <span className="text-xl">📊</span>
              </motion.div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={animatedData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(6,182,212,0.1)" />
                <XAxis dataKey="time" stroke="rgba(200,200,200,0.3)" style={{ fontSize: '12px' }} />
                <YAxis stroke="rgba(200,200,200,0.3)" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    border: '1px solid rgba(6, 182, 212, 0.5)',
                    borderRadius: '8px',
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)',
                  }}
                  labelStyle={{ color: '#06b6d4' }}
                  cursor={{ fill: 'rgba(6, 182, 212, 0.1)' }}
                />
                <Bar dataKey="value" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} animationDuration={800} />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity={1} />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Top right stat card - featured */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-card p-6 sm:p-8 flex flex-col justify-between group hover:border-cyan-400/50 cursor-pointer"
          >
            <div>
              <div className="text-4xl mb-4">📈</div>
              <div className="text-sm text-gray-400 mb-2">Lead Growth</div>
              <motion.div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                +{animatedStats[2]?.value || 0}%
              </motion.div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-gray-400">Monthly increase in qualified leads</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {animatedStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="glass-card p-4 sm:p-6 space-y-2 group hover:border-cyan-400/50 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="text-2xl sm:text-3xl">{stat.icon}</div>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-gray-600 group-hover:text-cyan-400/50 transition-colors"
                >
                  →
                </motion.div>
              </div>
              <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              <motion.div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                {stat.label === 'Response Time' ? `${animatedStats[0]?.value || 0}${stat.unit}` : `${animatedStats[animatedStats.findIndex((s) => s.label === stat.label)]?.value || 0}${stat.unit}`}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

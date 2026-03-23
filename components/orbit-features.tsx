'use client'

import Link from 'next/link'
import { MessageSquare, Globe, BarChart3, Zap, Clock, TrendingUp, Layout, Settings, Package, CreditCard, FileText, Share2, Brain, Building } from 'lucide-react'
import { motion } from 'framer-motion'
import { getAllServices } from '@/lib/services-data'

export function OrbitFeatures() {
  const services = getAllServices()
  const iconMap: Record<string, React.ReactNode> = {
    MessageSquare: <MessageSquare className="w-6 h-6" />,
    Globe: <Globe className="w-6 h-6" />,
    BarChart3: <BarChart3 className="w-6 h-6" />,
    Clock: <Clock className="w-6 h-6" />,
    TrendingUp: <TrendingUp className="w-6 h-6" />,
    Zap: <Zap className="w-6 h-6" />,
    Layout: <Layout className="w-6 h-6" />,
    Settings: <Settings className="w-6 h-6" />,
    Package: <Package className="w-6 h-6" />,
    CreditCard: <CreditCard className="w-6 h-6" />,
    FileText: <FileText className="w-6 h-6" />,
    Share2: <Share2 className="w-6 h-6" />,
    Brain: <Brain className="w-6 h-6" />,
    Building: <Building className="w-6 h-6" />,
  }

  return (
    <section id="features" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/3 pointer-events-none" />
      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-40 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30"
        >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary">All-in-One Platform</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Services That We Offer
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions for your business. Click on any service to see the returns and benefits you'll get.
          </p>
        </motion.div>

        {/* Services Grid with staggered animation */}
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <Link key={service.id} href={`/services/${service.slug}`}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="glass-card p-8 relative overflow-hidden h-full group cursor-pointer transition-all hover:border-primary/50"
              >
                {/* Glow background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Card */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-primary/20 flex items-center justify-center text-primary"
                  >
                    {iconMap[service.icon] || <Zap className="w-6 h-6" />}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.shortDescription}</p>

                  {/* View Details Link */}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="pt-4 text-primary font-semibold text-sm flex items-center gap-2"
                  >
                    View Details →
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

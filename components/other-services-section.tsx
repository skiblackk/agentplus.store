'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle2, Smartphone, Globe, MapPin, MessageCircle, Palette, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const whatsappNumber = '254759256514'

const sendToWhatsAppService = (serviceName: string) => {
  const message = `Hi! I'm interested in ${serviceName} from AgentPlus.`
  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
}

const otherServices = [
  {
    icon: Smartphone,
    title: 'WhatsApp Business Setup',
    tagline: 'Get found. Start replying instantly.',
    description: 'We set up a professional WhatsApp Business account with verified badge, business profile, and response templates.',
    benefits: ['Verified WhatsApp badge', 'Response templates', 'Business profile optimization'],
    cta: 'WhatsApp Business Setup',
  },
  {
    icon: Globe,
    title: 'Simple Business Website',
    tagline: 'Look professional. Get customers.',
    description: 'Beautiful 1–3 page website with contact forms, WhatsApp integration, and mobile optimization. No coding needed.',
    benefits: ['Mobile-optimized', 'WhatsApp contact forms', 'Fast loading'],
    cta: 'Build My Website',
  },
  {
    icon: MapPin,
    title: 'Google Maps Optimization',
    tagline: 'Get found online fast.',
    description: 'We set up and optimize your Google Business Profile so customers find you when searching locally.',
    benefits: ['Google Business Profile setup', 'Reviews management', 'Local visibility boost'],
    cta: 'Optimize My Listing',
  },
  {
    icon: MessageCircle,
    title: 'Customer Reply Setup',
    tagline: 'Start replying to customers instantly.',
    description: 'Basic chatbot and auto-reply system for WhatsApp or website. Handle FAQs and common questions automatically.',
    benefits: ['FAQ automation', 'Instant replies 24/7', 'Multi-channel support'],
    cta: 'Setup Auto-Replies',
  },
  {
    icon: Palette,
    title: 'Social Media Posters',
    tagline: 'Look professional every week.',
    description: 'Weekly packs of professional social media graphics. Ready to post. No design skills needed.',
    benefits: ['Weekly graphics', 'Professional templates', 'On-brand designs'],
    cta: 'Get Social Posters',
  },
]

export default function OtherServicesSection() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm text-cyan-300">Done-for-You Services</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Other Services We Offer
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Beyond AI agents, we provide practical, affordable digital solutions designed specifically for small businesses looking for quick results.
          </p>
        </motion.div>

        {/* Services Grid */}
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
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {otherServices.map((service, i) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-6 flex flex-col group hover:border-cyan-400/50 transition-all"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4 p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-fit group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all"
                >
                  <IconComponent className="h-6 w-6 text-cyan-400" />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>

                {/* Tagline */}
                <p className="text-sm font-semibold text-cyan-300 mb-3">{service.tagline}</p>

                {/* Description */}
                <p className="text-sm text-gray-300 mb-4 flex-1 leading-relaxed">{service.description}</p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-400">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                      </motion.div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => sendToWhatsAppService(service.title)}
                    variant="outline"
                    size="sm"
                    className="w-full border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 bg-transparent text-xs py-2 h-auto"
                  >
                    {service.cta}
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

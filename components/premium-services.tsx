'use client'

import { MessageSquare, Globe, BarChart3, Zap, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { TiltCard } from './tilt-card'
import { Button } from '@/components/ui/button'

interface PremiumServicesProps {
  onWhatsApp: () => void
}

export function PremiumServices({ onWhatsApp }: PremiumServicesProps) {
  const services = [
    {
      icon: MessageSquare,
      title: 'WhatsApp Business Agent',
      description: 'Auto-replies to messages, shares your product catalog, captures leads instantly.',
      benefits: ['Auto-replies 24/7', 'Lead capture', 'Product sharing'],
      color: 'from-purple-600 to-blue-600',
    },
    {
      icon: Globe,
      title: 'Website AI Chatbot',
      description: 'Smart chatbot on your website. Talks to visitors, answers FAQs, sends to WhatsApp.',
      benefits: ['24/7 visitor support', 'FAQ answers', 'Lead collection'],
      color: 'from-blue-600 to-cyan-600',
    },
    {
      icon: BarChart3,
      title: 'Google Maps Agent',
      description: 'We setup and optimize your business listing to get found by local customers.',
      benefits: ['Business optimization', 'Local visibility', 'Customer reviews'],
      color: 'from-cyan-600 to-green-600',
    },
    {
      icon: Zap,
      title: 'Customer Support Agent',
      description: 'FAQ-trained AI that handles support questions on WhatsApp or your website.',
      benefits: ['24/7 support', 'FAQ trained', 'Multi-channel'],
      color: 'from-green-600 to-purple-600',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Pick Your <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">AI Agent</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Done-for-you AI solutions. No coding. No setup hassle.
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
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <TiltCard key={index} className="h-full" enabled={true}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="p-6 rounded-xl bg-white border border-gray-100 hover:border-purple-200 h-full flex flex-col transition-all duration-300"
                >
                  {/* Icon with Gradient Background */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-2.5 mb-4 flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Title and Description */}
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{service.description}</p>

                  {/* Benefits List */}
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={onWhatsApp}
                      variant="outline"
                      size="sm"
                      className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 transition-colors duration-200 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </motion.div>
              </TiltCard>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

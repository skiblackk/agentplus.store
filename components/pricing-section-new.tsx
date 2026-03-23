'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function PricingSectionNew() {
  const whatsappNumber = '254759256514'

  const sendToWhatsApp = () => {
    const message = encodeURIComponent('Hi! I want to learn more about AgentPlus pricing.')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const plans = [
    {
      name: 'Starter',
      price: '$500',
      period: 'one-time',
      description: 'Perfect for small businesses just getting started',
      highlight: false,
      features: [
        'WhatsApp AI Agent',
        'Basic lead capture',
        'Email support',
        'Setup assistance',
        'One month of free updates',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Professional',
      price: '$1,500',
      period: 'one-time',
      description: 'For growing businesses with comprehensive solutions',
      highlight: true,
      features: [
        'Everything in Starter',
        'Web AI Chatbot',
        'Google Maps optimization',
        'Advanced lead routing',
        'Priority support',
        'Analytics dashboard',
        'Custom training',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large-scale operations and custom needs',
      highlight: false,
      features: [
        'Everything in Professional',
        'Multiple AI agents',
        'Custom integrations',
        'Dedicated account manager',
        'White-label options',
        'Multi-branch management',
        'Priority implementation',
      ],
      cta: 'Schedule Demo',
    },
  ]

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute -bottom-32 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Transparent pricing</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Simple, Fair Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your business. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
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
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`glass-card p-8 flex flex-col relative transition-all ${
                plan.highlight ? 'ring-2 ring-primary lg:scale-105 lg:row-span-2' : ''
              }`}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full whitespace-nowrap"
                >
                  Most Popular
                </motion.div>
              )}

              {/* Plan name and description */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-3">{plan.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
              </div>

              {/* Price section */}
              <div className="mb-8 pb-8 border-b border-white/10">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="flex flex-col gap-2 mb-2"
                >
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  {plan.period !== 'pricing' && (
                    <span className="text-muted-foreground text-sm font-medium">{plan.period.charAt(0).toUpperCase() + plan.period.slice(1)} Payment</span>
                  )}
                </motion.div>
                {plan.period === 'pricing' && (
                  <p className="text-muted-foreground text-sm">Contact us for custom pricing</p>
                )}
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mb-8"
              >
                <Button
                  onClick={sendToWhatsApp}
                  className={`w-full font-semibold py-3 transition-all ${
                    plan.highlight
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'bg-white/10 hover:bg-white/20 text-foreground border border-white/20'
                  }`}
                >
                  {plan.cta}
                </Button>
              </motion.div>

              {/* Features */}
              <div className="space-y-4 flex-1">
                <p className="text-foreground font-semibold text-sm mb-4">Includes:</p>
                {plan.features.map((feature, fIndex) => (
                  <motion.div
                    key={fIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: fIndex * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Flexible Payment Plans Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 sm:p-12 mb-12"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Flexible Payment Plans Available
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-muted-foreground mb-4">
                  Projects above 500 KES qualify for installment payments. Choose the plan that works best for your business:
                </p>
              </div>

              {/* Payment options */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-white/5 border border-primary/20 rounded-lg p-6"
                >
                  <h4 className="text-primary font-semibold mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-xs font-bold text-primary">1</span>
                    50/50 Split Payment
                  </h4>
                  <p className="text-foreground">50% upfront, 50% upon completion</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="bg-white/5 border border-primary/20 rounded-lg p-6"
                >
                  <h4 className="text-primary font-semibold mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-xs font-bold text-primary">2</span>
                    3-Installment Plan
                  </h4>
                  <p className="text-foreground">40% upfront, 30% after 30 days, 30% after 60 days</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="bg-white/5 border border-primary/20 rounded-lg p-6"
                >
                  <h4 className="text-primary font-semibold mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-xs font-bold text-primary">3</span>
                    Custom Monthly Plan
                  </h4>
                  <p className="text-foreground">Custom structured monthly installments for enterprise clients</p>
                </motion.div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-foreground mb-4">
                  <span className="font-semibold">Need a custom plan?</span> We believe in flexible payments that work with your cash flow. Contact our team to discuss a payment structure tailored to your business needs.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={sendToWhatsApp}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    Discuss Flexible Payment Options
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            Questions about pricing?{' '}
            <motion.button
              onClick={sendToWhatsApp}
              whileHover={{ textDecoration: 'underline', color: 'hsl(var(--primary))' }}
              className="text-primary font-semibold"
            >
              Chat with us
            </motion.button>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Phone, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  const sendToWhatsApp = () => {
    const message = encodeURIComponent('Hi! I have a question about AgentPlus.')
    window.open(`https://wa.me/254759256514?text=${message}`, '_blank')
  }

  const contactMethods = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'WhatsApp',
      description: 'Chat with us instantly',
      action: 'Message Us',
      actionFn: sendToWhatsApp,
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      description: 'hello@agentplus.ai',
      action: 'Send Email',
      actionLink: 'mailto:hello@agentplus.ai',
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone',
      description: '+254 759 256514',
      action: 'Call Us',
      actionLink: 'tel:+254759256514',
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Office',
      description: 'Nairobi, Kenya',
      action: 'Get Directions',
      actionLink: 'https://maps.google.com',
    },
  ]

  return (
    <main className="bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-primary/10 bg-background/80 backdrop-blur-xl glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/agentpluslogo.jpg" alt="" className="w-8 h-8 rounded-lg object-cover" />
            <span className="text-lg font-bold text-foreground">AgentPlus</span>
          </Link>
          <Link href="/" className="text-primary hover:text-primary/80 transition-colors font-semibold flex items-center gap-2">
            ← Back Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/3 pointer-events-none" />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Have questions about AgentPlus? Our team is here to help. We respond to all inquiries within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="glass-card p-8 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/30 to-primary/20 flex items-center justify-center text-primary mx-auto mb-4"
                >
                  {method.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{method.description}</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {method.actionFn ? (
                    <Button
                      onClick={method.actionFn}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    >
                      {method.action}
                    </Button>
                  ) : (
                    <a href={method.actionLink}>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                        {method.action}
                      </Button>
                    </a>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="space-y-4"
          >
            {[
              { q: 'How quickly can I get started?', a: 'Most clients are up and running within 24-48 hours of signing up.' },
              { q: 'Do you offer support?', a: 'Yes! We offer email support and WhatsApp support for all clients.' },
              { q: 'What payment methods do you accept?', a: 'We accept MPESA, bank transfers, and credit card payments.' },
              { q: 'Can I get a demo first?', a: 'Absolutely! Contact us to schedule a personalized demo.' },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}

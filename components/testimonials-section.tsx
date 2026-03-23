'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'E-commerce Owner',
      company: 'Fashion Boutique Co',
      content: 'AgentPlus increased our lead capture by 340%. The WhatsApp agent handles inquiries 24/7 while we sleep. Amazing ROI!',
      rating: 5,
      image: '👩‍💼',
    },
    {
      name: 'Ahmed Hassan',
      role: 'Marketing Director',
      company: 'Tech Solutions Ltd',
      content: 'Setup was incredibly easy. Our team had it running in minutes. Customer support is responsive and helpful. Highly recommend!',
      rating: 5,
      image: '👨‍💼',
    },
    {
      name: 'Maria Garcia',
      role: 'Business Owner',
      company: 'Real Estate Agency',
      content: 'Saved us 70% on customer support costs. The AI chatbot answers questions intelligently. This tool is a game-changer.',
      rating: 5,
      image: '👩‍💼',
    },
    {
      name: 'David Chen',
      role: 'Founder',
      company: 'SaaS Startup',
      content: 'The Google Maps optimization feature helped us get discovered by 3x more local customers. Worth every penny.',
      rating: 5,
      image: '👨‍💼',
    },
  ]

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-32 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
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
            <span className="text-sm text-primary font-medium">Trusted by businesses</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from real businesses using AgentPlus to automate and grow
          </p>
        </motion.div>

        {/* Testimonials Grid */}
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
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 sm:p-8 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                  >
                    <Star className="w-4 h-4 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground text-sm leading-relaxed mb-6 group-hover:text-foreground/95 transition-colors">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-3 gap-4 sm:gap-8"
        >
          {[
            { label: 'Happy Customers', value: '500+' },
            { label: 'Avg Lead Increase', value: '340%' },
            { label: 'Cost Savings', value: '70%' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                className="text-2xl sm:text-4xl font-bold text-primary mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

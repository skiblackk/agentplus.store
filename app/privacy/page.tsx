'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function PrivacyPage() {
  return (
    <main className="bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-primary/10 bg-background/80 backdrop-blur-xl glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/agentplus-icon.jpg" alt="AgentPlus Logo" className="w-8 h-8 rounded-lg object-cover" />
            <span className="text-lg font-bold text-foreground">AgentPlus</span>
          </Link>
          <Link href="/" className="text-primary hover:text-primary/80 transition-colors font-semibold flex items-center gap-2">
            ← Back Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: February 2025</p>
            </div>

            {[
              {
                title: '1. Introduction',
                content: `AgentPlus ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.`,
              },
              {
                title: '2. Information We Collect',
                content: `We collect information you provide directly to us, such as:
                • Account registration information (name, email, company)
                • Payment information (processed securely)
                • Contact information (phone, WhatsApp)
                • Service usage data and analytics
                • Communication logs and support tickets
                
                We also automatically collect certain information when you use our services:
                • IP address and device information
                • Browser type and operating system
                • Pages visited and time spent
                • Referrer information`,
              },
              {
                title: '3. How We Use Your Information',
                content: `We use the collected information to:
                • Provide, maintain, and improve our services
                • Process transactions and send related confirmations
                • Send service updates and support communications
                • Respond to your inquiries and requests
                • Send marketing communications (with your consent)
                • Comply with legal obligations
                • Prevent fraud and ensure security`,
              },
              {
                title: '4. Data Security',
                content: `We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All data transmissions are encrypted using industry-standard protocols. However, no method of transmission over the Internet is 100% secure.`,
              },
              {
                title: '5. Data Retention',
                content: `We retain your personal data for as long as necessary to provide our services and fulfill the purposes outlined in this policy. You can request deletion of your data at any time, subject to legal requirements.`,
              },
              {
                title: '6. Sharing Your Information',
                content: `We do not sell or share your personal information with third parties, except:
                • With service providers who assist us (under confidentiality agreements)
                • When required by law or to enforce our terms
                • With your explicit consent
                • To protect our rights and safety`,
              },
              {
                title: '7. Your Rights',
                content: `You have the right to:
                • Access your personal data
                • Correct inaccurate information
                • Request deletion of your data
                • Opt-out of marketing communications
                • Data portability
                
                To exercise these rights, contact us at hello@agentplus.ai`,
              },
              {
                title: '8. Cookies',
                content: `We use cookies to enhance your experience on our website. You can control cookie preferences through your browser settings. Some cookies are necessary for website functionality.`,
              },
              {
                title: '9. Contact Us',
                content: `If you have questions about this Privacy Policy or our privacy practices, please contact us:
                
                Email: hello@agentplus.ai
                WhatsApp: +254 759 256514
                
                We will respond within 30 days of your request.`,
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="glass-card p-8"
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}

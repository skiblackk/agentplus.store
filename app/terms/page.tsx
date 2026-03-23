'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function TermsPage() {
  return (
    <main className="bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-primary/10 bg-background/80 backdrop-blur-xl glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/agentplus.logo.jpg" alt="" className="w-8 h-8 rounded-lg object-cover" />
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
              <h1 className="text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: February 2025</p>
            </div>

            {[
              {
                title: '1. Agreement to Terms',
                content: `By accessing and using the AgentPlus website and services, you accept and agree to be bound by and comply with these Terms of Service. If you do not agree to abide by the above, please do not use this service.`,
              },
              {
                title: '2. Use License',
                content: `AgentPlus grants you a limited, non-exclusive, and non-transferable license to access and use our services for your personal or business purposes. This license does not include:
                • Selling, reselling, or commercial exploitation
                • Modifying or deriving works from the service
                • Downloading (except page caching) without permission
                • Reverse engineering or attempting to extract source code
                • Using the service for illegal purposes
                
                If you violate any of these restrictions, your license is immediately revoked.`,
              },
              {
                title: '3. Disclaimer of Warranties',
                content: `The materials on AgentPlus are provided on an "as is" basis. AgentPlus makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.`,
              },
              {
                title: '4. Limitations of Liability',
                content: `In no event shall AgentPlus or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AgentPlus.`,
              },
              {
                title: '5. Accuracy of Materials',
                content: `The materials appearing on AgentPlus website could include technical, typographical, or photographic errors. AgentPlus does not warrant that any of the materials on its website are accurate, complete, or current. AgentPlus may make changes to the materials contained on its website at any time.`,
              },
              {
                title: '6. Links',
                content: `AgentPlus has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by AgentPlus of the site. Use of any such linked website is at the user's own risk.`,
              },
              {
                title: '7. Modifications',
                content: `AgentPlus may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.`,
              },
              {
                title: '8. Governing Law',
                content: `The materials appearing on AgentPlus's website are governed by and construed in accordance with the laws of Kenya, and you irrevocably submit to the exclusive jurisdiction of the courts located in Nairobi, Kenya.`,
              },
              {
                title: '9. Payment Terms',
                content: `All prices are in USD unless otherwise stated. Payment is due upon invoice. We accept MPESA, bank transfers, and credit card payments. Refunds are available within 14 days of purchase if you have not used the service. After 14 days, purchases are non-refundable but may be transferred to another business.`,
              },
              {
                title: '10. Service Availability',
                content: `We aim for 99.9% uptime. However, we do not guarantee uninterrupted service. Scheduled maintenance will be announced in advance. AgentPlus is not liable for any downtime or service interruptions.`,
              },
              {
                title: '11. User Conduct',
                content: `You agree not to use the service:
                • For any illegal purpose
                • To harass, abuse, or harm others
                • To send unsolicited communications
                • To interfere with service operation
                • To infringe on intellectual property rights
                • To share misinformation
                
                Violations may result in immediate account termination.`,
              },
              {
                title: '12. Contact Information',
                content: `If you have questions about these Terms of Service, please contact us:
                
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

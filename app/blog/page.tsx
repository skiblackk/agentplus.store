'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'How AI Agents Can Save Your Business 20 Hours Per Week',
      excerpt: 'Discover how automated AI agents handle customer service, lead capture, and support—freeing up your team to focus on growth.',
      date: '2025-02-15',
      readTime: '5 min read',
      category: 'Business Growth',
      slug: 'ai-agents-save-time',
    },
    {
      id: 2,
      title: 'The Cost of Manual Customer Service vs AI Automation',
      excerpt: 'Learn how automating customer interactions with AI can reduce costs by up to 70% while improving response times.',
      date: '2025-02-10',
      readTime: '6 min read',
      category: 'Cost Savings',
      slug: 'ai-vs-manual-service',
    },
    {
      id: 3,
      title: 'Why African Businesses Are Choosing AI Automation in 2025',
      excerpt: 'A look at why businesses across Kenya, Uganda, and Tanzania are adopting AI agents to scale faster.',
      date: '2025-02-05',
      readTime: '7 min read',
      category: 'Industry News',
      slug: 'african-ai-adoption',
    },
    {
      id: 4,
      title: 'Getting Started with WhatsApp Business AI Agents',
      excerpt: 'A step-by-step guide to setting up your first WhatsApp AI agent and seeing results within 48 hours.',
      date: '2025-01-28',
      readTime: '5 min read',
      category: 'Tutorials',
      slug: 'whatsapp-ai-setup',
    },
    {
      id: 5,
      title: 'Lead Capture Best Practices: Converting More Prospects',
      excerpt: 'Proven strategies to improve your lead capture rate and qualify better prospects with AI-powered chatbots.',
      date: '2025-01-20',
      readTime: '6 min read',
      category: 'Strategy',
      slug: 'lead-capture-guide',
    },
    {
      id: 6,
      title: 'Building Customer Loyalty with 24/7 AI Support',
      excerpt: 'How instant, always-available customer service powered by AI builds loyalty and increases repeat customers.',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Customer Success',
      slug: 'ai-customer-loyalty',
    },
  ]

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
            AgentPlus Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Tips, insights, and stories about AI automation for African businesses
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="glass-card overflow-hidden h-full flex flex-col group cursor-pointer"
              >
                <div className="p-8 flex flex-col h-full">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-4 text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI automation, business growth, and AgentPlus updates delivered to your inbox.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

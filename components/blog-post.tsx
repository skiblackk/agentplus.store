"use client"

import { ArrowRight, Zap, TrendingUp, Users, Lightbulb, Shield } from "lucide-react"

const BlogPost = () => {
  const sections = [
    {
      icon: Zap,
      title: "Automate Repetitive Work and Win Back Your Time",
      description:
        "How many hours a week do you spend replying to the same emails, scheduling calls, or managing client data? AI can now handle all of that — automatically.",
      points: [
        "Automate email replies and reminders",
        "Schedule meetings without back-and-forth messages",
        "Keep all your clients' details organized in one place",
      ],
      highlight: "Imagine starting your day and seeing that 80% of your admin work is already done.",
    },
    {
      icon: TrendingUp,
      title: "Use Data to Make Smarter Business Decisions",
      description:
        "AI doesn't just do work for you — it helps you think better. Instead of guessing what your customers want, you can use AI analytics to:",
      points: [
        "See which products or services people engage with most",
        "Track performance trends over time",
        "Predict what your customers might need next",
      ],
      highlight: "That's data-driven decision-making, and it's how small businesses outsmart big competitors.",
    },
    {
      icon: Users,
      title: "Improve Customer Experience with Personalization",
      description:
        "Modern customers expect brands to understand them. AI makes that easy by learning from every interaction.",
      points: [
        "Send personalized messages automatically",
        "Recommend the right service at the right time",
        "Follow up at exactly the right moment",
      ],
      highlight:
        "People buy from businesses that remember them. AI helps you do that at scale, without losing the human touch.",
    },
    {
      icon: Lightbulb,
      title: "Save Money While Scaling Up",
      description: "Hiring extra staff is expensive. AI helps you grow without immediately growing your payroll.",
      points: [
        "Automate marketing and customer support",
        "Scale without stress or extra headcount",
        "Reduce operational costs significantly",
      ],
      highlight: "For startups or solo entrepreneurs, that's a game-changer.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-background via-purple-50/30 to-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            How Smart Businesses Use AI to Save Time and Grow Faster in 2025
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Running a business today means wearing a dozen hats. But what if you could offload half those tasks to a
            system that never gets tired, never forgets, and actually learns from what you do?
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-200/30">
          <p className="text-lg text-foreground leading-relaxed">
            That's what artificial intelligence (AI) is doing for businesses in 2025. From small startups to solo
            freelancers, AI tools like AgentPlus are becoming the secret weapon that helps people save time, automate
            tasks, and focus on what truly matters — growth.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <div key={index} className="group">
                <div className="flex gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{section.title}</h3>
                    <p className="text-muted-foreground mb-4">{section.description}</p>

                    <ul className="space-y-2 mb-4">
                      {section.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <div className="flex items-center justify-center h-5 w-5 rounded-full bg-purple-500/20">
                              <div className="h-2 w-2 rounded-full bg-purple-500" />
                            </div>
                          </div>
                          <span className="text-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-200/30">
                      <p className="text-sm font-semibold text-blue-900">💡 {section.highlight}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Competitive Advantage Section */}
        <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="flex gap-4 mb-4">
            <Shield className="h-8 w-8 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Turn AI Into Your Competitive Advantage</h3>
              <p className="text-white/90 mb-4">
                Businesses that adopt AI now are getting ahead — those that ignore it will fall behind. It's not just
                about automating; it's about evolving how you operate.
              </p>
              <p className="text-white/90">
                AgentPlus gives you an edge by making powerful AI tools easy to use, even if you're not a tech expert.
                No coding, no complex setup — just plug it in and let AI do the heavy lifting.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            AI isn't just for big corporations anymore. It's for every freelancer, business owner, and creative who
            wants to do more with less effort.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
            Start Your Free Trial Today
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default BlogPost

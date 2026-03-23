"use client"

import { CheckCircle2, Clock, BarChart3, Zap, Shield, Users } from "lucide-react"

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save 10+ Hours Per Week",
      description: "Automate repetitive tasks and reclaim your time for high-value activities",
    },
    {
      icon: BarChart3,
      title: "Increase Revenue by 30%",
      description: "Close more deals with AI-powered follow-ups and personalized outreach",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "No coding required. Start automating in minutes, not months",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Your data is encrypted and protected with industry-leading security",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Get help from our AI experts whenever you need it",
    },
    {
      icon: CheckCircle2,
      title: "100% Money-Back Guarantee",
      description: "Try AgentPlus risk-free for 30 days. No questions asked.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-purple-50/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Choose AgentPlus?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of businesses already saving time and growing faster with AI automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-white border border-purple-200/30 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 text-white group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-purple-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection

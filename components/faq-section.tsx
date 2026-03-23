"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What is AgentPlus?",
    answer:
      "AgentPlus is an AI-powered platform designed to help agents and business professionals manage clients, automate communication, and close deals faster — all in one place.",
  },
  {
    id: 2,
    question: "How can AgentPlus help me grow my business?",
    answer:
      "AgentPlus saves you hours every week by automating repetitive tasks like client follow-ups, scheduling, and data tracking, so you can focus on selling and service.",
  },
  {
    id: 3,
    question: "Is AgentPlus free to use?",
    answer:
      "Yes! AgentPlus offers a free plan so you can start exploring its features before upgrading to unlock advanced tools.",
  },
  {
    id: 4,
    question: "Who is AgentPlus for?",
    answer:
      "AgentPlus is built for real estate agents, freelancers, and business consultants who want to manage leads and clients efficiently using AI automation.",
  },
  {
    id: 5,
    question: "How is AgentPlus different from other platforms?",
    answer:
      "Unlike generic CRMs, AgentPlus uses intelligent automation and AI predictions to help you know when to reach out to clients — before you even realize you should.",
  },
  {
    id: 6,
    question: "How can I start using AgentPlus?",
    answer: "Simply visit https://agentplus.store and sign up. No credit card needed.",
  },
]

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-background to-purple-50/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="h-8 w-8 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">Everything you need to know about AgentPlus</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="group border border-purple-200/30 rounded-lg overflow-hidden hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 bg-white/50 backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-purple-50/50 transition-colors text-left"
              >
                <span className="font-semibold text-foreground group-hover:text-purple-600 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-600 transition-transform duration-300 flex-shrink-0 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openId === faq.id && (
                <div className="px-6 py-4 bg-gradient-to-r from-purple-50/50 to-blue-50/50 border-t border-purple-200/30">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-200/30 text-center">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">
            Our team is here to help. Contact us on WhatsApp for personalized support.
          </p>
          <a
            href="https://wa.me/0759256514?text=Hi%20I%20have%20questions%20about%20AgentPlus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Chat with Us
          </a>
        </div>
      </div>
    </section>
  )
}

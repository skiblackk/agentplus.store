"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function PricingSection() {
  const [billingType, setBillingType] = useState<"once" | "monthly">("once")

  const pricingTiers = [
    {
      name: "Starter",
      once: "$200",
      monthly: "$17",
      description: "Perfect for individuals getting started with AI agents",
      features: ["1 AI Agent", "Basic automation tasks", "Email support", "5GB storage", "Standard response time"],
    },
    {
      name: "Professional",
      once: "$499",
      monthly: "$42",
      description: "Ideal for professionals and small teams",
      features: [
        "5 AI Agents",
        "Advanced automation",
        "Priority support",
        "50GB storage",
        "Fast response time",
        "Custom integrations",
        "Analytics dashboard",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Premium",
      once: "$1,000",
      monthly: "$83",
      description: "For organizations requiring maximum power and scale",
      features: [
        "Unlimited AI Agents",
        "Enterprise automation",
        "24/7 dedicated support",
        "Unlimited storage",
        "Instant response time",
        "Custom integrations",
        "Advanced analytics",
        "Full API access",
        "White-label options",
        "Custom AI model training",
        "Dedicated account manager",
      ],
    },
  ]

  const getWhatsAppLink = (packageName: string, price: string, type: string) => {
    const phoneNumber = "254759256514"
    const billingText = type === "once" ? "one-time payment" : "monthly subscription (12 months)"
    const message = `Hi, I am interested in the AI Agent Plus ${packageName} package - ${price} ${billingText}`
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  }

  return (
    <div className="bg-black text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Agent Package
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Select the perfect plan for your AI automation needs
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setBillingType("once")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingType === "once"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              One-Time Payment
            </button>
            <button
              onClick={() => setBillingType("monthly")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingType === "monthly"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              Monthly (12 Months)
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-6 sm:p-8 ${
                tier.popular
                  ? "bg-gradient-to-b from-purple-900/40 to-blue-900/40 border-2 border-purple-500/50"
                  : "bg-gray-900/50 border border-gray-800"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-4">{tier.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-bold">
                    {billingType === "once" ? tier.once : tier.monthly}
                  </span>
                  <span className="text-gray-400 text-sm">{billingType === "once" ? "one-time" : "/month"}</span>
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full py-5 sm:py-6 rounded-full text-base sm:text-lg font-semibold ${
                  tier.popular
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                <a
                  href={getWhatsAppLink(tier.name, billingType === "once" ? tier.once : tier.monthly, billingType)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

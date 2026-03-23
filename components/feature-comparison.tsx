"use client"

import { Check, X } from "lucide-react"
import React from "react"

const features = [
  { category: "AI Agents", items: ["Number of AI Agents", "Custom AI Training", "Agent Performance Analytics"] },
  { category: "Automation", items: ["Basic Automation", "Advanced Workflows", "Custom Integrations", "API Access"] },
  {
    category: "Support",
    items: ["Email Support", "Priority Support", "24/7 Dedicated Support", "Dedicated Account Manager"],
  },
  { category: "Storage & Performance", items: ["Storage Capacity", "Response Time", "Uptime Guarantee"] },
  {
    category: "Advanced Features",
    items: ["White-label Options", "Custom Branding", "Advanced Analytics", "Bulk Operations"],
  },
]

const comparisonData = [
  {
    name: "Starter",
    price: "$200",
    features: {
      "Number of AI Agents": true,
      "Custom AI Training": false,
      "Agent Performance Analytics": false,
      "Basic Automation": true,
      "Advanced Workflows": false,
      "Custom Integrations": false,
      "API Access": false,
      "Email Support": true,
      "Priority Support": false,
      "24/7 Dedicated Support": false,
      "Dedicated Account Manager": false,
      "Storage Capacity": "5GB",
      "Response Time": "Standard",
      "Uptime Guarantee": "99%",
      "White-label Options": false,
      "Custom Branding": false,
      "Advanced Analytics": false,
      "Bulk Operations": false,
    },
  },
  {
    name: "Professional",
    price: "$499",
    popular: true,
    features: {
      "Number of AI Agents": "5 Agents",
      "Custom AI Training": false,
      "Agent Performance Analytics": true,
      "Basic Automation": true,
      "Advanced Workflows": true,
      "Custom Integrations": true,
      "API Access": true,
      "Email Support": true,
      "Priority Support": true,
      "24/7 Dedicated Support": false,
      "Dedicated Account Manager": false,
      "Storage Capacity": "50GB",
      "Response Time": "Fast",
      "Uptime Guarantee": "99.5%",
      "White-label Options": false,
      "Custom Branding": false,
      "Advanced Analytics": true,
      "Bulk Operations": true,
    },
  },
  {
    name: "Premium",
    price: "$1,000",
    features: {
      "Number of AI Agents": "Unlimited",
      "Custom AI Training": true,
      "Agent Performance Analytics": true,
      "Basic Automation": true,
      "Advanced Workflows": true,
      "Custom Integrations": true,
      "API Access": true,
      "Email Support": true,
      "Priority Support": true,
      "24/7 Dedicated Support": true,
      "Dedicated Account Manager": true,
      "Storage Capacity": "Unlimited",
      "Response Time": "Instant",
      "Uptime Guarantee": "99.99%",
      "White-label Options": true,
      "Custom Branding": true,
      "Advanced Analytics": true,
      "Bulk Operations": true,
    },
  },
]

export default function FeatureComparison() {
  return (
    <section className="py-12 sm:py-20 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Feature Comparison
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade anytime as you grow.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-purple-500/20">
                <th className="text-left py-4 px-4 text-gray-400 font-semibold text-sm">Features</th>
                {comparisonData.map((plan) => (
                  <th key={plan.name} className="text-center py-4 px-4">
                    <div className="mb-2">
                      <p className="text-white font-bold text-lg">{plan.name}</p>
                      <p className="text-purple-400 font-semibold">{plan.price}</p>
                    </div>
                    {plan.popular && (
                      <span className="inline-block bg-purple-500 text-white text-xs px-2 py-1 rounded">
                        Most Popular
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((category) => (
                <React.Fragment key={category.category}>
                  <tr className="border-b border-purple-500/10">
                    <td colSpan={4} className="py-3 px-4 bg-purple-900/10">
                      <p className="text-purple-300 font-semibold text-sm">{category.category}</p>
                    </td>
                  </tr>
                  {category.items.map((item) => (
                    <tr key={item} className="border-b border-purple-500/10 hover:bg-purple-900/5">
                      <td className="py-3 px-4 text-gray-300 text-sm">{item}</td>
                      {comparisonData.map((plan) => {
                        const value = plan.features[item as keyof typeof plan.features]
                        return (
                          <td key={plan.name} className="py-3 px-4 text-center">
                            {typeof value === "boolean" ? (
                              value ? (
                                <Check className="w-5 h-5 text-green-400 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-600 mx-auto" />
                              )
                            ) : (
                              <span className="text-gray-300 text-sm font-medium">{value}</span>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {comparisonData.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-6 border ${
                plan.popular
                  ? "bg-gradient-to-b from-purple-900/40 to-blue-900/40 border-purple-500/50"
                  : "bg-gray-900/50 border-gray-800"
              }`}
            >
              <div className="mb-6">
                <p className="text-white font-bold text-xl">{plan.name}</p>
                <p className="text-purple-400 font-semibold text-lg">{plan.price}</p>
                {plan.popular && (
                  <span className="inline-block bg-purple-500 text-white text-xs px-2 py-1 rounded mt-2">
                    Most Popular
                  </span>
                )}
              </div>

              <div className="space-y-4">
                {features.map((category) => (
                  <div key={category.category}>
                    <p className="text-purple-300 font-semibold text-sm mb-2">{category.category}</p>
                    <div className="space-y-2">
                      {category.items.map((item) => {
                        const value = plan.features[item as keyof typeof plan.features]
                        return (
                          <div key={item} className="flex items-center justify-between text-sm">
                            <span className="text-gray-300">{item}</span>
                            {typeof value === "boolean" ? (
                              value ? (
                                <Check className="w-4 h-4 text-green-400" />
                              ) : (
                                <X className="w-4 h-4 text-gray-600" />
                              )
                            ) : (
                              <span className="text-gray-400 font-medium">{value}</span>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

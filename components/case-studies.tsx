"use client"

const caseStudies = [
  {
    title: "Real Estate Agency Increases Leads by 45%",
    company: "Premier Properties Group",
    industry: "Real Estate",
    challenge: "Manual follow-ups were taking 20+ hours per week, causing leads to go cold",
    solution: "Implemented Agent Plus Professional plan for automated client follow-ups and scheduling",
    results: [
      { metric: "45%", label: "More qualified leads" },
      { metric: "15 hrs", label: "Saved per week" },
      { metric: "3x", label: "Faster response time" },
      { metric: "$50K+", label: "Additional revenue" },
    ],
    testimonial:
      "Agent Plus transformed our lead management. We're now following up with every lead within minutes, not days. The ROI was immediate.",
    author: "James Wilson, CEO",
  },
  {
    title: "Freelance Consultant Scales to 3x Clients",
    company: "Digital Strategy Experts",
    industry: "Consulting",
    challenge: "Limited by manual client communication and scheduling constraints",
    solution: "Used Agent Plus Starter plan to automate client onboarding and project updates",
    results: [
      { metric: "3x", label: "More clients served" },
      { metric: "10 hrs", label: "Freed up weekly" },
      { metric: "98%", label: "Client satisfaction" },
      { metric: "$120K+", label: "New annual revenue" },
    ],
    testimonial:
      "I went from managing 5 clients to 15 clients without hiring. Agent Plus handles all the repetitive communication.",
    author: "Maria Garcia, Founder",
  },
  {
    title: "E-commerce Support Team Reduces Response Time by 80%",
    company: "TechGear Online",
    industry: "E-commerce",
    challenge: "Customer support backlog growing, response times exceeding 24 hours",
    solution: "Deployed Agent Plus Premium for enterprise-level automation and 24/7 support",
    results: [
      { metric: "80%", label: "Faster responses" },
      { metric: "24/7", label: "Instant support" },
      { metric: "92%", label: "Issue resolution rate" },
      { metric: "$200K+", label: "Cost savings annually" },
    ],
    testimonial:
      "Our customers now get instant responses to common questions. Support team can focus on complex issues. Game changer.",
    author: "David Chen, Operations Director",
  },
]

export default function CaseStudies() {
  return (
    <section className="py-12 sm:py-20 px-4 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Real Results from Real Businesses
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            See how Agent Plus is helping businesses across industries save time and scale faster
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-2xl p-6 sm:p-8 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4">
                <span className="inline-block bg-purple-500/20 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {study.industry}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-sm text-gray-400">{study.company}</p>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-6">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Challenge</p>
                  <p className="text-sm text-gray-300">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Solution</p>
                  <p className="text-sm text-gray-300">{study.solution}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 pb-6 border-b border-purple-500/20">
                {study.results.map((result, i) => (
                  <div key={i} className="bg-black/30 rounded-lg p-3">
                    <p className="text-lg sm:text-xl font-bold text-purple-400">{result.metric}</p>
                    <p className="text-xs text-gray-400">{result.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-black/30 rounded-lg p-4 border border-purple-500/10">
                <p className="text-sm text-gray-300 italic mb-3">"{study.testimonial}"</p>
                <p className="text-xs text-purple-400 font-semibold">{study.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

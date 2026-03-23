"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "TechFlow Solutions",
    content:
      "Agent Plus transformed how we handle customer inquiries. Our response time dropped from hours to minutes, and customer satisfaction scores increased by 40%. The ROI was evident within the first month.",
    rating: 5,
    image: "/professional-woman-headshot.png",
  },
  {
    name: "Marcus Chen",
    role: "Operations Manager",
    company: "Global Retail Co",
    content:
      "We were skeptical at first, but the AI agents handle our inventory queries flawlessly. It's like having a 24/7 team member who never takes a break. Highly recommend the Professional package.",
    rating: 5,
    image: "/professional-man-headshot.png",
  },
  {
    name: "Lisa Rodriguez",
    role: "Customer Success Lead",
    company: "CloudServe Inc",
    content:
      "Agent Plus handles our tier-1 support queries perfectly. Our human team can now focus on complex issues. The 7-minute free trial convinced us immediately - it just works.",
    rating: 5,
    image: "/professional-woman-customer-service.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-20 px-4 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Join hundreds of businesses already transforming their operations with Agent Plus AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 sm:p-8 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-purple-500/30"
                />
                <div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-purple-400">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

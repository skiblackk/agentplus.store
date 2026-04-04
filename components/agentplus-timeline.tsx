"use client";

import { Calendar, Code, MessageSquare, Zap, Shield, Rocket, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { motion } from "framer-motion";

const agentplusTimelineData = [
  {
    id: 1,
    title: "24/7 Availability",
    date: "Core Feature",
    content: "Our AI agents never sleep, ensuring your business stays responsive to customer inquiries around the clock.",
    category: "Service",
    icon: Clock,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Instant Response",
    date: "Efficiency",
    content: "Respond to customer queries on WhatsApp, Instagram, and Facebook in milliseconds, boosting satisfaction and conversion.",
    category: "Performance",
    icon: Zap,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Lead Capture",
    date: "Growth",
    content: "Automatically qualify and capture leads from every conversation, feeding them directly into your CRM or email.",
    category: "Sales",
    icon: MessageSquare,
    relatedIds: [1, 5],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "Secure & Reliable",
    date: "Trust",
    content: "Built with enterprise-grade security to ensure your data and customer conversations are always protected.",
    category: "Security",
    icon: Shield,
    relatedIds: [2, 6],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 5,
    title: "Rapid Deployment",
    date: "Implementation",
    content: "Get your custom AI agent live in days, not weeks. Our team handles the entire setup process for you.",
    category: "Setup",
    icon: Rocket,
    relatedIds: [3, 6],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 6,
    title: "Custom Logic",
    date: "Intelligence",
    content: "We train agents on your specific business data, ensuring they provide accurate and helpful information to your clients.",
    category: "AI",
    icon: Code,
    relatedIds: [4, 5],
    status: "in-progress" as const,
    energy: 80,
  },
];

export function AgentPlusTimeline() {
  return (
    <section className="bg-black py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Why Choose AgentPlus?
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Experience the future of business automation with our orbital feature map. Click on any node to explore how we transform your operations.
          </p>
        </motion.div>
        
        <div className="h-[600px] w-full">
          <RadialOrbitalTimeline timelineData={agentplusTimelineData} />
        </div>
      </div>
    </section>
  );
}

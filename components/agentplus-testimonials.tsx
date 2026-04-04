"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "The WhatsApp AI agent from AgentPlus has been a game-changer for our customer support. It handles 90% of queries instantly, 24/7.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Sarah Musau",
    role: "Retail Manager",
  },
  {
    text: "Setting up our custom chatbot was incredibly simple. The team at AgentPlus handled everything, and we saw results within the first week.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "David Ochieng",
    role: "E-commerce Owner",
  },
  {
    text: "AgentPlus AI agents never sleep. Our lead capture has increased by 40% since we started using their automated solutions.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Elena Njeri",
    role: "Marketing Director",
  },
  {
    text: "Finally, an AI solution that understands our local business needs. Affordable, reliable, and highly effective.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "John Mutua",
    role: "Tech Startup Founder",
  },
  {
    text: "The 24/7 availability of the AI agents means we never miss a customer inquiry, even during holidays and late nights.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Grace Wambui",
    role: "Customer Success Lead",
  },
  {
    text: "AgentPlus has streamlined our appointment booking process. It's like having a full-time assistant for a fraction of the cost.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Michael Kamau",
    role: "Operations Director",
  },
  {
    text: "The integration with our existing systems was seamless. The AI agent provides accurate information to our clients every time.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face",
    name: "Amina Abdullahi",
    role: "Business Analyst",
  },
  {
    text: "Our team can now focus on complex tasks while the AgentPlus AI handles all the repetitive questions. Efficiency at its best.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face",
    name: "Samuel Otieno",
    role: "IT Manager",
  },
  {
    text: "We highly recommend AgentPlus for any business looking to scale their customer interactions without increasing headcount.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Lucy Mwangi",
    role: "Sales Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const AgentPlusTestimonials = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-10"
        >
          <div className="flex justify-center">
            <div className="border border-white/20 py-1 px-4 rounded-lg text-sm font-medium text-white bg-white/5 backdrop-blur-sm">
              Testimonials
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mt-5 text-center text-white">
            What our users say
          </h2>
          <p className="text-center mt-5 text-neutral-400">
            Discover how businesses are transforming their operations with AgentPlus AI agents.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
